// "use client";

// import React, { useEffect } from "react";

// // This component initializes Cal.com's floating button using @calcom/embed-react.
// // Ensure you have installed the package: `npm install @calcom/embed-react`.

// type Props = {
//   calLink?: string; // e.g. 'pradip-lamsal-okxsgd/30min' or full cal.com path
//   namespace?: string; // optional namespace for getCalApi
//   config?: Record<string, unknown>;
// };

// const CalFloating: React.FC<Props> = ({
//   calLink,
//   namespace = "default",
//   config,
// }) => {
//   useEffect(() => {
//     let mounted = true;

//     (async () => {
//       try {
//         // Dynamically import so server bundles don't include this package
//         const mod = await import("@calcom/embed-react");

//         // `getCalApi` is the exported function from the package. Use `any` to avoid
//         // TypeScript type issues at runtime since we're importing dynamically.
//         const getCalApi = (mod as any).getCalApi as any;
//         const cal = await getCalApi({ namespace });

//         if (!mounted) return;

//         const envLink =
//           (typeof process !== "undefined" &&
//             (process.env.NEXT_PUBLIC_CAL_EMBED_LINK ||
//               process.env.NEXT_PUBLIC_CAL_URL)) ||
//           "";

//         const effectiveLink = (calLink || envLink || "").toString();

//         // Debug: show what we're about to use

//         console.log("[CalFloating] calLink prop:", calLink);

//         console.log("[CalFloating] env embed link:", envLink);

//         console.log("[CalFloating] effectiveLink:", effectiveLink);

//         if (!effectiveLink) {
//           console.warn("[CalFloating] calLink not provided or configured.");
//           return;
//         }

//         // If user supplied a raw Cal.com API key / booking id (cal_live_*), that
//         // is not a public cal link for the embed. Warn and bail with guidance.
//         if (
//           effectiveLink.startsWith("cal_live_") ||
//           /cal_live_/.test(effectiveLink)
//         ) {
//           console.error(
//             "[CalFloating] Received a Cal API key / booking id. The floating widget requires a public cal link such as 'username/event' or a full https://cal.com/... URL. Please set NEXT_PUBLIC_CAL_EMBED_LINK or pass a proper calLink prop.",
//           );
//           return;
//         }

//         // Now initialize the floating button
//         cal("floatingButton", {
//           calLink: effectiveLink,
//           config: config || {
//             layout: "month_view",
//             useSlotsViewOnSmallScreen: true,
//           },
//         });
//       } catch (err) {
//         console.error("[CalFloating] failed to initialize Cal embed:", err);
//       }
//     })();

//     return () => {
//       mounted = false;
//       try {
//         // try to remove floating button if API available
//         // @ts-ignore
//         if (typeof window !== "undefined" && (window as any).cal) {
//           // @ts-ignore
//           (window as any).cal("floatingButton", null);
//         }
//       } catch (e) {}
//     };
//   }, [calLink, config, namespace]);

//   return null;
// };

// export default CalFloating;
