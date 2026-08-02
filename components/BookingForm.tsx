"use client";

import { useState } from "react";

// Data destinasi & harga standar (untuk Avanza/Xenia)
const destinationPrices = [
  { id: 1, name: "Kuta / Legian / Seminyak", price: 250000 },
  { id: 2, name: "Sanur / Denpasar", price: 250000 },
  { id: 3, name: "Jimbaran / Nusa Dua", price: 300000 },
  { id: 4, name: "Ubud Center", price: 350000 },
  { id: 5, name: "Canggu / Pererenan", price: 350000 },
  { id: 6, name: "Uluwatu / Pecatu", price: 350000 },
  { id: 7, name: "Tanah Lot", price: 400000 },
  { id: 8, name: "Kintamani / Batur", price: 700000 },
  { id: 9, name: "Bedugul / Jatiluwih", price: 550000 },
  { id: 10, name: "Amed / Tulamben", price: 750000 },
  { id: 11, name: "Lovina / Singaraja", price: 750000 },
  { id: 12, name: "Pemuteran / Menjangan", price: 850000 },
];

// Opsi Armada Kendaraan
const vehicleOptions = [
  { id: "avanza", name: "Toyota Avanza / Xenia (Standard - Max 4 Pax)", type: "standard", baseMultiplier: 1 },
  { id: "innova", name: "Toyota Innova Reborn / Zenix (Premium - Max 5 Pax)", type: "whatsapp", baseMultiplier: 0 },
  { id: "hiace", name: "Toyota Hiace Commuter (Minibus - Max 12 Pax)", type: "whatsapp", baseMultiplier: 0 },
];

type FormData = {
  pickup: string;
  flightNumber: string;
  destination: string;
  customDestination: string;
  selectedVehicle: string;
  basePrice: number; // Harga dasar dari destinasi
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
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState<FormData>({
    pickup: "Ngurah Rai International Airport (DPS)",
    flightNumber: "",
    destination: "",
    customDestination: "",
    selectedVehicle: "avanza",
    basePrice: 0,
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
    setErrorMessage("");
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // Cek apakah kendaraan yang dipilih mengharuskan konfirmasi via WhatsApp
  const isWhatsAppVehicle = form.selectedVehicle === "innova" || form.selectedVehicle === "hiace";

  // Membersihkan nomor WhatsApp dari spasi dan angka 0 di depan
  const cleanNumber = form.whatsappNumber.replace(/^0+/, "").replace(/\s/g, "");
  const whatsapp = `${form.whatsappCountry}${cleanNumber}`;

  // Validasi per step sebelum lanjut
  function validateCurrentStep(): boolean {
    setErrorMessage("");

    if (step === 1) {
      if (!form.destination) {
        setErrorMessage("Silakan pilih area tujuan utama (Main Destination).");
        return false;
      }
      if (!form.date) {
        setErrorMessage("Silakan pilih tanggal penjemputan (Date).");
        return false;
      }
      if (!form.time) {
        setErrorMessage("Silakan pilih jam penjemputan (Time).");
        return false;
      }
    }

    if (step === 2) {
      if (form.adults < 1) {
        setErrorMessage("Jumlah penumpang dewasa minimal 1 orang.");
        return false;
      }
    }

    if (step === 3) {
      if (!form.firstName.trim()) {
        setErrorMessage("Silakan isi nama depan kamu (First Name).");
        return false;
      }
      if (!form.whatsappNumber.trim()) {
        setErrorMessage("Silakan isi nomor WhatsApp kamu.");
        return false;
      }
    }

    return true;
  }

  function handleNext() {
    if (validateCurrentStep()) {
      setStep((prev) => prev + 1);
    }
  }

  function handleBack() {
    setErrorMessage("");
    setStep((prev) => prev - 1);
  }

  function sendWhatsApp() {
    if (!validateCurrentStep()) return;

    const destination = form.customDestination
      ? `${form.destination} (${form.customDestination})`
      : form.destination;

    const vehicleName = vehicleOptions.find(v => v.id === form.selectedVehicle)?.name || "Toyota Avanza";

    const priceText = !isWhatsAppVehicle && form.basePrice > 0
      ? `IDR ${form.basePrice.toLocaleString("id-ID")}`
      : "Confirm via WhatsApp";

    const message = `*NEW BOOKING - BALI AIRPORT TRANSFER*

*Trip Details:*
Pickup: ${form.pickup}
Destination: ${destination}
Vehicle: ${vehicleName}
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
Email: ${form.email || "-"}

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
    <section id="booking" className="mx-auto w-full max-w-4xl overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-2xl transition-all">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 px-6 py-6 text-white sm:px-10 sm:py-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Book Your Bali Transfer
        </h2>
        <p className="mt-2 text-sm text-blue-200 sm:text-base">
          Private airport transfer with instant WhatsApp confirmation & professional driver.
        </p>
      </div>

      {/* STEP MENU */}
      <div className="grid grid-cols-4 gap-2 border-b border-gray-100 bg-gray-50/50 px-4 py-4 text-center text-xs font-semibold text-slate-400 sm:px-8 sm:text-sm">
        <div className={`transition-colors ${step >= 1 ? "text-blue-600 font-bold" : ""}`}>1. Trip & Vehicle</div>
        <div className={`transition-colors ${step >= 2 ? "text-blue-600 font-bold" : ""}`}>2. Passenger</div>
        <div className={`transition-colors ${step >= 3 ? "text-blue-600 font-bold" : ""}`}>3. Contact</div>
        <div className={`transition-colors ${step >= 4 ? "text-blue-600 font-bold" : ""}`}>4. Summary</div>
      </div>

      {/* STEP 1: TRIP DETAILS & VEHICLE */}
      {step === 1 && (
        <div className="p-6 sm:p-10 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-b pb-3">Trip & Vehicle Details</h3>

          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Arrival Airport</label>
              <input
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                value={form.pickup}
                onChange={(e) => updateField("pickup", e.target.value)}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Flight Number</label>
              <input
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Example: GA123 (Opsional)"
                value={form.flightNumber}
                onChange={(e) => updateField("flightNumber", e.target.value)}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Main Destination *</label>
              <select
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
                value={form.destination}
                onChange={(e) => {
                  const selected = destinationPrices.find((item) => item.name === e.target.value);
                  updateField("destination", selected?.name || "");
                  updateField("basePrice", selected?.price || 0);
                }}
              >
                <option value="">Select Area Destination</option>
                {destinationPrices.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Specific Location (Hotel/Villa Name)</label>
              <input
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Example: The Legian Seminyak / Villa Address"
                value={form.customDestination}
                onChange={(e) => updateField("customDestination", e.target.value)}
              />
            </div>

            {/* PILIHAN ARMADA */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Choose Vehicle *</label>
              <select
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer font-medium text-slate-800"
                value={form.selectedVehicle}
                onChange={(e) => updateField("selectedVehicle", e.target.value)}
              >
                {vehicleOptions.map((v) => (
                  <option key={v.id} value={v.id}>{v.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Date *</label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
                  value={form.date}
                  onChange={(e) => updateField("date", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Time *</label>
                <input
                  type="time"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
                  value={form.time}
                  onChange={(e) => updateField("time", e.target.value)}
                />
              </div>
            </div>

            {/* PRICE CARD DINAMIS */}
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center border border-blue-100 shadow-inner">
              <p className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-1">Estimated Transfer Price</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-950">
                {isWhatsAppVehicle
                  ? "Confirm via WhatsApp"
                  : form.basePrice > 0
                  ? `IDR ${form.basePrice.toLocaleString("id-ID")}`
                  : "Select destination"}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                {isWhatsAppVehicle 
                  ? "✨ Premium vehicle selected. Chat with our team for the best live rate."
                  : "Fixed price • No hidden fees • Pay directly to driver upon arrival."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: PASSENGER DETAILS */}
      {step === 2 && (
        <div className="p-6 sm:p-10 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-b pb-3">Passenger & Luggage</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Adults *</label>
              <input
                type="number"
                min="1"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                value={form.adults}
                onChange={(e) => updateField("adults", Number(e.target.value))}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Children</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                value={form.children}
                onChange={(e) => updateField("children", Number(e.target.value))}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Luggage Count</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                value={form.luggage}
                onChange={(e) => updateField("luggage", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col justify-center pt-2 sm:pt-6">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3.5 transition hover:bg-gray-100">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  checked={form.childSeat}
                  onChange={(e) => updateField("childSeat", e.target.checked)}
                />
                <span className="text-sm font-semibold text-slate-700">Add Child Seat (+Rp 50k / Optional)</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: CONTACT DETAILS */}
      {step === 3 && (
        <div className="p-6 sm:p-10 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-b pb-3">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">First Name *</label>
                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                  placeholder="John"
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">Last Name</label>
                <input
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">WhatsApp Number *</label>
              <div className="flex gap-2">
                <input
                  className="w-24 rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm font-semibold text-center focus:border-blue-500 focus:bg-white focus:outline-none"
                  value={form.whatsappCountry}
                  onChange={(e) => updateField("whatsappCountry", e.target.value)}
                  placeholder="+62"
                />
                <input
                  type="tel"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                  value={form.whatsappNumber}
                  onChange={(e) => updateField("whatsappNumber", e.target.value)}
                  placeholder="81234567890"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Email Address (Optional)</label>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Special Request / Notes (Optional)</label>
              <textarea
                rows={3}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm focus:border-blue-500 focus:bg-white focus:outline-none"
                value={form.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                placeholder="Any special requirements or flight notes..."
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: SUMMARY */}
      {step === 4 && (
        <div className="p-6 sm:p-10 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-b pb-3">Booking Summary</h3>
          
          <div className="space-y-3 rounded-2xl border border-gray-100 bg-slate-50 p-6 text-sm text-slate-700">
            <div className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="font-semibold text-slate-500">Route</span>
              <span className="text-right font-medium">{form.pickup} <br/>to<br/> {form.customDestination ? `${form.destination} (${form.customDestination})` : form.destination || "-"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="font-semibold text-slate-500">Vehicle Type</span>
              <span className="text-right font-medium text-blue-900">{vehicleOptions.find(v => v.id === form.selectedVehicle)?.name}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="font-semibold text-slate-500">Date & Time</span>
              <span className="text-right font-medium">{form.date || "-"} at {form.time || "-"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="font-semibold text-slate-500">Flight Number</span>
              <span className="text-right font-medium">{form.flightNumber || "-"}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="font-semibold text-slate-500">Passengers & Luggage</span>
              <span className="text-right font-medium">{form.adults} Adults, {form.children} Children, {form.luggage} Luggage</span>
            </div>
            <div className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="font-semibold text-slate-500">Contact</span>
              <span className="text-right font-medium">{form.firstName} {form.lastName} <br/> {whatsapp}</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-base font-bold text-slate-900">Total Price</span>
              <span className="text-xl font-extrabold text-blue-600">
                {isWhatsAppVehicle ? "Confirm via WhatsApp" : `IDR ${form.basePrice.toLocaleString("id-ID")}`}
              </span>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400">
            By clicking confirm, your trip details will be securely sent directly to our team via WhatsApp.
          </p>
        </div>
      )}

      {/* ERROR MESSAGE NOTIFICATION */}
      {errorMessage && (
        <div className="mx-6 mb-4 rounded-xl bg-red-50 p-3.5 text-center text-xs font-semibold text-red-600 border border-red-100 sm:mx-10 animate-shake">
          {errorMessage}
        </div>
      )}

      {/* NAVIGATION BUTTONS */}
      <div className="flex items-center justify-between bg-white px-6 py-5 border-t border-gray-100 sm:px-10">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-gray-50 active:scale-95"
          >
            Back
          </button>
        ) : (
          <div></div> 
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700 active:scale-95"
          >
            Next Step
          </button>
        ) : (
          <button
            type="button"
            onClick={sendWhatsApp}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-green-500/20 transition hover:bg-green-700 active:scale-95"
          >
            Confirm on WhatsApp 📱
          </button>
        )}
      </div>
    </section>
  );
}
