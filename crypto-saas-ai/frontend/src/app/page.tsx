'use client';

import RiveLogo from '@/components/RiveLogo';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Rive */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="mb-6">
          <RiveLogo />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
          Your AI Co-Pilot for Smarter Crypto Trading
        </h1>
        <p className="mt-4 text-lg text-zinc-400 max-w-xl">
          Analyze portfolios, get trade suggestions, and automate insights — all in one place.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-200 transition"
          >
            Try AI Assistant Free
          </a>
        </div>
      </section>

      {/* Placeholder Sections for Scrolling */}
      <section className="h-screen bg-zinc-900 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Why Traders Love Us</h2>
      </section>
      <section className="h-screen bg-zinc-800 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Smart Portfolio Tools</h2>
      </section>
      <section className="h-screen bg-zinc-700 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Automated Trade Suggestions</h2>
      </section>
    </main>
  );
}
