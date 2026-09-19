import { ProjectBriefForm } from '../components/contact/ProjectBriefForm';
import { Mail, MapPin, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

export function ContactPage() {
  const hubs = [
    {
      city: 'London Atelier',
      role: 'Global Client Partnerships & Strategy',
      address: '18 Berkeley Square, Mayfair, London W1J 6BQ, UK',
      phone: '+44 20 7946 0912',
      email: 'london@vantage.studio',
    },
    {
      city: 'Zurich Atelier',
      role: 'BIM Integration & Engineering Hub',
      address: 'Gotthardstrasse 26, 8002 Zürich, Switzerland',
      phone: '+41 44 280 1140',
      email: 'zurich@vantage.studio',
    },
    {
      city: 'Tashkent Studio',
      role: 'Central Asia Creative & Production Center',
      address: 'Amir Timur Avenue 107B, Tashkent 100084, Uzbekistan',
      phone: '+998 71 200 4580',
      email: 'tashkent@vantage.studio',
    },
  ];

  return (
    <main className="w-full bg-[#090a0d] text-white pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>12 / Commission Atelier</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
            Have a Project in Mind?
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            Tell us what you are building, what you need to visualize, and where you are in the architectural process. We will reply with an itemized quote within 24 business hours.
          </p>
        </div>

        {/* Main Grid: Contact Form + Studio Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8">
            <ProjectBriefForm />
          </div>

          {/* Direct Atelier Details Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Contact Card */}
            <div className="glass-card rounded-3xl p-8 border border-white/10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-4">
                Direct Channels
              </span>
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-mono">New Commissions</span>
                    <a
                      href="mailto:project@vantage.studio"
                      className="font-medium text-white hover:text-amber-200 transition-colors"
                    >
                      project@vantage.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-mono">International Desk</span>
                    <a
                      href="tel:+442079460912"
                      className="font-medium text-white hover:text-amber-200 transition-colors"
                    >
                      +44 20 7946 0912
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-6">
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">
                  Social Channels
                </span>
                <div className="flex flex-col gap-2 text-xs">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-white py-1"
                  >
                    <span>Instagram (@vantage.studio)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-white py-1"
                  >
                    <span>LinkedIn (Vantage Creative Studio)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-white py-1"
                  >
                    <span>Behance (Selected Portfolios)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Global Hubs */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block">
                Production Hubs
              </span>

              {hubs.map((hub) => (
                <div key={hub.city} className="glass-card rounded-2xl p-5 border border-white/10">
                  <h4 className="font-display text-base font-bold text-white mb-0.5">
                    {hub.city}
                  </h4>
                  <p className="text-[11px] text-amber-200/90 mb-2 font-light">
                    {hub.role}
                  </p>
                  <p className="text-xs text-zinc-400 font-light flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 mt-0.5 flex-shrink-0" />
                    <span>{hub.address}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
