import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/utils/supabaseClient'

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check active session
    const checkSession = async () => {
      try {
        if (supabase) {
          const { data: { session } } = await supabase.auth.getSession()
          setSession(session)
          setUser(session?.user ?? null)
        }
      } catch (error) {
        console.error('Error checking session:', error)
      } finally {
        setLoading(false)
      }
    }

    checkSession()

    // Listen for auth changes
    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      })

      return () => subscription.unsubscribe()
    } else {
      setLoading(false)
    }
  }, [])

  const signUp = async (email: string, password: string) => {
    try {
      if (!supabase) {
        return { error: { message: 'Authentication service not configured' } }
      }
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })
      if (!error) {
        router.push('/login?message=Check your email to confirm your account')
      }
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      if (!supabase) {
        return { error: { message: 'Authentication service not configured' } }
      }
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (!error) {
        router.push('/dashboard')
      }
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signOut = async () => {
    try {
      if (supabase) {
        await supabase.auth.signOut()
      }
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
