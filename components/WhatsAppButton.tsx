"use client";

export default function WhatsAppButton() {
  const phone = "6285738217365";

    const message =
        "Hello Bali Airport Transfer, I would like to ask about airport transfer.";

          const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            return (
                <a
                      href={url}
                            target="_blank"
                                  rel="noopener noreferrer"
                                        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-6 py-4 text-white font-semibold shadow-lg"
                                            >
                                                  <svg
                                                          width="26"
                                                                  height="26"
                                                                          viewBox="0 0 24 24"
                                                                                  fill="currentColor"
                                                                                        >
                                                                                                <path d="M12.04 2C6.58 2 2.14 6.1 2.14 11.15c0 1.97.66 3.79 1.78 5.26L2 22l5.8-1.84c1.28.69 2.76 1.08 4.24 1.08 5.46 0 9.9-4.1 9.9-9.15S17.5 2 12.04 2zm0 16.75c-1.33 0-2.64-.35-3.77-1.02l-.27-.16-3.44 1.09 1.1-3.17-.18-.29a6.8 6.8 0 0 1-1.08-3.65c0-3.75 3.42-6.8 7.64-6.8s7.64 3.05 7.64 6.8-3.42 7.2-7.64 7.2z"/>
                                                                                                      </svg>

                                                                                                            WhatsApp
                                                                                                                </a>
                                                                                                                  );
                                                                                                                  }