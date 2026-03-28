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
function applyGlobalBranding() {
  const c = MASTER_CONFIG;
  const root = document.documentElement;

  // 1. Inject Colors into CSS Variables
  root.style.setProperty('--primary', c.theme.primary);
  root.style.setProperty('--accent', c.theme.accent);
  root.style.setProperty('--bg-app', c.theme.bg);
  root.style.setProperty('--text-main', c.theme.text);

  // 2. Update Browser Tab Title
  document.title = `${c.brandName} | Manage`;

  // 3. Update Text Content (Brand Name & User Type)
  document.querySelectorAll('.inject-brand').forEach(el => el.innerText = c.brandName);
  document.querySelectorAll('.inject-user').forEach(el => el.innerText = c.labels.user);
}

// Run this as soon as the page is ready
window.addEventListener('DOMContentLoaded', applyGlobalBranding);
