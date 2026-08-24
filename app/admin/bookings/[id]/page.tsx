"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Booking {
  id: string;
  customerName: string;
  whatsapp: string;
  adults?: number;
  children?: number;
  passengers: number;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  destination: string;
  flightNumber?: string;
  arrivalTime?: string;
  hotel?: string;
  price: string;
  driverName?: string;
  vehicle?: string;
  notes?: string;
  status: string;
}

export default function BookingDetailPage() {
  const params = useParams();
  const id = String(params.id);

  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("bat_bookings");

    if (!saved) return;

    try {
      const parsed: Booking[] = JSON.parse(saved);

      const found = parsed.find((item) => item.id === id);

      if (found) {
        setBooking(found);
      }
    } catch (error) {
      console.error("Failed to load booking:", error);
    }
  }, [id]);

  if (!booking) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="mb-4 text-slate-400">
            Booking tidak ditemukan.
          </p>

          <Link
            href="/admin/bookings"
            className="text-sm text-amber-400 hover:underline"
          >
            ← Kembali ke Daftar Booking
          </Link>
        </div>
      </main>
    );
  }

  const totalPassengers =
    booking.passengers ||
    (booking.adults || 0) + (booking.children || 0);

  const handleSendWhatsApp = () => {
    const phone = booking.whatsapp.replace(/\D/g, "");

    const message = `Hello ${booking.customerName} 😊

Here is your Bali transfer booking information:

📅 Date: ${booking.pickupDate}
⏰ Pickup: ${booking.pickupTime}

📍 Pickup:
${booking.pickupLocation}

📍 Destination:
${booking.destination}

👥 Passengers: ${totalPassengers}

🚗 Driver:
${booking.driverName || "Assigned Driver"}

🚙 Vehicle:
${booking.vehicle || "Toyota Avanza"}

💰 Price:
${booking.price}

Status: ${booking.status}

${booking.notes ? `📝 Notes:\n${booking.notes}\n` : ""}
Thank you and see you in Bali! 😊`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-xl">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/admin/bookings"
            className="text-sm text-amber-400 hover:underline"
          >
            ← Back
          </Link>

          <button
            onClick={handleSendWhatsApp}
            className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
          >
            💬 WhatsApp
          </button>
        </div>

        {/* Itinerary */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

          {/* Header */}
          <div className="mb-6 border-b border-slate-800 pb-5 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-400">
              BALI AIRPORT TRANSFER
            </p>

            <h1 className="mt-2 text-xl font-bold text-white">
              {booking.customerName}
            </h1>

            <p className="mt-1 font-mono text-xs text-slate-500">
              {booking.id}
            </p>
          </div>

          {/* Date */}
          <div className="mb-6 rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Travel Date
            </p>

            <p className="mt-1 text-lg font-bold text-amber-400">
              {booking.pickupDate}
            </p>
          </div>

          {/* Route */}
          <div className="mb-6">
            <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">
              Transfer
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

              <div>
                <p className="text-[10px] uppercase text-slate-500">
                  Pickup
                </p>

                <p className="mt-1 font-semibold text-white">
                  {booking.pickupLocation}
                </p>

                <p className="mt-1 text-sm text-amber-400">
                  {booking.pickupTime}
                </p>
              </div>

              <div className="my-3 text-amber-500">
                ↓
              </div>

              <div>
                <p className="text-[10px] uppercase text-slate-500">
                  Destination
                </p>

                <p className="mt-1 font-semibold text-white">
                  {booking.destination}
                </p>
              </div>

            </div>
          </div>

          {/* Passenger */}
          <div className="mb-6 grid grid-cols-2 gap-4">

            <div>
              <p className="text-[10px] uppercase text-slate-500">
                Passengers
              </p>

              <p className="mt-1 font-semibold text-white">
                {totalPassengers}
              </p>

              {booking.adults !== undefined && (
                <p className="text-xs text-slate-500">
                  {booking.adults} adults
                  {booking.children
                    ? ` • ${booking.children} children`
                    : ""}
                </p>
              )}
            </div>

            <div>
              <p className="text-[10px] uppercase text-slate-500">
                WhatsApp
              </p>

              <p className="mt-1 text-sm text-white">
                {booking.whatsapp}
              </p>
            </div>

          </div>

          {/* Flight */}
          {(booking.flightNumber ||
            booking.arrivalTime ||
            booking.hotel) && (
            <div className="mb-6 rounded-xl border border-slate-800 bg-slate-950 p-4">

              <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">
                Flight & Accommodation
              </p>

              {booking.flightNumber && (
                <p className="text-sm text-white">
                  ✈️ Flight: {booking.flightNumber}
                </p>
              )}

              {booking.arrivalTime && (
                <p className="mt-1 text-sm text-slate-300">
                  Arrival: {booking.arrivalTime}
                </p>
              )}

              {booking.hotel && (
                <p className="mt-2 text-sm text-slate-300">
                  🏨 {booking.hotel}
                </p>
              )}

            </div>
          )}

          {/* Driver */}
          <div className="mb-6 grid grid-cols-2 gap-4">

            <div>
              <p className="text-[10px] uppercase text-slate-500">
                Driver
              </p>

              <p className="mt-1 font-semibold text-white">
                {booking.driverName || "Not Assigned"}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase text-slate-500">
                Vehicle
              </p>

              <p className="mt-1 font-semibold text-white">
                {booking.vehicle || "Toyota Avanza"}
              </p>
            </div>

          </div>

          {/* Price & Status */}
          <div className="mb-6 grid grid-cols-2 gap-4 border-t border-slate-800 pt-5">

            <div>
              <p className="text-[10px] uppercase text-slate-500">
                Price
              </p>

              <p className="mt-1 font-bold text-amber-400">
                {booking.price}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase text-slate-500">
                Status
              </p>

              <p className="mt-1 font-bold text-emerald-400">
                {booking.status}
              </p>
            </div>

          </div>

          {/* Notes */}
          {booking.notes && (
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="mb-2 text-[10px] uppercase tracking-wider text-slate-500">
                Notes
              </p>

              <p className="text-sm italic text-slate-300">
                {booking.notes}
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}