'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="sticky bottom-0 z-50 text-center text-sm text-zinc-500 bg-zinc-950/90 backdrop-blur border-t border-zinc-800 py-2">
      © {year ?? '...'} Mercy Adebayo. All rights reserved.
    </footer>
  )
}
