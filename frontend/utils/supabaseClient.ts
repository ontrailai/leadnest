import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

// Only create Supabase client if we have real credentials
export const supabase = (supabaseUrl !== 'your_supabase_project_url' && supabaseUrl !== 'https://placeholder.supabase.co') 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
