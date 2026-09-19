import { ProjectBriefForm } from '../components/contact/ProjectBriefForm';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

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
    <main className="w-full bg-[#f7f6f2] text-[#121214] pt-32 md:pt-44">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
            Initiate Engagement
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-black leading-[1.04] mb-6">
            Have a project in mind?
          </h1>
          <p className="text-zinc-600 text-lg sm:text-xl font-light leading-relaxed">
            Tell us what you are building, what you need to visualize, and where you are in the architectural process. We will reply within 24 business hours.
          </p>
        </div>

        {/* Main Grid: Contact Form + Studio Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8">
            <ProjectBriefForm />
          </div>

          {/* Direct Atelier Details Column */}
          <div className="lg:col-span-4 space-y-12">
            {/* Quick Contact Card */}
            <div className="bg-white border border-black/10 p-8 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-4">
                Direct Inquiries
              </span>
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase">New Commissions</span>
                    <a
                      href="mailto:project@vantage.studio"
                      className="font-medium text-black hover:underline"
                    >
                      project@vantage.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase">International Desk</span>
                    <a
                      href="tel:+442079460912"
                      className="font-medium text-black hover:underline"
                    >
                      +44 20 7946 0912
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-6 mt-6">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                  Social Channels
                </span>
                <div className="flex flex-col gap-2 text-xs">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-700 hover:text-black py-1"
                  >
                    <span>Instagram (@vantage.studio)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-700 hover:text-black py-1"
                  >
                    <span>LinkedIn (Vantage Creative Studio)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-700 hover:text-black py-1"
                  >
                    <span>Behance (Selected Portfolios)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Global Hubs */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold block">
                Production Hubs
              </span>

              {hubs.map((hub) => (
                <div key={hub.city} className="border-l-2 border-black/15 pl-4">
                  <h4 className="text-sm font-semibold text-black mb-0.5">
                    {hub.city}
                  </h4>
                  <p className="text-[11px] text-zinc-500 mb-2">
                    {hub.role}
                  </p>
                  <p className="text-xs text-zinc-600 font-light flex items-start gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 mt-0.5 flex-shrink-0" />
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
