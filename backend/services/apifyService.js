const { ApifyClient } = require('apify-client');
const { exec } = require('child_process');
const util = require('util');
const path = require('path');

const execPromise = util.promisify(exec);

class ApifyService {
  constructor() {
    this.client = new ApifyClient({
      token: process.env.APIFY_TOKEN,
    });
  }

  async scrapeFacebookGroups({ groupUrls, searchPhrases, cookie }) {
    try {
      // Option 1: Use the startScrape.js script
      const scriptPath = path.join(__dirname, '../../scripts/startScrape.js');
      const payload = {
        groupUrls,
        searchPhrases,
        cookie
      };

      const { stdout, stderr } = await execPromise(
        `node ${scriptPath} '${JSON.stringify(payload)}'`
      );

      if (stderr) {
        console.error('Script stderr:', stderr);
      }

      return JSON.parse(stdout);

    } catch (error) {
      console.error('Apify service error:', error);
      
      // Fallback to direct Apify client call
      const actorId = 'apify/facebook-groups-scraper'; // Replace with actual actor ID
      
      const run = await this.client.actor(actorId).call({
        startUrls: groupUrls.map(url => ({ url })),
        searchTerms: searchPhrases,
        maxPosts: 50,
        proxy: {
          useApifyProxy: true,
        },
        cookies: [{ name: 'c_user', value: cookie }]
      });

      // Get results from the run
      const { items } = await this.client.dataset(run.defaultDatasetId).listItems();
      
      return items.map(item => ({
        posterName: item.authorName || 'Unknown',
        groupName: item.groupName || 'Unknown Group',
        postText: item.text || '',
        postUrl: item.url || '',
        timestamp: item.timestamp || new Date().toISOString()
      }));
    }
  }
}

module.exports = new ApifyService();
