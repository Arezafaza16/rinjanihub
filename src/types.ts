export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  highlights: string[];
}

export interface ServiceList {
  included: string[];
  excluded: string[];
  preparation: string[];
}

export interface PickupAddon {
  location: string;
  price: string;
}

export interface Package {
  id: string;
  name: string;
  tag: string;
  duration: string;
  priceUSD: number;
  priceDisplay: string;
  difficulty: string;
  elevation: string;
  bestFor: string;
  summary: string;
  highlights: string[];
  image: string;
  itinerary: ItineraryItem[];
  services: ServiceList;
  pickupAddons?: PickupAddon[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  country: string;
  rating: number;
  date: string;
  quote: string;
  avatar: string;
  trekTaken: string;
}
