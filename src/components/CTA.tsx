import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Compass } from "lucide-react";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Zoom effect on background image on scroll
      const bgImg = containerRef.current?.querySelector(".cta-bg-img");
      if (bgImg) {
        gsap.fromTo(
          bgImg,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }

      // Fade up inner card elements - snappier
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
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

  return (
    <section
      ref={containerRef}
      id="final-cta"
      className="relative py-28 md:py-36 bg-[#1B2D24] overflow-hidden text-center flex items-center justify-center text-white"
    >
      {/* Background Graphic Zoom-Parallax layer */}
      <img
        src="/images/cta_bg.png"
        alt="Gunung Rinjani kala senja"
        className="cta-bg-img absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        referrerPolicy="no-referrer"
      />

      {/* Heavy gradients for outstanding readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D24] via-[#1B2D24]/75 to-[#1B2D24]/90 z-10" />

      {/* Floating vector circles */}
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-sunrise-500/10 rounded-full blur-3xl z-15 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl z-15 pointer-events-none" />

      {/* Main Content Container card */}
      <div className="max-w-4xl mx-auto px-6 relative z-20">
        <div
          ref={cardRef}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-sm shadow-2xl relative shadow-sunrise-500/5 space-y-6"
          id="cta-holder-box"
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-sunrise-500/10 border border-sunrise-500/30 text-sunrise-400 text-[10px] font-mono font-bold tracking-widest uppercase">
            <Compass className="w-4 h-4 text-sunrise-400" /> Start Your Journey Today
          </div>

          {/* Main Title heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-stone-50 tracking-tight leading-tight max-w-2xl mx-auto font-serif">
            Ready for a <span className="font-serif italic font-normal text-sunrise-400 font-serif">Lifetime Adventure</span>?
          </h2>

          <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-light max-w-lg mx-auto">
            Trekking slots are strictly limited for safety and premium comfort. Secure your Mount Rinjani expedition with our expert local guide team today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Booking Trigger CTA */}
            <a
              href="https://wa.me/6281353144856"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-booking-foot"
              className="w-full sm:w-auto px-8 py-4 bg-sunrise-500 hover:bg-sunrise-600 text-white rounded-sm font-mono text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg shadow-sunrise-500/20 duration-200"
            >
              <Phone className="w-3.5 h-3.5 fill-current" /> Book via WhatsApp
            </a>

            {/* Navigation package link CTA */}
            <a
              href="#packages"
              id="cta-view-packages-foot"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-stone-100 border border-stone-100/25 rounded-sm font-mono text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 duration-200"
            >
              View Trekking Packages <Compass className="w-3.5 h-3.5 text-sunrise-400" />
            </a>
          </div>

          {/* Safety disclaimer text */}
          <p className="text-[10px] text-stone-400 font-mono">
            No upfront deposit required for selected departures. 24/7 wilderness emergency response included.
          </p>
        </div>
      </div>
    </section>
  );
}
