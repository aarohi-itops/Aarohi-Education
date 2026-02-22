"use client";

import React from "react";

type Props = {
  bookingId?: string; // e.g. cal_live_... or full cal.com path
  height?: number;
};

const CalEmbed: React.FC<Props> = ({ bookingId, height = 700 }) => {
  // Prefer an explicit public URL env var, then a public booking id env var,
  // then the passed prop. For client-side usage expose variables with NEXT_PUBLIC_.
  // Note: use direct `process.env.X` so Next.js inlines NEXT_PUBLIC_ vars at build time
  const publicUrl = process.env.NEXT_PUBLIC_CAL_URL;
  const publicBookingId = process.env.NEXT_PUBLIC_CAL_BOOKING_ID;

  const effective = bookingId || publicUrl || publicBookingId || "";

  // If effective looks like a full URL use it directly; otherwise build a cal.com path.
  const src = effective.startsWith("http")
    ? effective
    : effective
      ? `https://cal.com/${effective}`
      : "";

  // Debug logs to help verify which value is used to build the iframe src
  if (typeof window !== "undefined") {
    console.log("[CalEmbed] bookingId prop:", bookingId);

    console.log("[CalEmbed] NEXT_PUBLIC_CAL_URL:", publicUrl);

    console.log("[CalEmbed] NEXT_PUBLIC_CAL_BOOKING_ID:", publicBookingId);

    console.log("[CalEmbed] effective:", effective);

    console.log("[CalEmbed] iframe src:", src);
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full bg-white rounded-2xl overflow-hidden shadow">
          {src ? (
            <iframe
              src={src}
              title="Cal.com Booking"
              style={{ width: "100%", height: `${height}px`, border: "none" }}
              loading="lazy"
            />
          ) : (
            <div className="p-8 text-center text-sm text-gray-600">
              No Cal.com booking URL configured. Set{" "}
              <code>NEXT_PUBLIC_CAL_URL</code> or
              <code>NEXT_PUBLIC_CAL_BOOKING_ID</code> in your environment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalEmbed;
