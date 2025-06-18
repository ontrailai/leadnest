const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || 'placeholder-key';

// Only create Supabase client if we have real credentials
const supabase = (supabaseUrl !== 'your_supabase_project_url' && supabaseUrl !== 'https://placeholder.supabase.co') 
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const token = authHeader.replace('Bearer ', '');

    // Check for demo token
    if (token === 'demo_user_session') {
      req.user = { email: 'cindy@tryacre.io', id: 'demo_user' };
      return next();
    }

    // If Supabase is not configured, reject other tokens
    if (!supabase) {
      return res.status(401).json({ error: 'Authentication service not configured' });
    }

    // Verify the token with Supabase
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({ error: 'Authentication error' });
  }
};

module.exports = authMiddleware;
