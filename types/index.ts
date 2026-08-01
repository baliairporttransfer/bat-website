export type ServiceType = "airport-transfer" | "hourly-charter";

export interface Destination {
  id: string;
  name: string;
  area: string;
  price: number;
  image: string;
  travelTime: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingValues {
  service: ServiceType;
  pickup: string;
  destination: string;
  hotel: string;
  date: string;
  time: string;
  flightNumber: string;
  adults: number;
  children: number;
  luggage: number;
  childSeat: boolean;
  hours: number;
  firstName: string;
  lastName: string;
  whatsapp: string;
  whatsappCountry: string;
  email: string;
  notes: string;
}
