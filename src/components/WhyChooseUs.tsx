import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHY_CHOOSE_US } from "../data";
import { Compass, Users, Shield, Camera, Heart, Leaf } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass: Compass,
  Users: Users,
  Shield: Shield,
  Camera: Camera,
  Heart: Heart,
  Leaf: Leaf
};

const iconColors: Record<string, string> = {
  Compass: "text-emerald-500 bg-emerald-500/10",
  Users: "text-sunrise-500 bg-sunrise-500/10",
  Shield: "text-orange-500 bg-orange-500/10",
  Camera: "text-amber-500 bg-amber-500/10",
  Heart: "text-teal-500 bg-teal-500/10",
  Leaf: "text-lime-600 bg-lime-600/10"
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const titleGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal header title elements - faster and smoother
      if (titleGroupRef.current) {
        gsap.fromTo(
          titleGroupRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleGroupRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // Staggered reveal of service cards on scroll - optimized pacing
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".why-card-item");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 85%"
            }
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-24 md:py-32 bg-cream-200 overflow-hidden border-t border-cream-300"
    >
      {/* Decorative Natural Backdrop Accent lines */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-forest-800/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-sunrise-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header Block */}
        <div ref={titleGroupRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-500 block">
            Designed for True Adventurers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal-900 leading-tight font-serif">
            Setting the Highest Standards in <span className="font-serif italic font-normal text-sunrise-500 font-serif">Mountain Expeditions</span>
          </h2>
          <div className="w-16 h-0.5 bg-sunrise-500 mx-auto" />
          <p className="text-stone-600 text-sm md:text-md font-light max-w-2xl mx-auto">
            We deliver ultimate safety assurance, ecological responsibility, and premium trekking comforts. This is why discerning travelers from 40+ countries trust us with their expedition.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div
          ref={cardsContainerRef}
          id="why-us-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 cursor-default"
        >
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.iconName] || Compass;
            const colorClass = iconColors[item.iconName] || "text-emerald-500 bg-emerald-500/10";

            return (
              <div
                key={item.id}
                id={`why-card-${item.id}`}
                className={`why-card-item bg-[#FDFCF8] border border-cream-300 rounded-sm p-6 md:p-8 flex flex-col gap-6 shadow-sm hover:shadow-lg hover:border-sunrise-500/30 transition-[border-color,box-shadow] duration-300`}
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center shrink-0 ${colorClass}`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-charcoal-900 group-hover:text-forest-800">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light">
                    {item.desc}
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
