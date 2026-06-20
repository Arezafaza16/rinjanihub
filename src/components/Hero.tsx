import { useEffect, useRef } from "react";
import { MoveRight, Phone, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const imageBgRef = useRef<HTMLImageElement>(null);
  const statCard1Ref = useRef<HTMLDivElement>(null);
  const statCard2Ref = useRef<HTMLDivElement>(null);
  const statCard3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Initial entering animations - Faster and smoother
      gsap.fromTo(
        imageBgRef.current,
        { scale: 1.05, filter: "brightness(0.4) blur(1px)" },
        { scale: 1, filter: "brightness(0.6) blur(0px)", duration: 0.8, ease: "power2.out" }
      );

      // Title/Subtext staggered fade up with smaller delays
      if (textGroupRef.current) {
        const children = textGroupRef.current.children;
        gsap.fromTo(
          children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0 }
        );
      }

      // Floating card entries with faster timing
      gsap.fromTo(
        [statCard1Ref.current, statCard2Ref.current, statCard3Ref.current],
        { scale: 0.9, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.1)", stagger: 0.15, delay: 0.3, force3D: true }
      );

      // 2. Parallax Scrolling Effect
      if (containerRef.current && imageBgRef.current) {
        gsap.to(imageBgRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Smoother scroll-based floating stats cards with lower movement to avoid stuttering
      if (statCard1Ref.current) {
        gsap.to(statCard1Ref.current, {
          y: -40,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5
          }
        });
      }

      if (statCard2Ref.current) {
        gsap.to(statCard2Ref.current, {
          y: -70,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.3
          }
        });
      }

      if (statCard3Ref.current) {
        gsap.to(statCard3Ref.current, {
          y: -25,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6
          }
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-950 text-white pt-24 pb-16"
    >
      {/* Background Graphic Image Layer */}
      <img
        ref={imageBgRef}
        src="/images/hero_bg.png"
        alt="Gunung Rinjani Lombok"
        className="absolute inset-0 w-full h-full object-cover transform scale-105"
        style={{ willChange: "transform" }}
        referrerPolicy="no-referrer"
      />

      {/* Atmospheric Sunrise Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-forest-900/60 to-forest-950 z-10" />

      {/* Dynamic Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(9,26,19,0.9))] z-10 pointer-events-none" />

      {/* Hero Visual Contents container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Texts Info (Col 7) */}
        <div ref={textGroupRef} className="lg:col-span-8 space-y-6 text-center lg:text-left mt-8 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunrise-500/10 border border-sunrise-500/30 text-sunrise-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Award className="w-4 h-4 text-sunrise-500 animate-pulse" /> Premium Rinjani Trekking Leader 2026
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] text-stone-50">
            Conquer <span className="font-serif italic font-normal text-sunrise-400">Mount</span> Rinjani. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa9d5a] to-[#F27D26]">
              Indonesia's Epic Peak.
            </span>
          </h1>

          <p className="text-stone-200 text-sm md:text-md max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Experience the legendary adventure of climbing Lombok's summit with licensed local guides, premium camping comfort, and the refreshing Segara Anak hot springs. Align your inner adventure with nature at the 3,726m peak.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            {/* CTA Package Button */}
            <a
              href="#packages"
              className="w-full sm:w-auto px-8 py-4 bg-sunrise-500 hover:bg-sunrise-600 text-white rounded-sm font-mono text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-sunrise-500/20"
              id="hero-view-packages-btn"
            >
              View Trekking Packages{" "}
              <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* CTA WhatsApp Button */}
            <a
              href="https://wa.me/6281353144856"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-stone-100 rounded-sm font-mono text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 border border-stone-100/25 backdrop-blur-md transition-all duration-300"
              id="hero-whatsapp-booking-btn"
            >
              <Phone className="w-3.5 h-3.5 text-sunrise-400" /> WhatsApp Booking
            </a>
          </div>

          {/* Social Proof badge */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-stone-400 text-xs text-left">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-forest-900"
                src="/images/avatar_charlotte.png"
                alt="Traveller avatar"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-forest-900"
                src="/images/avatar_david.png"
                alt="Traveller avatar"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-forest-900"
                src="/images/avatar_marcus.png"
                alt="Traveller avatar"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-semibold text-stone-200">2,800+ Global Climbers</p>
              <p className="text-[10px]">★★★★★ Rating (Average 4.9/5 on TripAdvisor)</p>
            </div>
          </div>
        </div>

        {/* Floating Mountain Stats Widgets (Col 4) */}
        <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 relative justify-center h-[500px]">
          {/* Card 1: Elevation */}
          <div
            ref={statCard1Ref}
            id="hero-stat-card-1"
            className="absolute top-[10%] right-10 w-64 bg-forest-900/60 backdrop-blur-xl border border-forest-800/40 p-5 rounded-2xl shadow-xl hover:border-sunrise-500/50 transition-colors duration-300"
            style={{ willChange: "transform" }}
          >
            <span className="text-[10px] font-mono text-sunrise-400 uppercase tracking-widest block font-bold">
              Peak Elevation
            </span>
            <h3 className="text-3xl font-display font-medium text-stone-100 font-mono mt-0.5">3,726 M</h3>
            <p className="text-[11px] text-stone-400 mt-1">The second highest active volcano in Indonesia, standing majestically in Lombok.</p>
          </div>

          {/* Card 2: Safe Success Rate */}
          <div
            ref={statCard2Ref}
            id="hero-stat-card-2"
            className="absolute top-[45%] right-24 w-60 bg-forest-950/70 backdrop-blur-xl border border-forest-800/40 p-5 rounded-2xl shadow-xl hover:border-emerald-500/50 transition-colors duration-300"
            style={{ willChange: "transform" }}
          >
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
              Safe Success Rate
            </span>
            <h3 className="text-3xl font-display font-medium text-stone-100 font-mono mt-0.5">98.4%</h3>
            <p className="text-[11px] text-stone-400 mt-1">Outstanding safety record guided by certified crew with full assistance.</p>
          </div>

          {/* Card 3: Experience Level */}
          <div
            ref={statCard3Ref}
            id="hero-stat-card-3"
            className="absolute top-[75%] right-6 w-56 bg-forest-900/60 backdrop-blur-xl border border-forest-800/40 p-4 rounded-2xl shadow-xl hover:border-amber-500/50 transition-colors duration-300"
            style={{ willChange: "transform" }}
          >
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
              Expert Guides
            </span>
            <h3 className="text-2xl font-display font-medium text-stone-100 font-mono mt-0.5">5+ Years</h3>
            <p className="text-[11px] text-stone-400 mt-1">Legendary local porter and navigator crew ready to lead your way.</p>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-100 to-transparent z-15" />
    </section>
  );
}
