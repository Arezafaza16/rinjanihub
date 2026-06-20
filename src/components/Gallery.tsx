import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { X, ZoomIn } from "lucide-react";

const aspectMap: Record<string, string> = {
  "gallery-1": "aspect-[4/3]",
  "gallery-2": "aspect-[3/4]",
  "gallery-3": "aspect-[4/5]",
  "gallery-4": "aspect-[4/3]",
  "gallery-5": "aspect-[3/4]",
  "gallery-6": "aspect-[4/3]"
};

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const masonryContainerRef = useRef<HTMLDivElement>(null);

  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal header title elements - faster
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

      // Animating the image container frames as they scroll into view
      if (masonryContainerRef.current) {
        const frames = masonryContainerRef.current.querySelectorAll(".gallery-card-item");
        gsap.fromTo(
          frames,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: masonryContainerRef.current,
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
      id="gallery"
      className="relative py-24 md:py-32 bg-cream-100 overflow-hidden border-t border-cream-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-500 block">
            Our Visual Expedition
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal-900 leading-tight font-serif">
            The Eternal Beauty of <span className="font-serif italic font-normal text-sunrise-500 font-serif">Mount Rinjani</span>
          </h2>
          <div className="w-16 h-0.5 bg-sunrise-500 mx-auto" />
          <p className="text-stone-600 text-sm md:text-md font-light max-w-2xl mx-auto">
            Real portraits from the trail—ranging from golden sunrise views above the clouds at the summit, steaming volcanic hot springs, to the peaceful campsite inside the caldera.
          </p>
        </div>

        {/* Masonry Layout Pinterest Style */}
        <div
          ref={masonryContainerRef}
          id="gallery-masonry"
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] max-w-6xl mx-auto"
        >
          {GALLERY_ITEMS.map((item) => {
            const aspectClass = aspectMap[item.id] || "aspect-[4/3]";
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                id={`gallery-item-${item.id}`}
                className={`gallery-card-item break-inside-avoid relative rounded-sm overflow-hidden group shadow-md hover:shadow-2xl hover:border-sunrise-500/20 border border-transparent transition-[border-color,box-shadow] duration-300 cursor-pointer block-inline mb-6 ${aspectClass} bg-stone-200`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

              {/* Hover content overlay panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono font-bold text-sunrise-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h3 className="text-stone-100 font-display font-bold text-lg flex items-center gap-2 font-serif">
                  {item.title} <ZoomIn className="w-4 h-4 text-white opacity-80" />
                </h3>
                <p className="text-stone-300 text-xs mt-1 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
          })}
        </div>

      </div>

      {/* Lightbox Modal overlay screen */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 bg-charcoal-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
          id="gallery-lightbox-overlay"
        >
          <div className="relative w-full max-w-4xl flex flex-col max-h-[95vh] items-center text-white" onClick={(e) => e.stopPropagation()}>
            {/* Close Button top-right */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute -top-12 right-0 p-2 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Photo frame */}
            <img
              src={activeItem.url}
              alt={activeItem.title}
              className="max-h-[80vh] w-auto object-contain rounded-sm border border-stone-850 shadow-2xl bg-[#1B2D24]"
              referrerPolicy="no-referrer"
            />

            {/* Label and desc under */}
            <div className="text-center mt-4 max-w-2xl px-6">
              <span className="text-xs font-mono font-semibold text-sunrise-400 uppercase tracking-widest">
                {activeItem.category}
              </span>
              <h4 className="text-xl font-display font-semibold text-stone-100 mt-1 font-serif">
                {activeItem.title}
              </h4>
              <p className="text-stone-300 text-sm mt-1 font-light">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
