const express = require('express');
const router = express.Router();
const gptService = require('../services/gptService');
const { enrichLead } = require('../../gpt/leadEnrichment');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { posts } = req.body;

    if (!posts || !Array.isArray(posts)) {
      return res.status(400).json({ error: 'Posts array is required' });
    }

    // Enrich each post
    const enrichedLeads = await Promise.all(
      posts.map(async (post) => {
        try {
          // Check if post already has enrichment data (test mode)
          if (post.intentScore !== undefined && post.summary && post.outreachMessage) {
            console.log('Using pre-enriched data for:', post.posterName);
            return {
              ...post,
              enrichmentStatus: 'success'
            };
          }
          
          // Otherwise, enrich with GPT
          const enrichedData = await enrichLead(post);
          return {
            ...post,
            ...enrichedData,
            enrichmentStatus: 'success'
          };
        } catch (error) {
          console.error('Error enriching lead:', error);
          return {
            ...post,
            enrichmentStatus: 'failed',
            enrichmentError: error.message,
            summary: 'Failed to analyze this post',
            intentScore: 0,
            persona: 'unknown',
            outreachMessage: '',
            riskFlags: ['enrichment_failed']
          };
        }
      })
    );

    res.json({ 
      success: true, 
      leads: enrichedLeads,
      totalLeads: enrichedLeads.length,
      successfulEnrichments: enrichedLeads.filter(l => l.enrichmentStatus === 'success').length
    });

  } catch (error) {
    console.error('Enrichment error:', error);
    res.status(500).json({ 
      error: 'Failed to enrich leads', 
      details: error.message 
    });
  }
});

module.exports = router;
