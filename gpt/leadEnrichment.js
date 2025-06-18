const gptService = require('../backend/services/gptService');

async function enrichLead(post, context = {}) {
  try {
    // Call GPT service to analyze the post
    const analysis = await gptService.analyzePost(post);
    
    // Ensure we have all required fields with defaults
    return {
      summary: analysis.summary || 'Unable to summarize post',
      intentScore: analysis.intentScore || 0,
      persona: analysis.persona || 'unknown',
      outreachMessage: analysis.outreachMessage || '',
      riskFlags: analysis.riskFlags || [],
      matchedIntent: analysis.matchedIntent || 'general_inquiry',
      urgency: analysis.urgency || 'low',
      propertyDetails: analysis.propertyDetails || {},
      nextSteps: analysis.nextSteps || []
    };
  } catch (error) {
    console.error('Lead enrichment error:', error);
    
    // Return a basic analysis if GPT fails
    const hasUrgentKeywords = /urgent|asap|immediately|help/i.test(post.postText);
    const hasPMKeywords = /property manager|pm|manage|burned out|tired of/i.test(post.postText);
    
    return {
      summary: 'Basic analysis: ' + post.postText.substring(0, 100) + '...',
      intentScore: hasPMKeywords ? 50 : 20,
      persona: 'potential_lead',
      outreachMessage: `Hi ${post.posterName}, I saw your post in ${post.groupName} and I'd love to help with your property management needs. Let's connect!`,
      riskFlags: ['auto_analysis'],
      matchedIntent: hasPMKeywords ? 'property_management' : 'general',
      urgency: hasUrgentKeywords ? 'high' : 'medium',
      propertyDetails: {},
      nextSteps: ['Send personalized message', 'Follow up within 24 hours']
    };
  }
}

module.exports = { enrichLead };
