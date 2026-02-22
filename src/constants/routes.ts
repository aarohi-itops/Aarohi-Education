/**
 * Centralized Routes Configuration
 *
 * This file contains all the routes for the application.
 * Instead of typing URLs directly in components, import from this file.
 *
 * Benefits:
 * - Change a URL once, it updates everywhere
 * - Type-safe (no typos in route names)
 * - Easy to see all routes at a glance
 */

export const ROUTES = {
  // Main pages
  home: "/landing-page",
  aboutUs: "/about-us",
  faq: "/faq",
  admissionProcess: "/admission-process",

  // University pages
  universities: "/universities",
  universityDetail: (id: number) => `/universities/${id}`,
};
