import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Sparkles, MapPin, Layers } from "lucide-react";

export default function MountainMajesty() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in title elements
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // Slide up content stats
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // Clip path reveal for image
      if (imageContainerRef.current && imageRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.3 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%"
            }
          }
        );

        gsap.fromTo(
          imageRef.current,
          { scale: 1.15 },
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%"
            }
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const geologicFacts = [
    { title: "Active Stratovolcano", desc: "A massive, towering volcano with a complex caldera structure.", icon: Layers },
    { title: "Sacred Spiritual Icon", desc: "A place of pilgrimage and deep reverence for Lombok's residents.", icon: Sparkles },
    { title: "UNESCO Global Geopark", desc: "Recognized internationally for outstanding geological heritage and biodiversity.", icon: Shield },
    { title: "Lombok's Highest Peak", desc: "Dominating the skies at 3,726m ASL across the Lesser Sunda Islands.", icon: MapPin }
  ];

  return (
    <section
      ref={containerRef}
      id="majesty"
      className="relative py-24 md:py-32 bg-[#1B2D24] text-[#FDFCF8] overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,125,38,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Title Block */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-400 block">
            Lombok's Volcanic Crown
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-50 leading-tight font-serif">
            The Majestic Grandeur of <span className="font-serif italic font-normal text-sunrise-400 font-serif">Mount Rinjani</span>
          </h2>
          <div className="w-16 h-0.5 bg-sunrise-500 mx-auto" />
          <p className="text-stone-300 text-sm md:text-md font-light max-w-2xl mx-auto leading-relaxed">
            Rising sharply to 3,726 meters above Lombok, Mount Rinjani stands as one of the world's most spectacular active volcanoes. A geological masterpiece carved by nature.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-7 w-full">
            <div
              ref={imageContainerRef}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-forest-950/40"
              id="majesty-image-wrapper"
            >
              <img
                ref={imageRef}
                src="/images/mount_rinjani_peak.jpg"
                alt="Mount Rinjani Peak Lombok"
                className="w-full h-full object-cover transform scale-110"
                style={{ willChange: "transform" }}
                referrerPolicy="no-referrer"
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D24]/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 bg-sunrise-500/90 text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-sm backdrop-blur-sm">
                  Authentic Portrait
                </span>
                <span className="text-stone-300 text-[10px] font-mono">
                  3,726 m ASL Peak
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Geology & Majesty Context */}
          <div ref={contentRef} className="lg:col-span-5 space-y-6">
            <h3 className="text-xl md:text-2xl font-serif text-stone-100 font-bold leading-snug">
              A Sacred Geological Sanctuary
            </h3>
            
            <p className="text-stone-300 text-xs md:text-sm font-light leading-relaxed">
              Mount Rinjani is not just a mountain; it is a living symbol of geological force. Its colossal summit towers over the surrounding sea of clouds, offering an unforgettable sight for those who conquer its steep, sandy volcanic scree ridges. 
            </p>
            
            <p className="text-stone-300 text-xs md:text-sm font-light leading-relaxed">
              Every year, pilgrims trek to its high ridges to pay respect to the mountain spirits, while adventurers from all corners of the globe seek to test their physical limits against its challenging trails, discovering pristine tropical rainforests, alpine savanna, and pure geological power.
            </p>

            {/* Geologic Specs list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {geologicFacts.map((fact, i) => {
                const Icon = fact.icon;
                return (
                  <div key={i} className="flex gap-3 items-start" id={`majesty-fact-${i}`}>
                    <div className="p-2 bg-sunrise-500/10 text-sunrise-400 rounded-sm shrink-0 border border-sunrise-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-stone-100 uppercase tracking-wide">
                        {fact.title}
                      </h4>
                      <p className="text-[11px] text-stone-400 leading-normal mt-0.5 font-light">
                        {fact.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
