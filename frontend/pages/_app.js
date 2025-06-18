import '@/styles/globals.css'
import Head from 'next/head'
import { AuthProvider } from '@/contexts/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>LeadNest - Smart Lead Generation for Property Managers</title>
        <meta name="description" content="LeadNest helps property managers discover high-intent leads from social media with AI-powered analysis" />
        <meta property="og:title" content="LeadNest - Smart Lead Generation" />
        <meta property="og:description" content="Discover high-intent property management leads with AI-powered analysis" />
        <meta property="og:site_name" content="LeadNest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
