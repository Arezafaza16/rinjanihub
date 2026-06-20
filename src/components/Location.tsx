import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock, Navigation, ExternalLink } from "lucide-react";

export default function Location() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // Details card slide-in from left
      if (cardRef.current) {
        gsap.set(cardRef.current, { autoAlpha: 0, x: -50, force3D: true });
        gsap.to(cardRef.current, {
          autoAlpha: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%"
          }
        });
      }

      // Map container slide-in from right
      if (mapRef.current) {
        gsap.set(mapRef.current, { autoAlpha: 0, x: 50, force3D: true });
        gsap.to(mapRef.current, {
          autoAlpha: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 85%"
          }
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/place/Rinjani+Hub,+Jl.+Pariwisata,+Senaru,+Kec.+Bayan,+Kabupaten+Lombok+Utara,+Nusa+Tenggara+Bar.+83354/data=!4m2!3m1!1s0x2dcdd5fdde353c23:0x735412963be9aa78!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjIyLjQYACCenQoqlQEsOTQyNjc3MjcsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwODE1NjQwLDEwMDgyMDIzMkICSUQ%3D&skid=4cf0835b-3d39-40c1-b064-6029822cebb3&g_st=ac";

  // Embed version based on coordinates parameters
  const iframeSrc = "https://maps.google.com/maps?q=Rinjani%20Hub,%20Jl.%20Pariwisata,%20Senaru,%20Lombok&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section
      ref={containerRef}
      id="location"
      className="relative py-24 md:py-32 bg-cream-100 overflow-hidden border-t border-cream-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-500 block">
            Expedition Headquarters
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal-900 leading-tight font-serif">
            Visit Our Base in <span className="font-serif italic font-normal text-sunrise-500 font-serif">Senaru Village</span>
          </h2>
          <div className="w-16 h-0.5 bg-sunrise-500 mx-auto" />
          <p className="text-stone-600 text-sm md:text-md font-light max-w-2xl mx-auto">
            Stop by our main operations base to meet our local guides, rent personal equipment, or align on final trail preparations before we set off on Mount Rinjani.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Coordinates / Details Card */}
          <div 
            ref={cardRef} 
            style={{ visibility: 'hidden' }}
            className="lg:col-span-5 flex flex-col justify-between bg-white border border-cream-300 rounded-sm p-8 shadow-lg hover:border-sunrise-500/30 transition-colors duration-300"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-mono text-sunrise-500 font-bold block">
                  Operations Center
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-charcoal-900 font-bold font-serif">
                  Rinjani Hub Basecamp
                </h3>
              </div>

              {/* Specs */}
              <div className="space-y-4 text-xs md:text-sm text-stone-600">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-forest-800/10 text-forest-850 rounded-sm shrink-0 border border-forest-800/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-950 font-bold">Address</h4>
                    <p className="mt-1 font-light leading-relaxed">
                      Rinjani Hub, Jl. Pariwisata, Senaru, Kec. Bayan, Kabupaten Lombok Utara, Nusa Tenggara Bar. 83354, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-forest-800/10 text-forest-850 rounded-sm shrink-0 border border-forest-800/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-950 font-bold">Operational Hours</h4>
                    <p className="mt-1 font-light leading-relaxed">
                      Monday – Sunday: 24 Hours <br />
                      (Always open for guest registration and trek logistics)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-forest-800/10 text-forest-850 rounded-sm shrink-0 border border-forest-800/20">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-charcoal-950 font-bold">Basecamp Info</h4>
                    <p className="mt-1 font-light leading-relaxed text-xs">
                      Located right next to the main tourist road in Senaru. It's the central hub for local porters, gear hire, and direct Mount Rinjani National Park registration details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-8 mt-8 border-t border-cream-200">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4.5 bg-sunrise-500 hover:bg-[#d96716] text-[#FDFCF8] font-mono text-[10px] uppercase tracking-widest font-bold rounded-sm transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-sunrise-500/20 cursor-pointer"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Iframe */}
          <div 
            ref={mapRef} 
            style={{ visibility: 'hidden' }}
            className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] w-full relative"
          >
            <div className="absolute inset-0 rounded-sm overflow-hidden border border-cream-300 shadow-xl bg-stone-200 h-full w-full">
              <iframe
                title="Rinjani Hub Location Map"
                src={iframeSrc}
                className="w-full h-full border-0 rounded-sm"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
