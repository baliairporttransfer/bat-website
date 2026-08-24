"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewBookingPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    customerName: "",
    whatsapp: "",
    adults: "2",
    children: "0",

    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    destination: "",

    flightNumber: "",
    arrivalTime: "",
    hotel: "",

    price: "",
    currency: "IDR",

    driverName: "",
    vehicle: "Toyota Avanza",

    notes: "",
    status: "Confirmed",
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId = `BAT-${form.pickupDate.replaceAll("-", "")}-${Math.floor(
      100 + Math.random() * 900
    )}`;

    const adults = Math.max(0, parseInt(form.adults) || 0);
    const children = Math.max(0, parseInt(form.children) || 0);
    const totalPassengers = adults + children;

    const newBooking = {
      id: newId,

      customerName: form.customerName,
      whatsapp: form.whatsapp,

      adults,
      children,
      passengers: totalPassengers,

      pickupDate: form.pickupDate,
      pickupTime: form.pickupTime,
      pickupLocation: form.pickupLocation,
      destination: form.destination,

      flightNumber: form.flightNumber,
      arrivalTime: form.arrivalTime,
      hotel: form.hotel,

      price: `${form.currency} ${form.price}`,
      currency: form.currency,

      driverName: form.driverName,
      vehicle: form.vehicle,

      notes: form.notes,
      status: form.status,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("bat_bookings") || "[]"
      );

      localStorage.setItem(
        "bat_bookings",
        JSON.stringify([newBooking, ...existing])
      );

      alert("Booking berhasil disimpan!");

      router.push("/admin/bookings");
    } catch (error) {
      console.error("Failed to save booking:", error);
      alert("Booking gagal disimpan. Silakan coba lagi.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl md:p-8">

          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h1 className="text-xl font-bold text-white">
                Add New Booking
              </h1>

              <p className="mt-1 text-xs text-slate-500">
                Tambahkan booking customer dari WhatsApp
              </p>
            </div>

            <Link
              href="/admin/bookings"
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕ Cancel
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">

            {/* CUSTOMER */}
            <section>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
                Customer Information
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={form.customerName}
                    onChange={(e) =>
                      updateField("customerName", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="Ms Liz Eden"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    WhatsApp Number
                  </label>

                  <input
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={(e) =>
                      updateField("whatsapp", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="+628123456789"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Adults
                  </label>

                  <input
                    type="number"
                    min="0"
                    required
                    value={form.adults}
                    onChange={(e) =>
                      updateField("adults", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Children
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={form.children}
                    onChange={(e) =>
                      updateField("children", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </section>

            {/* TRIP */}
            <section>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
                Trip Information
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Pickup Date
                  </label>

                  <input
                    type="date"
                    required
                    value={form.pickupDate}
                    onChange={(e) =>
                      updateField("pickupDate", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Pickup Time
                  </label>

                  <input
                    type="time"
                    required
                    value={form.pickupTime}
                    onChange={(e) =>
                      updateField("pickupTime", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Pickup Location
                  </label>

                  <input
                    type="text"
                    required
                    value={form.pickupLocation}
                    onChange={(e) =>
                      updateField("pickupLocation", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="Amed Hotel"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Destination
                  </label>

                  <input
                    type="text"
                    required
                    value={form.destination}
                    onChange={(e) =>
                      updateField("destination", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="Canggu"
                  />
                </div>
              </div>
            </section>

            {/* FLIGHT & HOTEL */}
            <section>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
                Flight & Accommodation
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Flight Number
                  </label>

                  <input
                    type="text"
                    value={form.flightNumber}
                    onChange={(e) =>
                      updateField("flightNumber", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="JQ57"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Arrival Time
                  </label>

                  <input
                    type="time"
                    value={form.arrivalTime}
                    onChange={(e) =>
                      updateField("arrivalTime", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-xs text-slate-400">
                    Hotel / Accommodation
                  </label>

                  <input
                    type="text"
                    value={form.hotel}
                    onChange={(e) =>
                      updateField("hotel", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="The Payogan Resort & Spa"
                  />
                </div>
              </div>
            </section>

            {/* PAYMENT & DRIVER */}
            <section>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
                Payment & Driver
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Price
                  </label>

                  <input
                    type="text"
                    required
                    value={form.price}
                    onChange={(e) =>
                      updateField("price", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="700,000"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Driver Name
                  </label>

                  <input
                    type="text"
                    value={form.driverName}
                    onChange={(e) =>
                      updateField("driverName", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="Made Adi"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Vehicle
                  </label>

                  <input
                    type="text"
                    value={form.vehicle}
                    onChange={(e) =>
                      updateField("vehicle", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                    placeholder="Toyota Avanza"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-400">
                    Status
                  </label>

                  <select
                    value={form.status}
                    onChange={(e) =>
                      updateField("status", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none focus:border-amber-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </section>

            {/* NOTES */}
            <section>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
                Notes
              </h2>

              <textarea
                value={form.notes}
                onChange={(e) =>
                  updateField("notes", e.target.value)
                }
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-white outline-none focus:border-amber-500"
                placeholder="Special requests, route notes, customer information..."
              />
            </section>

            {/* BUTTONS */}
            <div className="flex gap-3 border-t border-slate-800 pt-5">

              <button
                type="submit"
                className="flex-1 rounded-xl bg-amber-500 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-600"
              >
                Save Booking
              </button>

              <Link
                href="/admin/bookings"
                className="rounded-xl bg-slate-800 px-5 py-3 text-center font-semibold text-slate-300 transition hover:bg-slate-700"
              >
                Cancel
              </Link>

            </div>
          </form>
        </div>
      </div>
    </main>
  );
}