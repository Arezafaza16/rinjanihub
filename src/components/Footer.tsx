import { Mountain, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-[#1B2D24] text-stone-300 pt-16 pb-8 border-t border-white/5 relative overflow-hidden"
    >
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,125,38,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-12">
        {/* Top footer row layout */}
        <div id="footer-top-row" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="flex items-center gap-2 group cursor-pointer">
              <div className="p-1.5 bg-sunrise-500 rounded-sm text-white">
                <Mountain className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[14px] uppercase tracking-[0.25em] font-display font-bold text-stone-100">
                  Rinjani Hub
                </span>
              </div>
            </a>
            <p className="text-stone-300/80 text-xs md:text-sm font-light leading-relaxed max-w-sm">
              We are a premier local trekking operator in Lombok, officially registered with the Indonesian Ecotourism Association. Providing eco-conscious journeys with an outstanding safety record to Mount Rinjani.
            </p>
            {/* Eco badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-emerald-950/25 border border-emerald-900/30 text-[10px] uppercase tracking-widest font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Leave No Trace Partner
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-mono text-sunrise-400 font-bold">
              Navigation Center
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#about-us" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">Trekking Packages</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Basecamp Location</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact coordinates */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-mono text-sunrise-400 font-bold">
              Contact & Bookings
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sunrise-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono font-bold leading-none mb-1">Email:</span>
                  <a
                    href="mailto:rinjanihub26@gmail.com"
                    className="hover:text-sunrise-400 text-stone-100 transition-colors"
                  >
                    rinjanihub26@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sunrise-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono font-bold leading-none mb-1">Phone Call:</span>
                  <a
                    href="tel:+6285943482889"
                    className="hover:text-sunrise-400 text-stone-100 font-mono font-medium transition-colors"
                  >
                    +62 859-4348-2889
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sunrise-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono font-bold leading-none mb-1">WhatsApp:</span>
                  <a
                    href="https://wa.me/6285943482889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sunrise-400 text-stone-100 font-mono font-medium transition-colors"
                  >
                    +62 859-4348-2889
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="w-4 h-4 text-sunrise-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono font-bold leading-none mb-1">Facebook Page:</span>
                  <a
                    href="https://facebook.com/rinjanihub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sunrise-400 text-stone-100 transition-colors"
                  >
                    Rinjani Hub
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-sunrise-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono font-bold leading-none mb-1">Instagram:</span>
                  <a
                    href="https://instagram.com/rinjani_hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sunrise-400 text-stone-100 transition-colors"
                  >
                    @rinjani_hub
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & compliance bar */}
        <div id="footer-bottom-row" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} Mount Rinjani Hub Co. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              Made with <span className="text-rose-600">♥</span> in Lombok, Indonesia
            </span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
