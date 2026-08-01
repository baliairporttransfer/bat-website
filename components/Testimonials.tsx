import { Container } from "@/components/Container";

const reviews = [
  {
    id: 1,
    name: "Sophie M.",
    country: "Australia",
    text: "Our driver was already waiting when we landed, helped with every bag, and the car was spotless. A genuinely stress-free start to Bali.",
  },
  {
    id: 2,
    name: "Mark & Sarah",
    country: "United Kingdom",
    text: "Clear pricing, fast confirmation, and excellent communication via WhatsApp. Highly recommend Taxi Bali Munduk for our airport transfers!",
  },
  {
    id: 3,
    name: "David L.",
    country: "Singapore",
    text: "Very professional and safe driving. The car was very comfortable, air-conditioned, and the driver was incredibly polite.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#08142B] py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase">
            Guest Reviews
          </h2>
          {/* Warna teks ini dicerahkan menjadi text-gray-300 agar mudah dibaca */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
            Thoughtful service, clear communication, and a smooth first journey in Bali. 
            Trusted by over 1326+ customers on Google Business.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl bg-[#13223f] p-8 shadow-lg border border-white/5"
            >
              <div>
                <div className="flex text-[#D4AF37] mb-4">
                  ⭐⭐⭐⭐⭐
                </div>
                <blockquote className="text-gray-200 leading-relaxed">
                  "{review.text}"
                </blockquote>
              </div>
              <div className="mt-6">
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-gray-400">{review.country}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
