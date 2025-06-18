import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Mail, Lock, AlertCircle, Loader2, Search, TrendingUp, Users } from 'lucide-react'

const testimonials = [
  "I landed 6 clients in one week.",
  "Finally, leads that come to me.",
  "No more digging through Facebook threads."
]

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { signIn } = useAuth()
  const router = useRouter()
  const { message } = router.query

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Rotate every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Check for hardcoded demo credentials
      if (email === 'cindy@tryacre.io' && password === 'acre123') {
        // Store demo token
        localStorage.setItem('demo_token', 'demo_user_session')
        localStorage.setItem('demo_user', JSON.stringify({ email: 'cindy@tryacre.io' }))
        
        // Redirect to dashboard
        router.push('/dashboard')
        return
      }

      // Normal authentication flow
      const { error } = await signIn(email, password)
      if (error) {
        setError(error.message)
      }
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-md opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-2xl">
                  LeadNest
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Find leads before they even ask.
            </h1>
            <p className="text-lg text-gray-600 max-w-sm mx-auto">
              Your AI-powered scout for untapped rental management opportunities.
            </p>
          </div>

          {message && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">{message}</p>
            </div>
          )}

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="font-medium text-blue-600 hover:text-blue-700">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Testimonial Rotator */}
          <div className="mt-8 text-center">
            <div className="relative h-12">
              {testimonials.map((testimonial, index) => (
                <p
                  key={index}
                  className={`absolute inset-0 text-gray-600 italic transition-all duration-500 ${
                    index === currentTestimonial
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform -translate-y-2'
                  }`}
                >
                  "{testimonial}"
                </p>
              ))}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Visual Element (Hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-1 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="relative z-10 text-white text-center px-8">
          <div className="mb-8">
            {/* Animated Bird/Nest Icon */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-8">
                <Search className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">
            Smart Lead Discovery
          </h2>
          <p className="text-lg text-blue-100 max-w-md">
            AI scans thousands of social posts to find property owners who need management help
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 max-w-sm mx-auto">
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold">92%</p>
              <p className="text-sm text-blue-100">Intent Accuracy</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold">6x</p>
              <p className="text-sm text-blue-100">More Leads</p>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
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
      `}</style>
    </div>
  )
}
