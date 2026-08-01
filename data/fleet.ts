export type FleetItem = {
  name: string;
  category: string;
  passengers: string;
  luggage: string;
  description: string;
  image: string;
};

export const fleet: FleetItem[] = [
  {
    name: "Toyota Avanza / Xenia",
    category: "Standard Transfer",
    passengers: "1-4 Passengers",
    luggage: "2-3 Luggage",
    description: "Affordable and reliable airport transfer option for individuals, couples, and small families.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Toyota Innova / Similar",
    category: "Comfortable Transfer",
    passengers: "1-6 Passengers",
    luggage: "4-5 Luggage",
    description: "A spacious and comfortable vehicle choice for families and travelers who want extra comfort during their Bali journey.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Toyota Hiace / Similar",
    category: "Big Group Transfer",
    passengers: "7-14 Passengers",
    luggage: "Large Luggage",
    description: "Perfect for group travel, family holidays, corporate trips, and private tours across Bali.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
  },
];
