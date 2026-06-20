import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Compass,
  Users,
  DollarSign,
  Shield,
  Heart,
  Calendar,
  Backpack,
  UserCheck,
  Tag
} from "lucide-react";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate left side content on scroll
      if (leftContentRef.current) {
        gsap.fromTo(
          leftContentRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftContentRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // Animate right side features card on scroll
      if (rightCardRef.current) {
        gsap.fromTo(
          rightCardRef.current,
          { opacity: 0, scale: 0.96, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightCardRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // Animate tags cloud
      if (tagsRef.current) {
        gsap.fromTo(
          tagsRef.current.children,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 0.6,
            scale: 1,
            duration: 0.8,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: tagsRef.current,
              start: "top 90%"
            }
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const features = [
    { text: "Specialized in Shared Trip and Join Group Trekking", icon: Users },
    { text: "Affordable and Budget-Friendly Rinjani Packages", icon: DollarSign },
    { text: "Perfect for Solo Travelers and Backpackers", icon: Compass },
    { text: "Experienced Local Guides and Porter Teams", icon: UserCheck },
    { text: "Professional Safety Standards", icon: Shield },
    { text: "High-Quality Camping Equipment", icon: Backpack },
    { text: "Small Group Experience", icon: Users },
    { text: "Flexible Departure Schedules During Trekking Season", icon: Calendar },
    { text: "Local Knowledge and Authentic Lombok Hospitality", icon: Heart }
  ];

  const seoKeywords = [
    "Mount Rinjani Shared Trip",
    "Rinjani Join Group Trek",
    "Rinjani Group Trekking",
    "Budget Rinjani Trekking",
    "Solo Traveler Rinjani Trek",
    "Rinjani Backpacker Tour",
    "Shared Trekking Lombok",
    "Mount Rinjani Join Group Package",
    "Rinjani Summit Shared Trip",
    "Affordable Rinjani Trekking"
  ];

  return (
    <section
      ref={containerRef}
      id="about-us"
      className="relative py-24 md:py-32 bg-cream-200 overflow-hidden border-t border-cream-300"
    >
      {/* Visual Accent Backdrops */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-sunrise-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-forest-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Story & Bio */}
          <div ref={leftContentRef} className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-sunrise-500 block">
              About Us
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal-900 leading-tight font-serif">
              Rinjani Hub
            </h2>
            
            <div className="w-16 h-0.5 bg-sunrise-500" />
            
            <p className="text-stone-700 text-sm md:text-base leading-relaxed font-light">
              Welcome to <strong>Rinjani Hub</strong>, your trusted local specialist for Mount Rinjani Shared Trips and Join Group Trekking Packages in Lombok, Indonesia.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Rinjani Hub was created with one simple mission: to make Mount Rinjani accessible, affordable, and enjoyable for solo travelers, backpackers, and adventure seekers from around the world. We focus exclusively on shared trips and join group trekking experiences, allowing travelers to enjoy the beauty of Mount Rinjani while keeping costs affordable without compromising safety, service quality, and trekking experience.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Based in Lombok and operated by experienced local trekking professionals, Rinjani Hub connects travelers who wish to explore Mount Rinjani together. Whether you are traveling alone, with a friend, or looking for a budget-friendly trekking option, our join group departures provide an excellent opportunity to meet fellow hikers from different countries while experiencing one of Southeast Asia’s most spectacular volcanoes.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Our shared trekking programs cover the most popular Mount Rinjani routes, including the Rinjani Summit (3,726 m), Segara Anak Lake, Natural Hot Springs, Sembalun Crater Rim, Senaru Crater Rim, and other iconic destinations within Mount Rinjani National Park.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              At Rinjani Hub, we believe that great adventures should be accessible to everyone. Our shared trip concept helps travelers reduce costs while still receiving professional guiding services, quality meals, comfortable camping equipment, and complete trekking support throughout the journey.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Our team consists of licensed local guides, experienced porters, and dedicated trekking coordinators who understand Mount Rinjani better than anyone. We are passionate about creating safe, memorable, and environmentally responsible trekking experiences.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              We are also committed to responsible tourism by supporting local communities, promoting eco-friendly trekking practices, and encouraging all trekkers to help preserve the natural beauty of Mount Rinjani National Park.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Whether you are looking for a 2 Days 1 Night Summit Trek, 3 Days 2 Nights Summit and Lake Adventure, or a complete Rinjani experience, Rinjani Hub is ready to help you join the perfect trekking group.
            </p>

            <div className="w-full h-px bg-cream-300 my-6" />

            <p className="font-serif italic font-normal text-sunrise-500 text-lg leading-relaxed max-w-xl">
              &ldquo;Join travelers from around the world and experience Mount Rinjani together with Rinjani Hub.&rdquo;
            </p>
          </div>

          {/* Right Column: Why Choose Card Block */}
          <div ref={rightCardRef} className="lg:col-span-5 w-full">
            <div className="bg-[#FDFCF8] border border-cream-300 rounded-sm p-6 md:p-8 shadow-xl relative overflow-hidden">
              {/* Top orange header strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sunrise-500 to-[#F27D26]" />
              
              <h3 className="text-xl font-display font-bold text-charcoal-900 mb-6 font-serif">
                Why Choose Rinjani Hub?
              </h3>

              <div className="space-y-4">
                {features.map((feat, index) => {
                  const Icon = feat.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-sm bg-sunrise-500/10 text-sunrise-500 flex items-center justify-center shrink-0 mt-0.5 border border-sunrise-500/15">
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="text-stone-700 text-xs md:text-sm font-light leading-relaxed">
                        {feat.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Keyword Tag Cloud footer for SEO */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-cream-300">
          <div className="flex items-center gap-2 mb-4 text-stone-500">
            <Tag className="w-4 h-4 text-sunrise-500" />
            <span className="text-[10px] uppercase font-mono tracking-wider font-bold">Discover More About Us</span>
          </div>
          <div ref={tagsRef} className="flex flex-wrap gap-2">
            {seoKeywords.map((keyword) => (
              <span
                key={keyword}
                className="px-2.5 py-1 bg-white/70 border border-cream-300 text-stone-600 text-[10px] font-mono rounded-sm cursor-default hover:border-sunrise-500/30 hover:text-sunrise-500 transition-colors duration-200"
              >
                #{keyword.replace(/\s+/g, "")}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
