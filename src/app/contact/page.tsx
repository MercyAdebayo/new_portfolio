'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Hook into email API or use a service like Formspree / Resend
    setSubmitted(true)
  }

  return (
    <section className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-lg">
        Reach out if you'd like to collaborate, have a question, or want to connect. I’ll get back to you promptly.
      </p>

      {submitted ? (
        <p className="text-green-600 font-medium">Thanks! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
            
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 border rounded bg-white text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  )
}
