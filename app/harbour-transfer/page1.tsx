import Link from "next/link";
import { Container } from "@/components/Container";

export default function HarbourTransferPage() {
  // Nomor WhatsApp tujuan (ganti atau sesuaikan jika perlu)
  const whatsappNumber = "6285738217365";

  const harbours = [
    {
      id: "padangbai",
      name: "Padangbai Harbour",
      icon: "🚢",
      description: "The main gateway for ferries and fast boats heading to Lombok, Gili Trawangan, and surrounding islands.",
      message: "Hello Bali Airport Transfer, I would like to book a Harbour Transfer from Padangbai Harbour. Could you please let me know the fixed price and availability?",
    },
    {
      id: "sanur",
      name: "Sanur Harbour",
      icon: "⛵",
      description: "The most popular fast boat port for quick sea transfers to Nusa Penida and Nusa Lembongan.",
      message: "Hello Bali Airport Transfer, I would like to book a Harbour Transfer from Sanur Harbour. Could you please let me know the fixed price and availability?",
    },
    {
      id: "gilimanuk",
      name: "Gilimanuk Harbour",
      icon: "⛴️",
      description: "The primary western Bali ferry port connecting Bali directly with Java Island (Ketapang).",
      message: "Hello Bali Airport Transfer, I would like to book a Harbour Transfer from Gilimanuk Harbour. Could you please let me know the fixed price and availability?",
    },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white flex flex-col justify-between selection:bg-yellow-500 selection:text-black">
      {/* HEADER / SIMPLE NAVBAR */}
      <header className="border-b border-white/10 py-4">
        <Container className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-wider">BAT</span>
            <span className="text-xs text-gray-400 hidden sm:inline">| Bali Airport Transfer</span>
          </Link>
          <Link 
            href="/" 
            className="text-sm text-gray-300 hover:text-yellow-400 transition-colors"
          >
            &larr; Back to Home
          </Link>
        </Container>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow py-12 px-4">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20 font-medium">
              Select Your Port
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-3 tracking-tight">
              Harbour Transfer Across Bali
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Choose your crossing port to connect instantly with our team via WhatsApp for quick quotations, routes, and professional English-speaking drivers.
            </p>
          </div>

          {/* HARBOUR GRID CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {harbours.map((harbour) => {
              const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(harbour.message)}`;
              return (
                <a 
                  key={harbour.id}
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-navy-800/60 border border-white/10 hover:border-yellow-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-4xl mb-4 p-3 bg-white/5 w-fit rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
                      {harbour.icon}
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                      {harbour.name}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {harbour.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm font-semibold text-yellow-500">
                    <span>Book via WhatsApp</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </a>
              );
            })}
          </div>
        </Container>
      </main>

      {/* FOOTER */}
      <footer className="py-6 border-t border-white/10 text-center text-xs text-gray-500">
        <Container>
          &copy; {new Date().getFullYear()} Bali Airport Transfer. Safe, Reliable, Comfortable.
        </Container>
      </footer>
    </div>
  );
}
