import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TESTIMONIALS } from "../data";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // General section title reveal - faster
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // Slider border entrance - smoother
      if (slideRef.current) {
        gsap.fromTo(
          slideRef.current,
          { opacity: 0, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slideRef.current,
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

  const handleNext = () => {
    // Animating slider shift - swifter transitions
    gsap.to(slideRef.current, {
      opacity: 0,
      x: -15,
      duration: 0.18,
      ease: "power1.in",
      onComplete: () => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        gsap.fromTo(
          slideRef.current,
          { opacity: 0, x: 15 },
          { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    });
  };

  const handlePrev = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      x: 15,
      duration: 0.18,
      ease: "power1.in",
      onComplete: () => {
        setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
        gsap.fromTo(
          slideRef.current,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    });
  };

  const activeReview = TESTIMONIALS[activeIndex];

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-24 md:py-32 bg-cream-200 overflow-hidden border-t border-b border-cream-300"
    >
      {/* Absolute decorative forest-green vector leaf layout */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-72 h-72 bg-forest-800/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-500 block">
            Voices of the Trekkers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal-900 leading-tight font-serif">
            Loved by Adventurers <span className="font-serif italic font-normal text-sunrise-500 font-serif">Worldwide</span>
          </h2>
          <div className="w-16 h-0.5 bg-sunrise-500 mx-auto" />
          <p className="text-stone-600 text-sm md:text-md font-light max-w-2xl mx-auto">
            From gourmet campfire meals on the crater rim to safe ascents to the frozen summit under a starry sky—discover how we craft lifetime memories.
          </p>
        </div>

        {/* Dynamic Carousel Slide Frame Slider */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          {/* Main Card Frame */}
          <div
            ref={slideRef}
            id="testimonial-card-main"
            className="bg-[#FDFCF8] border border-cream-300 shadow-xl rounded-sm p-8 md:p-12 relative flex flex-col items-center text-center gap-6"
          >
            {/* Visual Quote Icon Top Accent */}
            <div className="absolute -top-6 left-1/4 -translate-x-1/2 w-12 h-12 rounded-sm bg-sunrise-500 flex items-center justify-center text-white shadow-lg shadow-sunrise-500/20">
              <Quote className="w-5 h-5 fill-current" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-stone-800 text-md md:text-lg font-light italic leading-relaxed md:max-w-2xl">
              &ldquo;{activeReview.quote}&rdquo;
            </p>

            {/* Person profile info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-cream-300 pt-6 w-full justify-center">
              <img
                src={activeReview.avatar}
                alt={activeReview.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-sunrise-500 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="sm:text-left">
                <h4 className="text-sm font-display font-bold text-charcoal-900 leading-snug">
                  {activeReview.name}
                </h4>
                <div className="text-xs text-stone-500 flex flex-wrap gap-x-3 justify-center sm:justify-start">
                  <span>{activeReview.country}</span>
                  <span>•</span>
                  <span>{activeReview.date}</span>
                  <span>•</span>
                  <span className="font-mono text-[9px] text-forest-700 font-bold bg-forest-800/10 px-1.5 py-0.5 rounded-sm">
                    {activeReview.trekTaken}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Left Switch Button */}
          <button
            onClick={handlePrev}
            id="testimonial-prev-btn"
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 bg-white hover:bg-sunrise-500 hover:text-white border border-stone-200 text-stone-700 p-3 rounded-full shadow-lg transition-colors duration-200 cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slider Right Switch Button */}
          <button
            onClick={handleNext}
            id="testimonial-next-btn"
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-0 bg-white hover:bg-sunrise-500 hover:text-white border border-stone-200 text-stone-700 p-3 rounded-full shadow-lg transition-colors duration-200 cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Bullets Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i !== activeIndex) {
                  gsap.to(slideRef.current, {
                    opacity: 0,
                    scale: 0.98,
                    duration: 0.15,
                    onComplete: () => {
                      setActiveIndex(i);
                      gsap.fromTo(
                        slideRef.current,
                        { opacity: 0, scale: 1.02 },
                        { opacity: 1, scale: 1, duration: 0.25 }
                      );
                    }
                  });
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-sunrise-500 w-8" : "bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
