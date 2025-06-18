#!/usr/bin/env node

const { ApifyClient } = require('apify-client');
require('dotenv').config({ path: '../backend/.env' });

async function startScrape(payload) {
  try {
    const { groupUrls, searchPhrases, cookie } = JSON.parse(payload);
    
    // Initialize the ApifyClient
    const client = new ApifyClient({
      token: process.env.APIFY_TOKEN,
    });

    // Facebook Groups Scraper actor configuration
    const input = {
      startUrls: groupUrls.map(url => ({ url })),
      searchKeywords: searchPhrases,
      maxPostsPerGroup: 50,
      scrollTimeout: 40,
      cookieString: cookie,
      proxyConfiguration: {
        useApifyProxy: true,
        apifyProxyGroups: ["RESIDENTIAL"]
      }
    };

    // Run the actor
    console.error('Starting Facebook Groups scrape...');
    const run = await client.actor('apify/facebook-groups-scraper').call(input);

    // Fetch the results
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    
    // Transform results to our format
    const posts = items.map(item => ({
      posterName: item.authorName || 'Unknown',
      groupName: item.groupName || 'Unknown Group',
      postText: item.text || item.postText || '',
      postUrl: item.url || item.postUrl || '',
      timestamp: item.timestamp || new Date().toISOString(),
      reactions: item.reactions || 0,
      comments: item.comments || 0,
      shares: item.shares || 0
    }));

    // Output results as JSON to stdout
    console.log(JSON.stringify(posts));

  } catch (error) {
    console.error('Scraping error:', error.message);
    process.exit(1);
  }
}

// Get payload from command line argument
const payload = process.argv[2];
if (!payload) {
  console.error('Please provide payload as argument');
  process.exit(1);
}

startScrape(payload);
