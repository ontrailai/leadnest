const express = require('express');
const router = express.Router();
const apifyService = require('../services/apifyService');
const fs = require('fs').promises;
const path = require('path');
const mockLeads = require('../utils/mockLeads');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { city, searchPhrases } = req.body;

    if (!city || !searchPhrases || searchPhrases.length === 0) {
      return res.status(400).json({ error: 'City and search phrases are required' });
    }

    // If in test mode, return mock data filtered by city
    if (process.env.TEST_MODE === 'true') {
      console.log('Running in test mode - returning mock posts for:', city);
      
      // Filter mock leads by city
      const cityFilteredLeads = mockLeads.filter(lead => {
        const leadCity = lead.city || (lead.groupName.includes('Austin') ? 'Austin' : 
                                       lead.groupName.includes('Denver') ? 'Denver' : 
                                       lead.groupName.includes('Miami') ? 'Miami' : null);
        return leadCity === city;
      });
      
      return res.json({ 
        success: true, 
        posts: cityFilteredLeads,
        testMode: true 
      });
    }

    // Load group list for the city
    const groupListPath = path.join(__dirname, '../../config/groupList.json');
    const groupList = JSON.parse(await fs.readFile(groupListPath, 'utf8'));
    
    if (!groupList[city]) {
      return res.status(400).json({ error: 'No Facebook groups configured for this city' });
    }

    // Load Facebook cookie
    const cookiePath = path.join(__dirname, '../../config/cookie.json');
    const cookieData = JSON.parse(await fs.readFile(cookiePath, 'utf8'));

    // Call Apify service
    const posts = await apifyService.scrapeFacebookGroups({
      groupUrls: groupList[city],
      searchPhrases,
      cookie: cookieData.cookie
    });

    res.json({ success: true, posts });

  } catch (error) {
    console.error('Scrape error:', error);
    res.status(500).json({ 
      error: 'Failed to scrape Facebook groups', 
      details: error.message 
    });
  }
});

module.exports = router;
