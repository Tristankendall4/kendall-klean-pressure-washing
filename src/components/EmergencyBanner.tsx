'use client';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-4 px-4 md:py-6">
      <div className="container-custom flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-bold text-lg md:text-xl">🚨 Storm Damage Cleanup Available</p>
          <p className="text-red-100 text-sm">
            Emergency pressure washing & debris removal. Same-day service available.
          </p>
        </div>
        <a
          href="tel:+1-309-555-0100"
          className="bg-white text-red-600 font-bold px-4 py-2 rounded hover:bg-red-50 transition whitespace-nowrap text-sm md:text-base"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
