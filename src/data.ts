import { Package, FAQItem, GalleryItem, TestimonialItem } from "./types";

export const TOUR_PACKAGES: Package[] = [
  {
    id: "rinjani-2d1n",
    name: "2 Days 1 Night Mount Rinjani Summit Shared Trip",
    tag: "Most popular budget trekking package for solo travelers",
    duration: "2 Days & 1 Night",
    priceUSD: 130,
    priceDisplay: "IDR 1,990,000",
    difficulty: "Moderate to Challenging",
    elevation: "Summit 3,726 m (approx. 26 km)",
    bestFor: "Solo travelers, backpackers, and budget travelers seeking a summit adventure in the shortest time",
    summary: "The most popular budget trekking package for solo travelers, backpackers, and adventure seekers who want to reach the summit of Mount Rinjani in the shortest time possible. This shared group trekking program follows the Sembalun Route, offering spectacular savanna landscapes, crater rim camping, and an unforgettable sunrise from the summit at 3,726 meters above sea level.",
    highlights: [
      "Reach the Mount Rinjani Summit at 3,726 m",
      "Spectacular Sembalun savanna landscapes",
      "Overnight camping at Sembalun Crater Rim Campsite (2,639 m)",
      "Unforgettable sunrise views from the summit",
      "Round trip transport Senaru – Sembalun & North Lombok drop-off",
      "Licensed guide and professional porter team provided"
    ],
    image: "/images/package_2d1n.png",
    itinerary: [
      {
        day: 1,
        title: "Sembalun Village to Sembalun Crater Rim Campsite",
        description: "06:30 breakfast in Homestay Senaru. At 07:00, take a car to Sembalun Village (1,156 m). 08:00 registration at the government office. Start trekking at 08:40, passing Pos 1 (1,300 m) and Pos 2 (1,500 m) for lunch at 12:00. Continue to Pos 3 (1,800 m) at 13:30, then ascend to Sembalun Crater Rim Campsite (2,639 m), arriving by 17:00 - 18:00. Enjoy sunset views over Segara Anak Lake and Mount Barujari, followed by dinner and overnight camping.",
        highlights: ["Senaru to Sembalun transfer", "Registration at government office", "Savanna trail & Pos 2 lunch break", "Sembalun Crater Rim sunset & camp"]
      },
      {
        day: 2,
        title: "Summit – Sembalun Campsite – Sembalun Village – Drop Off",
        description: "Wake-up call at 02:00 for a light breakfast, followed by the summit ascent starting at 02:30. Reach Mount Rinjani Summit (3,726 m) around 05:30 - 06:00 to enjoy a majestic sunrise and panoramic views of Lombok, Bali, Sumbawa, and Segara Anak Lake. Begin descent back to the campsite at 06:30 for breakfast. Break camp at 09:30 and descend to Sembalun Village (arriving 14:00 - 16:00). Transfer back to Senaru and drop-off around North Lombok.",
        highlights: ["02:30 AM Summit push (3,726 m)", "Golden sunrise victory views", "Descent to Sembalun Village", "Drop-off transfer in North Lombok"]
      }
    ],
    services: {
      included: [
        "Mount Rinjani Entrance Ticket",
        "Professional Licensed Guide",
        "Experienced Porter Team",
        "Meals and Drinking Water During Trekking",
        "Trekking Regular Insurance",
        "Mattress",
        "Sleeping Bag",
        "Camping Tent",
        "Toilet Tent",
        "Cooking Equipment",
        "Round Trip Transport Senaru – Sembalun",
        "Return Transfer Around North Lombok"
      ],
      excluded: [
        "Pickup Service",
        "1 Night Accommodation in Senaru",
        "Personal Trekking Equipment",
        "Guide and Porter Tips",
        "Premium Insurance (Helicopter Evacuation Coverage)"
      ],
      preparation: [
        "Warm Jacket",
        "Trekking Shoes",
        "Headlamp",
        "Small Backpack (20–30L)",
        "Long Trekking Pants",
        "Gloves",
        "Hat or Buff",
        "Personal Medication",
        "Power Bank",
        "Raincoat (During Rainy Season)"
      ]
    },
    pickupAddons: [
      { location: "Mataram", price: "IDR 400,000" },
      { location: "Bangsal / Teluk Nare / North Lombok", price: "IDR 300,000" },
      { location: "Senggigi", price: "IDR 400,000" },
      { location: "Lombok Airport", price: "IDR 550,000" },
      { location: "Kuta Lombok", price: "IDR 600,000" },
      { location: "Selong Belanak", price: "IDR 650,000" },
      { location: "Tetebatu", price: "IDR 600,000" }
    ]
  },
  {
    id: "rinjani-3d2n",
    name: "3 Days 2 Nights Rinjani Shared Trip – Summit, Lake & Hot Spring",
    tag: "Professional shared trekking package to explore the best highlights",
    duration: "3 Days & 2 Nights",
    priceUSD: 140,
    priceDisplay: "IDR 2,200,000",
    difficulty: "Moderate to Challenging",
    elevation: "Summit 3,726 m (approx. 28–32 km)",
    bestFor: "Adventurers looking for a professional shared group trekking experience",
    summary: "Professional shared trekking package to explore the best highlights of Mount Rinjani including the Summit, Segara Anak Lake, Natural Hot Spring, and Senaru Crater Rim.",
    highlights: [
      "Trek through scenic savanna and tropical rainforests",
      "Early morning summit ascent for sunrise (3,726 m)",
      "Descend to Segara Anak Lake & soak in Natural Hot Springs",
      "Camp overnight at Sembalun Crater Rim & Senaru Crater Rim",
      "Regular trekking insurance included",
      "Licensed guide and professional porter team provided"
    ],
    image: "/images/package_3d2n.png",
    itinerary: [
      {
        day: 1,
        title: "Senaru to Sembalun – Start Trek – Sembalun Campsite",
        description: "Transfer from Senaru to Sembalun Village. Registration and health check before starting the trek. Trek through Pos 1, Pos 2 and Pos 3 before reaching Sembalun Crater Rim Campsite. Enjoy sunset views and overnight camping.",
        highlights: ["Senaru to Sembalun transfer", "Registration & health check", "Pos 1, 2 & 3 savanna trek", "Sembalun Crater Rim sunset & camp"]
      },
      {
        day: 2,
        title: "Summit – Lake – Hot Spring – Senaru Campsite",
        description: "Early morning summit ascent for sunrise. Return to campsite for breakfast, then descend to Segara Anak Lake and Natural Hot Spring. Continue climbing to Senaru Crater Rim Campsite for overnight camping.",
        highlights: ["Summit sunrise climb (3,726 m)", "Segara Anak Lake descent", "Natural Hot Spring soak", "Senaru Crater Rim climb & camp"]
      },
      {
        day: 3,
        title: "Senaru Campsite – Return – Drop Off",
        description: "Descend through the tropical rainforest of Senaru. Arrive at Senaru Village and continue with transfer service around North Lombok.",
        highlights: ["Senaru rainforest descent", "Arrive at Senaru Village", "Drop-off transfer in North Lombok"]
      }
    ],
    services: {
      included: [
        "Rinjani Entrance Ticket",
        "Professional Guide and Porter",
        "Meals and Drinking Water During Trekking",
        "Regular Trekking Insurance",
        "Camping Equipment (Mattress, Sleeping Bag, Camping Tent, Toilet Tent)",
        "Cooking Gears",
        "Senaru – Sembalun Transportation",
        "Return Transfer After Trek Around North Lombok"
      ],
      excluded: [
        "Pickup Service",
        "1 Night Accommodation in Senaru",
        "Personal Equipment (Jacket, Shoes, Headlamp, Trekking Stick, Small Bag, Long Pants, Gloves)",
        "Guide and Porter Tips",
        "Premium Insurance (Helicopter Evacuation)"
      ],
      preparation: [
        "Pack a 25L to 35L daypack for personal items",
        "Prepare personal equipment: warm jacket, hiking shoes, headlamp, trekking poles, long pants, gloves",
        "Ensure you have a light bag for daily trekking items",
        "Get plenty of rest and cardiovascular preparation before departure"
      ]
    },
    pickupAddons: [
      { location: "Mataram", price: "IDR 400,000" },
      { location: "Bangsal / Teluk Nare / North Lombok", price: "IDR 300,000" },
      { location: "Senggigi", price: "IDR 400,000" },
      { location: "Lombok Airport", price: "IDR 550,000" },
      { location: "Kuta Lombok", price: "IDR 600,000" },
      { location: "Selong Belanak", price: "IDR 650,000" },
      { location: "Tetebatu", price: "IDR 600,000" }
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "licensed-guides",
    title: "Senior Licensed Guides",
    desc: "All our senior guides are certified by the Mount Rinjani National Park Association, holding safety, first aid, and wilderness WFR credentials with 10+ years of trail experience.",
    iconName: "Compass",
    accent: "border-emerald-500/30 hover:border-emerald-500"
  },
  {
    id: "small-group",
    title: "Small Group Experience",
    desc: "We limit groups to a maximum of 8 hikers. This guarantees personalized safety attention, comfortable dining, and an optimal trekking pace.",
    iconName: "Users",
    accent: "border-sunrise-500/30 hover:border-sunrise-500"
  },
  {
    id: "safety-first",
    title: "Safety Infrastructure",
    desc: "Equipped with pulse oximeters, emergency satellite communication, gravity-fed water filters, and extreme-weather dome tents field-tested on the summit.",
    iconName: "Shield",
    accent: "border-orange-500/30 hover:border-orange-500"
  },
  {
    id: "best-spots",
    title: "Best Photo Coordinates",
    desc: "We design our schedules meticulously. Our guides know the exact coordinates along the crater rims to capture your epic golden hour photos.",
    iconName: "Camera",
    accent: "border-amber-500/30 hover:border-amber-500"
  },
  {
    id: "cultural-exp",
    title: "Sasak Cultural Touch",
    desc: "Learn the ancient legends of Lombok, traditional Sasak trail blessings, and enjoy authentic Sasak coffee brewed over an open fire.",
    iconName: "Heart",
    accent: "border-teal-500/30 hover:border-teal-500"
  },
  {
    id: "eco-friendly",
    title: "Eco-Conscious Trekking",
    desc: "We strictly enforce a 'Pack It In, Pack It Out' policy, paying extra incentives to porters to sweep and carry down trail waste to keep Rinjani pristine.",
    iconName: "Leaf",
    accent: "border-lime-500/30 hover:border-lime-500"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-beginners",
    question: "Is this trek suitable for beginners?",
    answer: "Mount Rinjani is a steep and physically demanding active volcano. While the 2D1N package is achievable for beginners with strong determination and regular physical fitness, the trail features slippery volcanic ash and steep climbs. Stamina training (jogging, cardio, stairs) weeks before the trek is highly recommended. The 3D2N package is classified as strenuous and is best suited for those with prior mountain hiking experience."
  },
  {
    id: "faq-bring",
    question: "What personal gear should I bring myself?",
    answer: "We provide high-quality windproof tents, warm sleeping bags, comfortable mattresses, pillows, food supplies, and porters. You only need to bring personal items: a windproof jacket, trekking clothes, sturdy hiking shoes with good grip, a headlamp for night hiking, sunglasses, sunscreen, trekking poles, and personal wipes. Warm jackets, headlamps, and poles are also available for rent in Senaru."
  },
  {
    id: "faq-temp",
    question: "How cold does it get at the top?",
    answer: "Lombok is warm and tropical, but Rinjani is a high-altitude mountain. Temperatures at Sembalun Crater Rim (2,639m ASL) hover between 5°C and 10°C at night. At the 3,726m summit at sunrise, wind chill can drive temperatures down to 0°C - 3°C. Wearing thermal layers, a beanie, and a windproof jacket is essential."
  },
  {
    id: "faq-porters",
    question: "Are porters provided? What do they carry?",
    answer: "Yes! All packages include a team of professional local porters. They carry all group camping equipment: dome tents, cooking gear, gas canisters, fresh food ingredients, and private toilet tents. They can also carry up to 5kg of your personal belongings. If you wish to carry heavy personal gear without hassle, private porters are available for hire at approximately $25 USD per day."
  },
  {
    id: "faq-included",
    question: "What is included in the package price?",
    answer: "Our pricing is fully transparent with no hidden fees. It includes private AC hotel transfers across Lombok, e-Rinjani registration and National Park fees, licensed guides, friendly porters and cooks, 3 hot meals daily with fresh tropical fruits, premium camping gear (double-layer tents, thick mattresses, sleeping bags), and standard safety equipment. No hidden charges!"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    url: "/images/gallery_segara_anak.png",
    category: "Caldera Lake",
    title: "Shimmering Segara Anak",
    description: "The turquoise waters of Segara Anak Lake nestled peacefully inside the caldera."
  },
  {
    id: "gallery-2",
    url: "/images/gallery_sunrise.png",
    category: "Summit Dawn",
    title: "Golden Sunrise",
    description: "The first rays of gold cutting through a vast sea of clouds from the 3,726m summit."
  },
  {
    id: "gallery-3",
    url: "/images/gallery_camp.png",
    category: "Campsite",
    title: "Night at Sembalun Rim",
    description: "Sturdy dome tents lined up along the Sembalun Crater Rim under a canopy of stars."
  },
  {
    id: "gallery-4",
    url: "/images/gallery_hot_spring.png",
    category: "Hot Springs",
    title: "Geothermal Relaxation",
    description: "Soothing natural volcanic hot springs, perfect for rejuvenating tired muscles."
  },
  {
    id: "gallery-5",
    url: "/images/gallery_ridge.png",
    category: "Hiking Trail",
    title: "Summit Ridge Walk",
    description: "A challenging volcanic scree ridge trail leading to the highest peak."
  },
  {
    id: "gallery-6",
    url: "/images/gallery_group.png",
    category: "Group Bond",
    title: "Summit Victory Smiles",
    description: "Trekkers from all over the world celebrating their successful summit climb together."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    name: "Charlotte Durand",
    country: "France",
    rating: 5,
    date: "May 2026",
    quote: "Standing on the summit of Rinjani was the highlight of my trip to Indonesia! The 3D2N package was perfectly structured. Soaking in the natural hot springs melted away all the physical strain of the trek. Our guide, Wayan, was incredibly attentive and WFR-certified.",
    avatar: "/images/avatar_charlotte.png",
    trekTaken: "3D2N Summit & Lake"
  },
  {
    id: "review-2",
    name: "Marcus Reynolds",
    country: "Australia",
    rating: 5,
    date: "June 2026",
    quote: "I was blown away by the food. The porters are absolute legends! They carried fresh ingredients, overtook us on the trail, and served hot banana pancakes, chicken curry, and fried rice right at the rim camp. Truly hard workers.",
    avatar: "/images/avatar_marcus.png",
    trekTaken: "2D1N Express Trek"
  },
  {
    id: "review-3",
    name: "Yuki Tanaka",
    country: "Japan",
    rating: 5,
    date: "April 2026",
    quote: "So glad we booked with this eco-conscious team. Our guide carried extra trash bags, and our campsite was completely spotless. Clean filtered drinking water, ultra-warm sleeping bags, and amazing photos that I will cherish forever.",
    avatar: "/images/avatar_yuki.png",
    trekTaken: "3D2N Lake & Caldera"
  },
  {
    id: "review-4",
    name: "David Sterling",
    country: "United Kingdom",
    rating: 5,
    date: "May 2026",
    quote: "Pre-booking communication on WhatsApp was lightning fast. The private AC car pick-up was perfectly on time at Lombok Airport. If you're looking to trek Rinjani, this friendly, WFR-certified team is the absolute top choice.",
    avatar: "/images/avatar_david.png",
    trekTaken: "2D1N Sembalun Rim"
  }
];
