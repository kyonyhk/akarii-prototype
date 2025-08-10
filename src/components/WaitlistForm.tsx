'use client'

import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

interface WaitlistFormProps {
  isOpen: boolean
  onClose: () => void
  source?: string
}

export default function WaitlistForm({ isOpen, onClose, source = 'hero' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const addToWaitlist = useMutation(api.waitlist.addEmail)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      await addToWaitlist({
        email,
        source,
        referrer: typeof window !== 'undefined' ? document.referrer : undefined,
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      })
      
      setStatus('success')
      setEmail('')
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error.message || 'Failed to join waitlist. Please try again.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="card max-w-md w-full mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-h3 font-serif text-text-primary">Join the Waitlist</h3>
          <button 
            onClick={onClose}
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            ✕
          </button>
        </div>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-400 text-xl">✓</span>
            </div>
            <h4 className="text-h3 text-text-primary mb-2">You're in!</h4>
            <p className="text-body text-text-secondary mb-6">
              Thanks for joining our waitlist. We'll be in touch soon with updates.
            </p>
            <button 
              onClick={onClose}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-body text-text-secondary mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-primary-700 bg-opacity-40 border border-primary-600 border-opacity-20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary focus:bg-opacity-60 transition-all"
                disabled={status === 'loading'}
              />
            </div>

            {status === 'error' && (
              <div className="text-red-400 text-body-sm bg-red-500 bg-opacity-10 border border-red-500 border-opacity-20 rounded-lg p-3">
                {errorMessage}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 text-text-secondary border border-primary-600 border-opacity-20 rounded-lg hover:bg-primary-700 hover:bg-opacity-40 transition-all"
                disabled={status === 'loading'}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}