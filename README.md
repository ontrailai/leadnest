# LeadNest - Lead Generation for Property Managers

LeadNest is a smart lead generation app that helps property managers find potential clients by scanning Facebook group posts and enriching them with AI-powered insights.

## Demo Access

To quickly demo the application without setting up authentication:

- Email: `cindy@tryacre.io`
- Password: `acre123`

These credentials bypass the normal authentication flow and provide immediate access to all features.

## Features

- 🔍 Scan Facebook groups for property management leads
- 🧠 AI-powered lead enrichment with intent scoring
- 💬 Auto-generated outreach messages
- 📊 Clean dashboard with lead management
- 🎯 Targeted search by city and keywords
- 🔐 Secure user authentication with Supabase
- 👤 User registration and login
- 🚪 Session management and logout

## Setup Instructions

### Prerequisites

- Node.js 16+ and npm
- OpenAI API key
- Apify account and API token
- Facebook session cookie
- Supabase project (for authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/FacebookL.git
cd FacebookL
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables:

Create `.env` files in both `backend/` and `frontend/` directories:

**backend/.env**
```
PORT=5001
OPENAI_API_KEY=your_openai_api_key_here
APIFY_TOKEN=your_apify_token_here
TEST_MODE=true
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
```

**frontend/.env.local**
```
NEXT_PUBLIC_API_URL=http://localhost:5001
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_TEST_MODE=true
```

4. Add Facebook session cookie:
- Log into Facebook
- Open browser developer tools
- Copy the session cookie
- Paste it into `config/cookie.json`

5. Configure Facebook groups in `config/groupList.json`

6. Set up Supabase:
- Create a new Supabase project at https://supabase.com
- Enable email/password authentication in the Authentication settings
- Copy your project URL and anon key to the frontend `.env.local`
- Copy your service role key to the backend `.env`

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

3. Open http://localhost:3000 in your browser

### Test Mode

To run without Apify (using mock data) and bypass authentication:
```bash
# Set TEST_MODE=true in backend/.env
# Set NEXT_PUBLIC_TEST_MODE=true in frontend/.env.local
cd backend
npm run dev:test
```

In test mode:
- Authentication is bypassed
- Mock data is used instead of real Facebook scraping
- A "Skip login" link appears on the login page

## Usage

1. Select a city from the dropdown
2. Enter search phrases (or use defaults)
3. Click "Run Lead Scan"
4. View enriched leads in the results table
5. Copy outreach messages for qualified leads

## API Endpoints

- `POST /api/scrape` - Trigger Facebook group scraping
- `POST /api/enrich` - Enrich posts with GPT analysis

## Project Structure

```
FacebookL/
├── frontend/          # Next.js frontend
├── backend/           # Express backend
├── gpt/              # GPT integration
├── scripts/          # Apify scripts
├── config/           # Configuration files
└── README.md
```
