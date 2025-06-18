import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchForm from '@/components/SearchForm';
import LeadsTable from '@/components/LeadsTable';
import LoadingState from '@/components/LoadingState';
import EmptyState from '@/components/EmptyState';
import StatsBar from '@/components/StatsBar';
import axios from 'axios';
import { Sparkles, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/utils/supabaseClient';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export default function Home() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const { user, loading: authLoading, signOut } = useAuth();
  const router = useRouter();
  const [isDemoUser, setIsDemoUser] = useState(false);

  useEffect(() => {
    // Check for demo token
    const demoToken = localStorage.getItem('demo_token');
    const demoUser = localStorage.getItem('demo_user');
    
    if (demoToken === 'demo_user_session' && demoUser) {
      setIsDemoUser(true);
      return;
    }

    // Redirect to login if not authenticated (removed test mode check)
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  const handleSignOut = async () => {
    // If demo user, clear demo tokens
    if (isDemoUser) {
      localStorage.removeItem('demo_token');
      localStorage.removeItem('demo_user');
      router.push('/login');
      return;
    }
    
    // Normal sign out
    await signOut();
  };

  const handleSearch = async ({ city, searchPhrases }) => {
    setLoading(true);
    setError(null);
    setLeads([]);
    setHasSearched(true);
    
    try {
      // Include auth token in requests if available
      const headers = {};
      
      // Check for demo token first
      if (isDemoUser) {
        headers.Authorization = 'Bearer demo_user_session';
      } else if (user && supabase) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.access_token) {
          headers.Authorization = `Bearer ${session.access_token}`;
        }
      }

      // Step 1: Scrape Facebook posts
      const scrapeResponse = await axios.post(`${API_URL}/api/scrape`, {
        city,
        searchPhrases
      }, { headers });

      if (!scrapeResponse.data.success) {
        throw new Error('Failed to scrape posts');
      }

      const posts = scrapeResponse.data.posts;
      
      // Step 2: Enrich posts with GPT
      const enrichResponse = await axios.post(`${API_URL}/api/enrich`, {
        posts
      }, { headers });

      if (!enrichResponse.data.success) {
        throw new Error('Failed to enrich posts');
      }

      setLeads(enrichResponse.data.leads);
      setStats({
        totalLeads: enrichResponse.data.totalLeads,
        successfulEnrichments: enrichResponse.data.successfulEnrichments,
        testMode: scrapeResponse.data.testMode
      });

    } catch (err) {
      console.error('Search error:', err);
      setError(err.response?.data?.error || err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Don't render anything if we're checking auth and not a demo user
  if (!user && !isDemoUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative container mx-auto px-4 pt-12 pb-20">
          {/* User info bar */}
          {(user || isDemoUser) && (
            <div className="absolute top-4 right-4 flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>{isDemoUser ? 'cindy@tryacre.io' : user?.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
          
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-md opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-2xl">
                  LeadNest
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Smart Lead Generation
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Discover high-intent property management leads from Facebook groups
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-500">AI-powered analysis</span>
            </div>
          </header>

          <div className="max-w-4xl mx-auto">
            <SearchForm onSearch={handleSearch} loading={loading} />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {error && (
            <div className="mb-8 bg-red-50 border border-red-100 rounded-xl p-6 animate-fadeIn">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error occurred</h3>
                  <p className="mt-1 text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {loading && <LoadingState />}

          {!loading && hasSearched && leads.length === 0 && !error && (
            <EmptyState />
          )}

          {!loading && leads.length > 0 && (
            <div className="animate-fadeIn">
              <StatsBar stats={stats} />
              <LeadsTable leads={leads} />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
