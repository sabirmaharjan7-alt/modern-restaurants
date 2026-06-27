/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[]; // e.g., ["GF", "V", "Signature"]
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google' | 'Yelp' | 'Michelin Guide';
  avatar?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'spaces' | 'details';
}

export interface PrivateDiningOption {
  id: string;
  name: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
}

export interface ReservationDetails {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequests?: string;
  area: 'main-dining' | 'hearth-counter' | 'garden-terrace';
}

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  mapsUrl: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
  note?: string;
}
