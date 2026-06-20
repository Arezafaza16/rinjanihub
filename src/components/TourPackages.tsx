import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TOUR_PACKAGES } from "../data";
import { Package } from "../types";
import PackageModal from "./PackageModal";
import { ChevronRight, Check } from "lucide-react";

export default function TourPackages() {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered reveal of header - slower and more elegant
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            stagger: 0.22,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%"
            }
          }
        );
      }

      // Slide and stagger package cards - slower and more premium
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 120 },
          {
            opacity: 1,
            y: 0,
            duration: 1.8,
            stagger: 0.35,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 70%"
            }
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const openPackageDetails = (pkg: Package) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  return (
    <section
      ref={containerRef}
      id="packages"
      className="relative py-24 md:py-32 bg-[#1B2D24] text-white overflow-hidden"
    >
      {/* Visual Ambient Grid & Radial Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(242,125,38,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-400 block">
            Guaranteed Best Premium Service
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-50 leading-tight font-serif">
            Select Mount Rinjani <span className="font-serif italic font-normal text-sunrise-400 font-serif">Trekking Packages</span>
          </h2>
          <div className="w-16 h-0.5 bg-sunrise-500 mx-auto" />
          <p className="text-stone-300 text-sm md:text-md font-light max-w-2xl mx-auto leading-relaxed">
            Choose between an intensive summit climb or a complete loop around the volcanic caldera and natural hot springs. An outstanding safety record and gourmet campsite meals prepared by our camp chef are fully included.
          </p>
        </div>

        {/* Packages Comparison Grid */}
        <div
          ref={cardsRef}
          id="packages-container"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {TOUR_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className="bg-white/5 backdrop-blur-md rounded-sm border border-white/10 overflow-hidden flex flex-col hover:border-sunrise-500/50 hover:shadow-2xl hover:shadow-sunrise-500/5 transition-[border-color,box-shadow] duration-300 cursor-default"
            >
              {/* Card Image Cover Header */}
              <div className="relative h-64 overflow-hidden shrink-0 group">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badge top right */}
                <div className="absolute top-4 right-4 bg-[#1B2D24]/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-sm text-[9px] font-mono tracking-wider font-semibold text-sunrise-400">
                  ★ Highly Recommended
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D24] via-[#1B2D24]/20 to-transparent" />
                
                {/* Meta details over image */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="px-3 py-1 bg-sunrise-500 text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded-sm shadow-md">
                    {pkg.duration}
                  </span>
                  <div className="font-mono text-xs tracking-tight text-stone-200">
                    Difficulty: <span className="text-sunrise-400 font-bold">{pkg.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Card Body Contents */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-stone-300 uppercase tracking-widest block font-bold">
                      {pkg.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-medium text-stone-100 mt-0.5 font-serif">
                      {pkg.name}
                    </h3>
                  </div>

                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-light">
                    {pkg.summary}
                  </p>

                  {/* Highlights Bullet Checked Lines */}
                  <div className="space-y-2 border-t border-white/10 pt-4" id={`package-${pkg.id}-highlights`}>
                    <p className="text-[10px] font-mono text-sunrise-400 uppercase tracking-wider font-bold">
                      Core Perks & Amenities
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                       {pkg.highlights.map((hlt, idx) => (
                        <div key={idx} className="flex gap-2 text-xs text-stone-200 items-start">
                          <Check className="w-3.5 h-3.5 text-sunrise-500 shrink-0 mt-0.5" />
                          <span>{hlt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action footer layout */}
                <div className="border-t border-white/10 pt-6 mt-8 flex flex-col gap-5">
                  <div>
                    <span className="text-[9px] font-mono text-stone-400 block mb-1.5">All-Inclusive Rate From</span>
                    <div className="flex items-baseline gap-2 whitespace-nowrap">
                      <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-[#FDFCF8] tracking-tight">{pkg.priceDisplay}</span>
                      <span className="text-[11px] text-stone-400 font-mono">/ person</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openPackageDetails(pkg)}
                    id={`trigger-package-details-${pkg.id}`}
                    className="w-full px-6 py-3.5 bg-white hover:bg-sunrise-500 hover:text-white text-[#1B2D24] font-mono text-[10px] uppercase tracking-widest font-bold rounded-sm transition-all duration-300 text-center flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                  >
                    Package Details{" "}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Package Detail Modal Overlay */}
      <PackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pkg={selectedPkg}
      />
    </section>
  );
}
