require('dotenv').config();
const express = require('express');
const cors = require('cors');
const scrapeRoutes = require('./routes/scrape');
const enrichRoutes = require('./routes/enrich');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/scrape', scrapeRoutes);
app.use('/api/enrich', enrichRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'LeadNest backend is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`LeadNest backend running on port ${PORT}`);
  if (process.env.TEST_MODE) {
    console.log('Running in TEST MODE - using mock data');
  }
});
