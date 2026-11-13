export type SprintKey =
  | "business-strategy"
  | "strategic-brand"
  | "innovation-productivity"
  | "market-readiness"
  | "franchise-licensing";

export const LOCKED_CALENDAR_URLS: Record<SprintKey, string> = {
  "business-strategy":
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ06H3HVfxJ_qIDCDbf-kOxlt7ufKnq0lLsBwSDvnJ_sIkgaNV5_0cjxSDnw4p7iPWtsvR2kHfnw?gv=true",
  "strategic-brand":
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1KtH1PGLFwfzWLr0MYr_Q9O4FLI78uRKX8FpNv0Z7A-NHMgYz2aPOT841cBzNPM8CquHvgBeAV?gv=true",
  "innovation-productivity":
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3qr3SmjWpxiA6xfoBwO1uTYv4_dX4UkWMSWHn-yY2Z5X-EsSVJiiNeFfvowWLuxBrK0kLJYrTi?gv=true",
  "market-readiness":
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2bP4LZ2IUL4kFaw3NW0IYE78GyJIplsadYgcYz4hTWFTVirByvmt9n9rH47vM0W39IbCZqyZJw?gv=true",
  "franchise-licensing":
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ10AGX_rEknl0J6WvWhScBFx2JXg6UZ0IKZIgHP7-sHFa0gy2WM_1KUR5eVStUACnbWx356zhbB?gv=true",
};

export const SPRINT_OPTIONS: { value: SprintKey; label: string }[] = [
  { value: "business-strategy", label: "Business Strategy & Sustainability Sprint" },
  { value: "strategic-brand", label: "Brand Strategy Sprint" },
  { value: "innovation-productivity", label: "Innovation & AI Digitalisation Sprint" },
  { value: "market-readiness", label: "Internationalisation & Market Entry Sprint" },
  { value: "franchise-licensing", label: "Franchise & IP Strategy Sprint" },
];

