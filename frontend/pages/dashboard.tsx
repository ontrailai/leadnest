import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Check for demo token
    const demoToken = localStorage.getItem('demo_token')
    
    if (demoToken === 'demo_user_session') {
      // Demo user is logged in, redirect to home page
      router.push('/')
      return
    }

    // Normal auth check
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    // Redirect to home page which has the lead scanner
    if (user && !loading) {
      router.push('/')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return null
}
