"use client";

export default function WhatsAppButton() {
  const phone = "6285738217365";
  
  // Pesan otomatis yang akan langsung terisi saat WhatsApp terbuka
  const message = "Hello Bali Airport Transfer, I would like to ask about airport transfer availability, prices, or custom route details. Can you help me?";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Balon Tulisan Kecil di Samping Tombol (Menarik Perhatian Pengunjung) */}
      <div className="hidden sm:block bg-white text-slate-800 text-xs font-medium px-3.5 py-2 rounded-2xl shadow-lg border border-gray-100 opacity-90 group-hover:opacity-100 transition-opacity">
        💬 Chat with us for booking!
      </div>

      {/* Tombol Utama WhatsApp dengan Efek Denyut */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        {/* Lingkaran Animasi Denyut / Berkedip Halus */}
        <span className="absolute -inset-1 rounded-full bg-green-400 opacity-75 animate-ping pointer-events-none"></span>

        {/* Ikon WhatsApp SVG */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10"
        >
          <path d="M12.04 2C6.58 2 2.14 6.1 2.14 11.15c0 1.97.66 3.79 1.78 5.26L2 22l5.8-1.84c1.28.69 2.76 1.08 4.24 1.08 5.46 0 9.9-4.1 9.9-9.15S17.5 2 12.04 2zm0 16.75c-1.33 0-2.64-.35-3.77-1.02l-.27-.16-3.44 1.09 1.1-3.17-.18-.29a6.8 6.8 0 0 1-1.08-3.65c0-3.75 3.42-6.8 7.64-6.8s7.64 3.05 7.64 6.8-3.42 7.2-7.64 7.2z"/>
        </svg>
      </a>
    </div>
  );
}
