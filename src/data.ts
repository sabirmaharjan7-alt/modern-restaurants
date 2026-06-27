/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Review, GalleryImage, PrivateDiningOption, ContactDetails, BusinessHours } from './types';

export const CHOOSE_US_HIGHLIGHTS = [
  {
    title: "Hearth-Fired Cooking",
    description: "Our custom open-hearth grill burns cherry wood and hickory daily, imparting a primal yet delicate flavor to every ingredient."
  },
  {
    title: "Radical Ingredient Sourcing",
    description: "Every herb, vegetable, and cut of meat is harvested within 80 miles of our kitchen, direct from farms we have visited ourselves."
  },
  {
    title: "Conscious Craftsmanship",
    description: "From our hand-thrown plates to our biodynamic wine pairings, every element of your dining experience is chosen with intent."
  }
];

export const CHEF_BIO = {
  name: "Julian Sterling",
  role: "Chef de Cuisine & Founder",
  quote: "Food is the shortest distance between two human souls. When we cook with wood fire and raw elements, we cook with memory.",
  story: "Chef Julian spent twelve years training in Michelin-starred kitchens across Copenhagen and San Francisco before returning to his roots. Inspired by the ancestral simplicity of open-fire cooking and the unparalleled soils of our valley, he founded Hearth & Vine to prove that premium dining can feel deeply grounding, honest, and warm.",
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: "s1",
    name: "Sourdough & Smoked Bone Butter",
    description: "36-hour slow-fermented wild sourdough, served warm with house-whipped smoked bone-marrow butter and grey sea salt.",
    price: 11,
    tags: ["Signature", "V Option"],
    category: "starters",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "s2",
    name: "Blistered Burrata & Heirloom Fig",
    description: "Creamy hand-tied burrata over cherry wood blistered figs, honeyed balsamic reduction, crushed pistachios, and fresh lemon basil.",
    price: 18,
    tags: ["GF", "V"],
    category: "starters",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "s3",
    name: "Charred Spanish Octopus",
    description: "Tender hearth-grilled octopus tentacle, served with roasted garlic baby potatoes, saffron aioli, and pickled fennel pollen.",
    price: 24,
    tags: ["Signature", "GF"],
    category: "starters",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "s4",
    name: "Hearth-Roasted Forest Mushrooms",
    description: "A selection of wild chanterelle and oyster mushrooms, basted in brown butter, white wine, thyme, and finished with a cured egg yolk.",
    price: 16,
    tags: ["GF", "V"],
    category: "starters",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },

  // MAINS
  {
    id: "m1",
    name: "Cherry-Wood Fire Ribeye (14oz)",
    description: "Dry-aged for 28 days, grilled over live cherry-wood coals, finished with wild leek butter and smoked flake sea salt.",
    price: 54,
    tags: ["Signature", "GF"],
    category: "mains",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m2",
    name: "Pan-Seared Pacific Sea Bass",
    description: "Crispy skin sea bass resting on a pool of buttered corn purée, garden sweet peas, sorrel oil, and blistered toy-box tomatoes.",
    price: 42,
    tags: ["GF"],
    category: "mains",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m3",
    name: "Hearth-Baked Truffle Gnocchi",
    description: "Pillow-soft house potato gnocchi baked in a cast iron skillet with heavy cream, black winter truffle tapenade, and aged pecorino romano.",
    price: 36,
    tags: ["V"],
    category: "mains",
    image: "https://images.unsplash.com/photo-1621996346565-e3bb6463591e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m4",
    name: "Slow-Braised Heritage Pork Belly",
    description: "Apple cider-braised pork belly, crisp-roasted over embers, parsnip cream, fermented apple compote, and mustard greens.",
    price: 39,
    tags: ["GF"],
    category: "mains",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80"
  },

  // DESSERTS
  {
    id: "d1",
    name: "Embers-Charred Peach Galette",
    description: "Rustic flaky pastry encasing wood-fired caramelized peaches, served warm with a scoop of housemade buttermilk vanilla gelato.",
    price: 14,
    tags: ["Signature", "V"],
    category: "desserts",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "d2",
    name: "Smoked Salt Chocolate Pot de Crème",
    description: "Decadent 72% dark single-origin chocolate custard, infused with a whisper of woodsmoke and topped with hand-harvested flaky salt.",
    price: 13,
    tags: ["GF", "V"],
    category: "desserts",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "d3",
    name: "Rosemary & Honey Infused Panna Cotta",
    description: "Velvety goat-milk panna cotta scented with garden rosemary, wild clover honey gel, and crushed honeycomb shards.",
    price: 12,
    tags: ["GF"],
    category: "desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
  },

  // DRINKS
  {
    id: "dr1",
    name: "The Hearthfire Sour",
    description: "Charred-lemon infused Mezcal, fresh blood orange juice, organic agave nectar, and a thyme-infused foam rim.",
    price: 18,
    tags: ["Signature", "Cocktail"],
    category: "drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dr2",
    name: "2019 Estate Cabernet Sauvignon",
    description: "Rich blackcurrant and dark plum notes with a structured, velvety oak finish. Sourced from our biodynamic partner winery in the valley.",
    price: 21,
    tags: ["Wine", "Organic"],
    category: "drinks",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dr3",
    name: "Garden Sage Collins",
    description: "Botanical dry gin, freshly muddled garden sage leaves, pressed key lime, sparkling soda, and cucumber ribbons.",
    price: 16,
    tags: ["Cocktail", "Fresh"],
    category: "drinks",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dr4",
    name: "Hickory-Smoked Cold Brew Negroni",
    description: "Bitter Campari, sweet vermouth, botanical gin, and slow hickory-cold-brewed single estate coffee.",
    price: 17,
    tags: ["Cocktail"],
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    alt: "Hearth-fired dry-aged ribeye steak with charred herbs",
    category: "food"
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    alt: "Our warm, inviting main dining hall with soft wood finishes",
    category: "spaces"
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    alt: "Chef Julian Sterling carefully plating a seasonal burrata",
    category: "details"
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    alt: "Craft negroni cocktail infused with fresh herbs",
    category: "food"
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    alt: "Cozy fireside seating at the Hearth Counter",
    category: "spaces"
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1508708119747-4714d3a4069f?auto=format&fit=crop&w=800&q=80",
    alt: "Hand-thrown ceramic plates lining the chef's pass",
    category: "details"
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80",
    alt: "Blistered burrata starter served with farm-fresh herbs",
    category: "food"
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    alt: "Decanting biodynamic Pinot Noir in our temperature-controlled cellar",
    category: "details"
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    alt: "Our lush, open-air Garden Terrace under string lights",
    category: "spaces"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Elena Rostov",
    rating: 5,
    text: "An absolute masterpiece of warmth. We sat at the Hearth Counter and watched the chefs cook over live embers. The sourdough with bone-marrow butter literally left us speechless. Easily the best new dining experience in the state.",
    date: "2 weeks ago",
    source: "Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r2",
    author: "Marcus Vance",
    rating: 5,
    text: "Hearth & Vine understands the soul of food. There is no pretension here, just flawless execution. The sea bass was cooked to absolute perfection, and the rosemary panna cotta was a revelation. Premium yet incredibly welcoming.",
    date: "1 month ago",
    source: "Michelin Guide",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "r3",
    author: "Clara Tremblay",
    rating: 5,
    text: "From the raw texture of the hand-thrown ceramics to the smell of hickory smoke as you walk in, the sensory design is stunning. Excellent wine pairings and incredibly human, attentive service. A must-visit.",
    date: "3 days ago",
    source: "Google",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

export const PRIVATE_DINING_OPTIONS: PrivateDiningOption[] = [
  {
    id: "p1",
    name: "The Crucible Room",
    capacity: "12 - 18 Guests",
    description: "An intimate, stone-walled enclave nested adjacent to our curated wine cellars. Features a monumental hand-carved walnut table and a dedicated sommelier station.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    features: ["Dedicated Sommelier", "Wine Cellar Access", "Custom Tasting Menu", "AV Capabilities for Private Slidework"]
  },
  {
    id: "p2",
    name: "The Garden Terrace",
    capacity: "25 - 50 Guests",
    description: "A lush, open-air pergola surrounded by blooming rosemary, climbing vines, and glowing clay fire pits. Perfect for larger gatherings and warm-season celebrations.",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80",
    features: ["Private Hearth Grill", "Custom Floral Arrangements", "Live Ambient Acoustic Support", "Full Weather Canopy Available"]
  }
];

export const CONTACT_INFO: ContactDetails = {
  address: "742 Larchmont Blvd, Valley Grove, CA 94520",
  phone: "(415) 555-0189",
  email: "gather@hearthandvine.com",
  mapsUrl: "https://maps.google.com/?q=742+Larchmont+Blvd,+Valley+Grove,+CA+94520"
};

export const BUSINESS_HOURS: BusinessHours[] = [
  {
    days: "Tuesday - Thursday",
    hours: "5:00 PM - 10:00 PM"
  },
  {
    days: "Friday - Saturday",
    hours: "5:00 PM - 11:00 PM",
    note: "Hearth Bar remains open until midnight"
  },
  {
    days: "Sunday",
    hours: "4:30 PM - 9:30 PM",
    note: "Sunday Slow Roast menu"
  },
  {
    days: "Monday",
    hours: "Closed",
    note: "Forage and Sourcing day"
  }
];

export const FAQS = [
  {
    question: "Do you accommodate gluten-free or plant-based diets?",
    answer: "Absolutely. Our menu indicates options that are naturally Gluten-Free (GF) or Vegetarian (V). For vegan guests, our kitchen is always happy to craft custom hearth creations on the spot. Please let your server know of any allergies before ordering."
  },
  {
    question: "How far in advance can I book a table?",
    answer: "Reservations open exactly 30 days in advance at 9:00 AM PST daily. We highly recommend booking ahead for weekend dining, though we save a select number of bar seats for walk-in guests each evening."
  },
  {
    question: "Is there a corkage fee for bringing our own wine?",
    answer: "Yes, our corkage fee is $35 per 750ml bottle, with a maximum of two bottles per table. We waive one corkage fee for every bottle purchased from our estate selection."
  },
  {
    question: "Do you have parking facilities?",
    answer: "Valet parking is available directly in front of the restaurant on Friday and Saturday evenings for a flat rate of $10. On weekdays, there is ample complimentary street parking along Larchmont Boulevard."
  }
];
