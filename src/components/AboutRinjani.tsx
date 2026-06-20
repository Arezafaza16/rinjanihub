import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Droplets, Map } from "lucide-react";

export default function AboutRinjani() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageContainerRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Left content entries slide up - snappier
      if (leftContentRef.current) {
        gsap.fromTo(
          leftContentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftContentRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // Right image slide / scale-in - faster and cleaner
      if (rightImageContainerRef.current && rightImageRef.current) {
        gsap.fromTo(
          rightImageContainerRef.current,
          { clipPath: "inset(0% 100% 0% 0%)", opacity: 0.5 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightImageContainerRef.current,
              start: "top 85%"
            }
          }
        );

        gsap.fromTo(
          rightImageRef.current,
          { scale: 1.15 },
          {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightImageContainerRef.current,
              start: "top 85%"
            }
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const mountainSpecs = [
    { label: "Peak Elevation", value: "3,726m ASL", desc: "The second highest active volcano in Indonesia.", icon: Compass },
    { label: "Mystic Crater Lake", value: "Segara Anak", desc: "A pristine turquoise crater lake with a depth of 230 meters.", icon: Map },
    { label: "Natural Hot Springs", value: "Healing Springs", desc: "Soothing natural volcanic hot springs located inside the caldera.", icon: Droplets }
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 md:py-32 bg-cream-100 overflow-hidden border-t border-cream-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div id="about-rinjani-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Description */}
          <div ref={leftContentRef} className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-500 block">
              The Cosmic Crown of Lombok Island
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal-900 leading-tight">
              Mount Rinjani: Scenic Serenity <span className="font-serif italic font-normal text-sunrise-500 font-serif">Under the Stars</span>.
            </h2>
            
            <div className="w-16 h-0.5 bg-sunrise-500" />
            
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Rising majestically at an altitude of <strong className="text-forest-800 font-semibold">3,726 meters</strong> in North Lombok, Mount Rinjani is a massive active volcano deeply revered by the indigenous Sasak people and all Lombok residents.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              In the middle of the giant 6x8.5 km caldera lies <strong className="text-forest-800 font-semibold">Segara Anak Lake</strong>, a crescent-shaped volcanic crater lake wrapping around the active volcanic cone of <strong className="text-sunrise-500 font-semibold">Mount Baru Jari</strong>. Along the lake shore, natural sulfuric hot springs act as a rejuvenating sanctuary, melting away the fatigue of the summit climb to pamper adventurous souls.
            </p>

            {/* Structured Specifications list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {mountainSpecs.map((spec, i) => {
                const SpecIcon = spec.icon;
                return (
                  <div key={i} className="space-y-2" id={`mountain-spec-${i}`}>
                    <div className="w-10 h-10 rounded-sm bg-white flex items-center justify-center text-sunrise-500 border border-cream-200 shadow-sm">
                      <SpecIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-stone-500 font-bold">{spec.label}</div>
                      <div className="text-base font-display font-bold text-charcoal-900">{spec.value}</div>
                      <div className="text-[11px] text-stone-500 leading-snug">{spec.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Photographic Showcase */}
          <div className="lg:col-span-6 w-full h-full relative flex items-center justify-center">
            {/* Image frame */}
            <div
              ref={rightImageContainerRef}
              className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-white bg-stone-300"
              id="about-image-wrapper"
            >
              <img
                ref={rightImageRef}
                src="/images/about_rinjani.png"
                alt="Gunung Rinjani Lombok"
                className="w-full h-full object-cover transform scale-110"
                style={{ willChange: "transform" }}
                referrerPolicy="no-referrer"
              />
              
              {/* Image Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent pointer-events-none" />

              {/* Float Badge overlay */}
              <div
                id="about-float-badge"
                className="absolute bottom-6 left-6 p-4 bg-white/95 backdrop-blur-md rounded-sm shadow-xl flex items-center gap-3 border border-stone-100 max-w-xs"
              >
                <div className="p-2 bg-sunrise-500/10 text-sunrise-500 rounded-sm shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono text-stone-500 font-bold block">Protected Area</span>
                  <span className="text-xs font-display font-semibold text-charcoal-900 leading-tight block">Rinjani Geopark Park</span>
                </div>
              </div>
            </div>
            
            {/* Dynamic Background Circle Accent */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-48 h-48 bg-sunrise-400/20 rounded-full blur-2xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
