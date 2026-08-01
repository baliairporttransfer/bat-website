import type { BookingValues } from "@/types";
import { SITE_CONFIG } from "@/lib/constants";
import { formatIDR } from "@/lib/utils";

export function createWhatsAppUrl(values: BookingValues, total: number): string {
  const passengerName = `${values.firstName} ${values.lastName}`.trim();
    const serviceName = values.service === "airport-transfer" ? "Airport Transfer" : "Hourly Charter";

      const message = [
          "Hello BAT,",
              "",
                  `I would like to book a ${serviceName}.`,
                      "",
                          `Service: ${serviceName}`,
                              `Pickup: ${values.pickup}`,
                                  `Destination: ${values.destination || "To be confirmed"}`,
                                      `Hotel / Villa: ${values.hotel || "-"}`,
                                          `Date: ${values.date}`,
                                              `Time: ${values.time}`,
                                                  `Flight Number: ${values.flightNumber || "-"}`,
                                                      ...(values.service === "hourly-charter" ? [`Charter Duration: ${values.hours} hours`] : []),
                                                          "",
                                                              `Adults: ${values.adults}`,
                                                                  `Children: ${values.children}`,
                                                                      `Luggage: ${values.luggage}`,
                                                                          `Child Seat: ${values.childSeat ? "Yes" : "No"}`,
                                                                              "",
                                                                                  `Passenger Name: ${passengerName}`,
                                                                                      `WhatsApp: ${values.whatsapp}`,
                                                                                          `Email: ${values.email}`,
                                                                                              `Notes: ${values.notes || "-"}`,
                                                                                                  "",
                                                                                                      `Estimated Price: ${formatIDR(total)}`,
                                                                                                          "",
                                                                                                              "Please confirm my booking. Thank you.",
                                                                                                                ].join("\n");

                                                                                                                  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
                                                                                                                    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
                                                                                                                    }