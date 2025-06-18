const OpenAI = require('openai');
const fs = require('fs').promises;
const path = require('path');

class GPTService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.promptTemplate = null;
  }

  async loadPromptTemplate() {
    if (!this.promptTemplate) {
      const promptPath = path.join(__dirname, '../../gpt/prompt_template.txt');
      this.promptTemplate = await fs.readFile(promptPath, 'utf8');
    }
    return this.promptTemplate;
  }

  async analyzePost(post) {
    try {
      const systemPrompt = await this.loadPromptTemplate();
      
      const response = await this.openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: `Analyze this Facebook post for property management lead potential:
            
            Poster: ${post.posterName}
            Group: ${post.groupName}
            Post: ${post.postText}
            
            Provide your analysis in JSON format.`
          }
        ],
        temperature: 0.7,
        response_format: { type: "json_object" }
      });

      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('GPT analysis error:', error);
      throw error;
    }
  }
}

module.exports = new GPTService();
