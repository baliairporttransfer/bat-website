"use client";

import { useState } from "react";
import { destinationPrices } from "@/data/prices";

type FormData = {
  pickup: string;
  flightNumber: string;
  destination: string;
  customDestination: string;
  price: number;
  date: string;
  time: string;
  adults: number;
  children: number;
  luggage: number;
  childSeat: boolean;
  firstName: string;
  lastName: string;
  whatsappCountry: string;
  whatsappNumber: string;
  email: string;
  notes: string;
};

export function BookingForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState<FormData>({
    pickup: "Ngurah Rai International Airport (DPS)",
    flightNumber: "",
    destination: "",
    customDestination: "",
    price: 0,
    date: "",
    time: "",
    adults: 1,
    children: 0,
    luggage: 1,
    childSeat: false,
    firstName: "",
    lastName: "",
    whatsappCountry: "+62",
    whatsappNumber: "",
    email: "",
    notes: "",
  });

  function updateField(field: keyof FormData, value: string | number | boolean) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const whatsapp = `${form.whatsappCountry}${form.whatsappNumber}`.replace(/\s/g, "");

  function sendWhatsApp() {
    const destination = form.customDestination
      ? `${form.destination} (${form.customDestination})`
      : form.destination;

    const priceText =
      form.price > 0
        ? `IDR ${form.price.toLocaleString("id-ID")}`
        : "Price confirmed via WhatsApp";

    const message = `*NEW BOOKING - BALI AIRPORT TRANSFER*

*Trip Details:*
Pickup: ${form.pickup}
Destination: ${destination}
Date: ${form.date}
Time: ${form.time}

*Flight Info:*
Flight Number: ${form.flightNumber || "-"}

*Passenger Details:*
Adults: ${form.adults}
Children: ${form.children}
Luggage: ${form.luggage}
Child Seat: ${form.childSeat ? "Yes" : "No"}

*Customer Contact:*
Name: ${form.firstName} ${form.lastName}
WhatsApp: ${whatsapp}
Email: ${form.email}

*Notes/Special Request:*
${form.notes || "-"}

*Estimated Price:*
${priceText}

Please confirm my booking. Thank you.`;

    window.open(
      `https://wa.me/6285738217365?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <section className="mx-auto w-full max-w-4xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl">
      {/* HEADER */}
      <div className="bg-blue-950 px-6 py-6 text-white sm:px-10 sm:py-8">
        <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
          Book Your Bali Transfer
        </h1>
        <p className="mt-2 text-sm text-gray-300 sm:text-base">
          Private airport transfer with instant WhatsApp confirmation
        </p>
      </div>

      {/* STEP MENU */}
      <div className="grid grid-cols-4 gap-2 border-b border-gray-100 px-4 py-4 text-center text-xs font-semibold text-slate-400 sm:px-8 sm:text-sm">
        <div className={step >= 1 ? "text-blue-600" : ""}>1. Trip</div>
        <div className={step >= 2 ? "text-blue-600" : ""}>2. Passenger</div>
        <div className={step >= 3 ? "text-blue-600" : ""}>3. Contact</div>
        <div className={step >= 4 ? "text-blue-600" : ""}>4. Summary</div>
      </div>

      {/* STEP 1: TRIP DETAILS */}
      {step === 1 && (
        <div className="p-6 sm:p-10">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Trip Details</h2>

          <div className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Arrival Airport</label>
              <input
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={form.pickup}
                onChange={(e) => updateField("pickup", e.target.value)}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Flight Number</label>
              <input
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Example: GA123"
                value={form.flightNumber}
                onChange={(e) => updateField("flightNumber", e.target.value)}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Main Destination</label>
              <select
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={form.destination}
                onChange={(e) => {
                  const selected = destinationPrices.find((item) => item.name === e.target.value);
                  updateField("destination", selected?.name || "");
                  updateField("price", selected?.price || 0);
                }}
              >
                <option value="">Select Area Destination</option>
                {destinationPrices.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Specific Location (Hotel/Villa)</label>
              <input
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Hotel name or villa address"
                value={form.customDestination}
                onChange={(e) => updateField("customDestination", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Date</label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={form.date}
                  onChange={(e) => updateField("date", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Time</label>
                <input
                  type="time"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={form.time}
                  onChange={(e) => updateField("time", e.target.value)}
                />
              </div>
            </div>

            {/* PRICE CARD */}
            <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-center border border-blue-100">
              <p className="text-sm font-medium text-blue-800">Estimated Transfer Price</p>
              <p className="mt-1 text-3xl font-bold text-blue-950">
                {form.price > 0
                  ? `IDR ${form.price.toLocaleString("id-ID")}`
                  : form.destination
                  ? "Price via WhatsApp"
                  : "Select destination"}
              </p>
              <p className="mt-1 text-xs text-blue-700">Fixed price • No hidden fees • Pay directly to driver</p>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: PASSENGER DETAILS */}
      {step === 2 && (
        <div className="p-6 sm:p-10">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Passenger & Luggage</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Adults</label>
              <input
                type="number"
                min="1"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                value={form.adults}
                onChange={(e) => updateField("adults", Number(e.target.value))}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Children</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                value={form.children}
                onChange={(e) => updateField("children", Number(e.target.value))}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Luggage</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                value={form.luggage}
                onChange={(e) => updateField("luggage", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col justify-center pt-6">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={form.childSeat}
                  onChange={(e) => updateField("childSeat", e.target.checked)}
                />
                <span className="text-sm font-semibold text-slate-700">Add Child Seat</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: CONTACT DETAILS */}
      {step === 3 && (
        <div className="p-6 sm:p-10">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Contact Information</h2>
          
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">First Name</label>
                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Last Name</label>
                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">WhatsApp Number</label>
              <div className="flex gap-2">
                <input
                  className="w-24 rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                  value={form.whatsappCountry}
                  onChange={(e) => updateField("whatsappCountry", e.target.value)}
                  placeholder="+62"
                />
                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                  value={form.whatsappNumber}
                  onChange={(e) => updateField("whatsappNumber", e.target.value)}
                  placeholder="81234567890"
                  type="tel"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Special Request / Notes (Optional)</label>
              <textarea
                rows={3}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:outline-none"
                value={form.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                placeholder="Any special requirements?"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: SUMMARY */}
      {step === 4 && (
        <div className="p-6 sm:p-10">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Booking Summary</h2>
          
          <div className="space-y-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-sm text-slate-700">
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold">Route</span>
              <span className="text-right">{form.pickup} <br/> to <br/> {form.customDestination ? `${form.destination} (${form.customDestination})` : form.destination || "-"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold">Date & Time</span>
              <span className="text-right">{form.date || "-"} at {form.time || "-"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold">Flight Number</span>
              <span className="text-right">{form.flightNumber || "-"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold">Passengers</span>
              <span className="text-right">{form.adults} Adults, {form.children} Children</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold">Extras</span>
              <span className="text-right">{form.luggage} Luggage, {form.childSeat ? "1 Child Seat" : "No Child Seat"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="font-semibold">Contact</span>
              <span className="text-right">{form.firstName} {form.lastName} <br/> {whatsapp}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-lg font-bold text-slate-900">Total Price</span>
              <span className="text-lg font-bold text-blue-700">
                {form.price > 0 ? `IDR ${form.price.toLocaleString("id-ID")}` : "Via WhatsApp"}
              </span>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-gray-500">
            By confirming, you will be redirected to WhatsApp to finalize your booking directly with our team.
          </p>
        </div>
      )}

      {/* NAVIGATION BUTTONS */}
      <div className="flex items-center justify-between bg-white px-6 py-5 border-t border-gray-100 sm:px-10">
        {/* Tombol Back */}
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-gray-50 active:scale-95"
          >
            Back
          </button>
        ) : (
          <div></div> 
        )}

        {/* Tombol Next / Confirm */}
        {step < 4 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev + 1)}
            className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-95"
          >
            Next Step
          </button>
        ) : (
          <button
            type="button"
            onClick={sendWhatsApp}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-600 active:scale-95 sm:px-8"
          >
            Confirm on WhatsApp
          </button>
        )}
      </div>
    </section>
  );
}