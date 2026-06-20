import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQ_ITEMS } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-beginners");
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // General title reveal on scroll - faster
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // FAQ accordion stagger entry - snappier
      if (itemsContainerRef.current) {
        const accordionRows = itemsContainerRef.current.querySelectorAll(".faq-item-row");
        gsap.fromTo(
          accordionRows,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: itemsContainerRef.current,
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

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="relative py-24 md:py-32 bg-cream-100 overflow-hidden border-t border-cream-200"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-500 block">
            Trek Preparation Hub
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal-900 leading-tight font-serif">
            Frequently Asked <span className="font-serif italic font-normal text-sunrise-500 font-serif">Questions</span>
          </h2>
          <div className="w-16 h-0.5 bg-sunrise-500 mx-auto" />
          <p className="text-stone-600 text-sm md:text-md font-light max-w-2xl mx-auto">
            Everything you need to know to plan, prepare, and conquer the volcanic summit safely and comfortably.
          </p>
        </div>

        {/* Accordion List container */}
        <div
          ref={itemsContainerRef}
          id="faq-accordion-container"
          className="space-y-4 max-w-3xl mx-auto"
        >
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="faq-item-row bg-[#FDFCF8] border border-cream-300 hover:border-sunrise-500/20 rounded-sm shadow-sm overflow-hidden transition-[border-color,box-shadow] duration-300"
              >
                {/* Header Switch row */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-sunrise-500 shrink-0" />
                    <span className="text-sm md:text-base font-display font-bold text-charcoal-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`p-1 bg-stone-100 rounded-sm text-stone-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-sunrise-500/10 text-sunrise-500" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Content pane with transition parameters */}
                <div
                  className={`transition-all duration-250 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100 border-t border-[#1B2D24]/10" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-5 md:p-6 text-xs md:text-sm text-stone-700 leading-relaxed font-light bg-cream-200">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
