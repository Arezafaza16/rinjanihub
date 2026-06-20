import React, { useEffect, useRef } from "react";
import { X, Compass, MapPin, DollarSign, ShieldCheck, Calendar, Check, AlertTriangle, Backpack } from "lucide-react";
import gsap from "gsap";
import { Package } from "../types";

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: Package | null;
}

export default function PackageModal({ isOpen, onClose, pkg }: PackageModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Fade-in animations
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.fromTo(
        modalBoxRef.current,
        { y: 30, scale: 0.95, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!pkg) return null;

  const handleCustomClose = () => {
    gsap.to(modalBoxRef.current, {
      y: 20,
      scale: 0.96,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(overlayRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.2,
          onComplete: onClose
        });
      }
    });
  };

  const whatsAppLink = `https://wa.me/6281353144856?text=Halo%20Rinjani%20Hub!%20Saya%20tertarik%20memesan%20${encodeURIComponent(pkg.name)}.`;

  return (
    <div
      ref={overlayRef}
      id="package-modal"
      style={{ pointerEvents: "none" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-charcoal-950/80 backdrop-blur-md opacity-0"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleCustomClose();
      }}
    >
      <div
        ref={modalBoxRef}
        id="package-modal-container"
        className="relative w-full max-w-4xl max-h-[90vh] bg-stone-50 border border-cream-300 rounded-sm shadow-2xl flex flex-col overflow-hidden text-charcoal-900"
      >
        {/* Header Photo Backdrop */}
        <div className="relative h-48 md:h-64 shrink-0 bg-forest-950">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-forest-950/40 to-forest-950/60" />

          {/* Close button */}
          <button
            onClick={handleCustomClose}
            id="close-modal-btn"
            className="absolute top-4 right-4 p-2 bg-charcoal-950/40 hover:bg-sunrise-500 hover:text-white backdrop-blur-md text-stone-200 rounded-sm transition-colors duration-200 border border-stone-200/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Content overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 bg-sunrise-500 text-white text-[10px] tracking-widest uppercase font-mono font-semibold rounded-sm shadow-md">
              {pkg.duration}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-charcoal-950 mt-2 filter drop-shadow-sm font-serif">
              {pkg.name}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-stone-700 text-xs md:text-sm">
              <span className="flex items-center gap-1 font-mono">
                <Compass className="w-4 h-4 text-forest-700" /> {pkg.difficulty}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <MapPin className="w-4 h-4 text-sunrise-500" /> {pkg.elevation}
              </span>
              <span className="flex items-center gap-1 font-mono font-semibold text-forest-850">
                <DollarSign className="w-4 h-4 text-emerald-700 -mr-1" /> From {pkg.priceDisplay}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Contents */}
        <div id="modal-content-scroll" className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-stone-50">
          {/* Summary / Best For */}
          <div className="space-y-2 border-b border-cream-300 pb-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-sunrise-600 font-bold">Expedition Summary</h4>
            <p className="text-stone-800 leading-relaxed text-sm md:text-base">
              {pkg.summary}
            </p>
            <div className="bg-forest-800/5 border border-forest-800/10 rounded-sm p-3 text-xs md:text-sm text-forest-900 mt-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-forest-700 shrink-0" />
              <span><strong>Best For:</strong> {pkg.bestFor}</span>
            </div>
          </div>

          {/* Interactive Itinerary Schedule */}
          <div>
            <h4 className="text-base font-display font-semibold text-forest-900 flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-sunrise-500" /> Expedition Itinerary
            </h4>
            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-cream-300">
              {pkg.itinerary.map((dayPlan) => (
                <div key={dayPlan.day} className="relative pl-10" id={`itinerary-day-${dayPlan.day}`}>
                  {/* Timeline indicator circle */}
                  <div className="absolute left-[8px] top-1.5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-sunrise-500 bg-stone-50 flex items-center justify-center z-10 shadow-sm">
                    <span className="w-2 h-2 bg-forest-800 rounded-full" />
                  </div>

                  <div className="bg-white border border-cream-300 rounded-sm p-4 md:p-5 hover:border-sunrise-500/40 hover:shadow-sm transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="text-xs font-mono font-bold text-sunrise-500 uppercase tracking-wider">
                        Day {dayPlan.day}
                      </span>
                      <h5 className="text-md font-display font-bold text-charcoal-900 font-serif">
                        {dayPlan.title}
                      </h5>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {dayPlan.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dayPlan.highlights.map((hlt) => (
                        <span key={hlt} className="px-2 py-1 bg-cream-100 text-stone-700 text-[11px] font-mono rounded-sm border border-cream-200">
                          ✦ {hlt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Included / Excluded services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Inclusions */}
            <div className="bg-emerald-950/5 border border-emerald-900/10 rounded-sm p-5 md:p-6" id="modal-inclusions">
              <h4 className="text-sm font-display font-bold text-emerald-900 uppercase tracking-widest flex items-center gap-2 mb-4">
                <div className="p-1 bg-emerald-600 text-white rounded-sm">
                  <Check className="w-3.5 h-3.5" />
                </div>
                What's Included
              </h4>
              <ul className="space-y-3">
                {pkg.services.included.map((inc, i) => (
                  <li key={i} className="flex gap-2 text-xs md:text-sm text-stone-700 items-start">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✔</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-orange-950/5 border border-orange-900/10 rounded-sm p-5 md:p-6" id="modal-exclusions">
              <h4 className="text-sm font-display font-bold text-orange-900 uppercase tracking-widest flex items-center gap-2 mb-4">
                <div className="p-1 bg-orange-600/90 text-white rounded-sm">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                What's Excluded
              </h4>
              <ul className="space-y-3">
                {pkg.services.excluded.map((exc, i) => (
                  <li key={i} className="flex gap-2 text-xs md:text-sm text-stone-700 items-start">
                    <span className="text-sunrise-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Preparation guidelines */}
          <div className="p-5 md:p-6 bg-stone-100 border border-stone-200 rounded-sm" id="modal-prep-tips">
            <h4 className="text-sm font-display font-bold text-charcoal-900 uppercase tracking-widest flex items-center gap-2 mb-4">
              <Backpack className="w-5 h-5 text-sunrise-500" /> Required Gear & Preparation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pkg.services.preparation.map((prep, i) => (
                <div key={i} className="flex gap-3 text-xs md:text-sm text-stone-700 items-start bg-white p-3 rounded-sm border border-stone-200">
                  <span className="text-sunrise-500 font-mono text-xs shrink-0 mt-0.5 font-bold">0{i+1}.</span>
                  <span>{prep}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Pickup Service (Add-On) */}
          {pkg.pickupAddons && pkg.pickupAddons.length > 0 && (
            <div className="p-5 md:p-6 bg-[#FDFCF8] border border-cream-300 rounded-sm" id="modal-pickup-addons">
              <h4 className="text-sm font-display font-bold text-charcoal-900 uppercase tracking-widest flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-sunrise-500" /> Optional Pickup Service (Add-On)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-cream-300 text-stone-500 uppercase font-mono tracking-wider">
                      <th className="py-2 px-3">Location</th>
                      <th className="py-2 px-3 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.pickupAddons.map((addon, i) => (
                      <tr key={i} className="border-b border-cream-200/50 hover:bg-cream-100/30 transition-colors">
                        <td className="py-2.5 px-3 text-stone-800 font-light">{addon.location}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-forest-850">{addon.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Dedicated Fixed Footer */}
        <div className="sticky bottom-0 bg-stone-50 border-t border-cream-300 p-4 md:p-6 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-20">
          <div>
            <div className="text-xs text-stone-500 font-mono font-medium">Special Direct Booking Rate</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl font-mono font-bold text-forest-800">{pkg.priceDisplay}</span>
              <span className="text-xs text-stone-600">/ trekker (all-inclusive)</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleCustomClose}
              id="modal-foot-cancel-btn"
              className="px-5 py-3 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-sm border border-stone-300 transition-colors duration-200"
            >
              Back to Home
            </button>
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              id="modal-foot-whatsapp-cta"
              className="px-6 py-3 bg-sunrise-500 hover:bg-sunrise-600 text-white text-xs font-semibold rounded-sm duration-200 text-center flex items-center justify-center gap-2 shadow-lg shadow-sunrise-500/20 cursor-pointer"
            >
              {/* WhatsApp Icon representation */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.1 1.455 4.8 1.457 5.4 0 9.8-4.398 9.8-9.782.002-2.607-1.012-5.06-2.857-6.904C16.545 2.08 14.1 1.066 11.5 1.067C6.1 1.067 1.7 5.465 1.7 10.85c0 1.79.467 3.54 1.354 5.091L2.1 21.8l6.1-.59v.333c-1.53-.946-1.53-.946-.633-.389zM16.5 13.5c-.246-.123-1.46-.72-1.687-.803-.227-.082-.393-.123-.559.123-.166.246-.64.803-.785.967-.145.163-.29.184-.536.06-.245-.122-1.037-.382-1.975-1.218-.73-.65-1.222-1.453-1.365-1.7-.145-.246-.015-.379.108-.501.11-.11.246-.287.37-.43.12-.144.164-.246.246-.41.08-.164.04-.307-.02-.43-.06-.123-.559-1.347-.766-1.847-.2-.484-.4-.418-.56-.426-.145-.006-.31-.008-.475-.008-.166 0-.435.06-.66.307-.227.246-.867.848-.867 2.07 0 1.22 1.347 2.4 1.532 2.65.185.247 2.65 4.045 6.42 5.674.9.387 1.6.62 2.15.795.9.288 1.73.247 2.383.15.73-.109 2.235-.913 2.545-1.794.31-.88.31-1.637.217-1.795-.084-.165-.24-.26-.484-.38z" />
              </svg>
              Secure Slot via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
