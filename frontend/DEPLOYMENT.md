# LeadNest Frontend Deployment Configuration

## Environment Variables for Render

When deploying the frontend to Render, set the following environment variables:

```
NEXT_PUBLIC_TEST_MODE=true
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-anon-key
```

## How it Works

1. When `NEXT_PUBLIC_TEST_MODE=true`, the app will:
   - Skip all API calls to the backend
   - Use local mock data from `/data/mockLeads.js`
   - Simulate loading states for better UX
   - Show realistic property management leads for each city

2. The mock data includes:
   - 4 leads for Austin
   - 4 leads for Denver  
   - 4 leads for Miami
   - Each lead has complete enrichment data (intent scores, personas, outreach messages, etc.)

3. No backend is required - the app runs entirely on the frontend with mock data

## Testing Locally

To test the demo mode locally:

1. Ensure `.env.local` has `NEXT_PUBLIC_TEST_MODE=true`
2. Run `npm run dev`
3. Login with demo credentials: `cindy@tryacre.io` / `acre123`
4. Select a city and click "Run Lead Scan"
5. Mock leads will appear after a simulated loading delay

## Benefits

- No backend server costs
- No API failures or network errors
- Consistent demo experience
- Fast response times
- Full functionality demonstration
