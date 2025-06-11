'use client'

export default function ContactPage() {
  return (
    <section className="relative py-20 px-4 max-w-3xl mx-auto">
      {/* Lavender background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#DA8CEA]/30 to-transparent blur-3xl z-0" />

      <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="text-zinc-400">
          Reach out if you'd like to collaborate, have a question, or want to connect. I’ll get back to you promptly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Name</label>
            <input
              type="text"
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DA8CEA]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DA8CEA]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DA8CEA]"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#DA8CEA] text-white px-6 py-2 rounded-lg hover:bg-[#c06be0] transition-shadow hover:shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
