// data/harbourRoutes.ts

export interface RouteDetail {
  slug: string;
  title: string;
  from: string;
  fromPortName: string;
  to: string;
  price: string;
  priceUSD: string;
  duration: string;
  distance: string;
  description: string;
  routeHighlights: string[];
  pickupGuide: string;
  faqs: { question: string; answer: string }[];
}

export const harbourRoutesData: Record<string, RouteDetail> = {
  // ==========================================
  // 1. PADANGBAI HARBOUR ROUTES (EAST BALI)
  // ==========================================
  "padangbai-to-airport": {
    slug: "padangbai-to-airport",
    title: "Private Transfer Padangbai Harbour to Airport (DPS) / Kuta",
    from: "Padangbai Harbour",
    fromPortName: "Padangbai Fast Boat Port",
    to: "Ngurah Rai Airport (DPS) / Kuta Area",
    price: "IDR 500,000",
    priceUSD: "approx. $32 USD",
    duration: "1.5 Hours",
    distance: "approx. 56 km",
    description: "Direct door-to-door private transfer from Padangbai Fast Boat Harbour to Ngurah Rai International Airport or Kuta hotels.",
    routeHighlights: [
      "Fastest route via By Pass Ngurah Rai / Mandara Toll Road",
      "Flight monitoring by driver to ensure on-time arrival",
      "Air-conditioned private MPV vehicle with driver",
    ],
    pickupGuide: "Your driver will meet you at the Padangbai exit gate holding a sign with your name.",
    faqs: [
      {
        question: "Does the price include toll road fees?",
        answer: "Yes, all petrol, parking, driver fees, and highway toll fees are included.",
      },
    ],
  },
  "padangbai-to-ubud": {
    slug: "padangbai-to-ubud",
    title: "Private Transfer Padangbai Harbour to Ubud Centre",
    from: "Padangbai Harbour",
    fromPortName: "Padangbai Fast Boat Port",
    to: "Ubud Centre & Surrounding Villages",
    price: "IDR 350,000",
    priceUSD: "approx. $23 USD",
    duration: "1 - 1.5 Hours",
    distance: "approx. 42 km",
    description: "Get a stress-free private driver from Padangbai Harbour directly to your villa or hotel in Ubud.",
    routeHighlights: [
      "Shortest route from East Bali fast boat port to Central Bali",
      "Direct drop-off to Ubud Centre, Tegallalang, Penestanan, or Sayan",
    ],
    pickupGuide: "Your driver will be waiting at the Padangbai Harbour exit holding your name card.",
    faqs: [
      {
        question: "Is the price total or per person?",
        answer: "It is a fixed total price per vehicle (up to 4 passengers with luggage).",
      },
    ],
  },
  "padangbai-to-canggu": {
    slug: "padangbai-to-canggu",
    title: "Private Transfer Padangbai Harbour to Canggu & Pererenan",
    from: "Padangbai Harbour",
    fromPortName: "Padangbai Fast Boat Port",
    to: "Canggu, Batu Bolong, Berawa & Pererenan",
    price: "IDR 450,000",
    priceUSD: "approx. $29 USD",
    duration: "1.5 - 2 Hours",
    distance: "approx. 62 km",
    description: "Enjoy a smooth private transfer from Padangbai Harbour to Canggu beach resort area without hassles.",
    routeHighlights: [
      "Direct drop-off to Canggu, Berawa, or Pererenan",
      "Spacious MPV car with ample luggage space",
    ],
    pickupGuide: "Your private driver will wait at the main exit gate of Padangbai Harbour with your name board.",
    faqs: [
      {
        question: "Can we stop for an ATM or lunch on the way?",
        answer: "Yes, brief stops for lunch, supermarket, or ATM are welcome at no extra charge.",
      },
    ],
  },
  "padangbai-to-uluwatu": {
    slug: "padangbai-to-uluwatu",
    title: "Private Transfer Padangbai Harbour to Uluwatu & Ungasan",
    from: "Padangbai Harbour",
    fromPortName: "Padangbai Fast Boat Port",
    to: "Uluwatu, Ungasan, Bingin & Jimbaran",
    price: "IDR 500,000",
    priceUSD: "approx. $32 USD",
    duration: "2 Hours",
    distance: "approx. 70 km",
    description: "Direct private transfer from Padangbai Harbour to southern cliffside resorts in Uluwatu or Bingin.",
    routeHighlights: [
      "Direct highway route via Mandara Toll Road",
      "Coverage for all South Bukit Peninsula hotels and villas",
    ],
    pickupGuide: "Driver will hold a clear greeting sign with your name at the port arrival exit.",
    faqs: [
      {
        question: "Does it cover drop-off in Bingin or Padang Padang?",
        answer: "Yes, all areas in Uluwatu, Bingin, Pecatu, and Ungasan are included.",
      },
    ],
  },
  "padangbai-to-munduk": {
    slug: "padangbai-to-munduk",
    title: "Private Transfer Padangbai Harbour to Munduk Bali",
    from: "Padangbai Harbour",
    fromPortName: "Padangbai Fast Boat Port",
    to: "Munduk Village & Lake Region (North Bali)",
    price: "IDR 650,000",
    priceUSD: "approx. $42 USD",
    duration: "2.5 - 3 Hours",
    distance: "approx. 95 km",
    description: "Direct mountain route drive from Padangbai Port into Munduk highlands in North Bali.",
    routeHighlights: [
      "Scenic drive through central mountain region",
      "Pass by Lake Beratan and Twin Lakes",
    ],
    pickupGuide: "Driver will wait at the main arrival exit holding a display sign with your name.",
    faqs: [
      {
        question: "What if our fast boat is delayed?",
        answer: "No extra charge. We track boat arrivals and your driver will wait for you.",
      },
    ],
  },

  // ==========================================
  // 2. SANUR HARBOUR ROUTES (SOUTH-EAST BALI)
  // ==========================================
  "sanur-to-airport": {
    slug: "sanur-to-airport",
    title: "Private Transfer Sanur Harbour to Airport (DPS) / Kuta",
    from: "Sanur Harbour",
    fromPortName: "Matahari Terbit Sanur Port",
    to: "Ngurah Rai Airport (DPS) / Kuta Area",
    price: "IDR 250,000",
    priceUSD: "approx. $16 USD",
    duration: "30 - 45 Mins",
    distance: "approx. 16 km",
    description: "Quick and convenient private taxi transfer from Sanur harbour to Bali Ngurah Rai Airport or Kuta.",
    routeHighlights: [
      "Quickest way to airport via Mandara Toll Road",
      "Hassle-free pickup directly at Sanur port exit gate",
    ],
    pickupGuide: "Meet your driver at the designated greeting area at Sanur harbour main building.",
    faqs: [
      {
        question: "How long does it take from Sanur to airport?",
        answer: "It usually takes around 30 to 45 minutes via the toll road.",
      },
    ],
  },
  "sanur-to-ubud": {
    slug: "sanur-to-ubud",
    title: "Private Transfer Sanur Harbour to Ubud Centre",
    from: "Sanur Harbour",
    fromPortName: "Matahari Terbit Sanur Port",
    to: "Ubud Centre & Surrounding Areas",
    price: "IDR 350,000",
    priceUSD: "approx. $23 USD",
    duration: "1 Hour",
    distance: "approx. 25 km",
    description: "Direct private car service from Nusa Penida / Lembongan fast boat terminal in Sanur to Ubud.",
    routeHighlights: [
      "Direct route heading north to Central Bali",
      "Drop-off directly at your hotel or villa lobby",
    ],
    pickupGuide: "Your driver will display your name on a card at the main arrival terminal in Sanur.",
    faqs: [
      {
        question: "Does it cover hotels in Tegallalang?",
        answer: "Yes, drop-off outside central Ubud like Tegallalang or Payangan is included.",
      },
    ],
  },
  "sanur-to-canggu": {
    slug: "sanur-to-canggu",
    title: "Private Transfer Sanur Harbour to Canggu & Seminyak",
    from: "Sanur Harbour",
    fromPortName: "Matahari Terbit Sanur Port",
    to: "Canggu, Seminyak & Kerobokan",
    price: "IDR 350,000",
    priceUSD: "approx. $23 USD",
    duration: "1 Hour",
    distance: "approx. 22 km",
    description: "Comfortable private transfer from Sanur harbour across to Canggu and Seminyak beach towns.",
    routeHighlights: [
      "Direct ride across Sunset Road to west coast",
      "Clean air-conditioned car with private English driver",
    ],
    pickupGuide: "Look for your private driver at Sanur arrival gate holding a sign with your name.",
    faqs: [
      {
        question: "Is luggage space sufficient for 4 large bags?",
        answer: "Yes, our standard MPVs fit up to 4 passengers with standard large suitcases.",
      },
    ],
  },

  // ==========================================
  // 3. GILIMANUK HARBOUR ROUTES (WEST BALI)
  // ==========================================
  "gilimanuk-to-airport": {
    slug: "gilimanuk-to-airport",
    title: "Private Transfer Gilimanuk Harbour to Airport (DPS) / South Bali",
    from: "Gilimanuk Harbour",
    fromPortName: "Gilimanuk Ferry Port (West Bali)",
    to: "Ngurah Rai Airport (DPS), Kuta, Seminyak, Sanur",
    price: "IDR 750,000",
    priceUSD: "approx. $48 USD",
    duration: "3.5 - 4 Hours",
    distance: "approx. 135 km",
    description: "Long-distance private transfer service from Gilimanuk ferry terminal (Java crossing) to South Bali & Airport.",
    routeHighlights: [
      "Full island traverse along West Bali coastal road",
      "Stop anytime for rest, lunch, or coffee on long route",
    ],
    pickupGuide: "Your driver will park near Gilimanuk ferry exit gate with a greeting sign.",
    faqs: [
      {
        question: "How long is the journey from Gilimanuk to Airport?",
        answer: "It takes around 3.5 to 4 hours depending on traffic condition along Tabanan highway.",
      },
    ],
  },
  "gilimanuk-to-lovina": {
    slug: "gilimanuk-to-lovina",
    title: "Private Transfer Gilimanuk Harbour to Lovina / Pemuteran",
    from: "Gilimanuk Harbour",
    fromPortName: "Gilimanuk Ferry Port",
    to: "Pemuteran, Menjangan & Lovina Beach",
    price: "IDR 500,000",
    priceUSD: "approx. $32 USD",
    duration: "1.5 - 2 Hours",
    distance: "approx. 78 km",
    description: "North-coast drive from Gilimanuk ferry port to Pemuteran diving spot or Lovina beach.",
    routeHighlights: [
      "Pass through West Bali National Park",
      "Direct drop-off to Menjangan boat docks or Lovina resorts",
    ],
    pickupGuide: "Driver will wait at the Gilimanuk main passenger exit area holding your name sign.",
    faqs: [
      {
        question: "Does this route pass Pemuteran?",
        answer: "Yes, for Pemuteran area the rate is lower (IDR 300,000), while Lovina is IDR 500,000.",
      },
    ],
  },
};
