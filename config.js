const MASTER_CONFIG = {
  // --- CLIENT IDENTITY ---
  brandName: "Sufiyan Hair Studio",
  metaTitle: "Sufiyan | Premium Men's Grooming",
  favicon: "https://your-link.com/salon.ico",
  
  // --- THEME ENGINE ---
  theme: {
    primary: "#000000",   // Brand Color
    accent: "#f59e0b",    // Highlight Color
    mode: "DARK"          // Options: "LIGHT" or "DARK"
  },

  // --- NICHE TERMINOLOGY ---
  labels: {
    user: "Client",       // vs "Patient"
    action: "Booking",     // vs "Appointment"
    service: "Style"       // vs "Treatment"
  },

  // --- PRICING & SERVICES ---
  services: [
    { name: "Classic Cut", price: "₹250" },
    { name: "Beard Trim", price: "150" }
  ],

  // --- API BACKEND ---
  gasUrl: "YOUR_GOOGLE_APPS_SCRIPT_URL"
};
