// ============================================================
//  AGENCY ENGINE v2.0 — Redefine Dental Clinic / Kalyan West
//  Edit MASTER_CONFIG only. Everything else is automatic.
// ============================================================

const MASTER_CONFIG = {

  // --- CLIENT IDENTITY ---
  brandName:  "Redefine Dental Clinic",           
  metaTitle:  "Redefine Dental Clinic | Dr. Gautam Shetty | Kalyan West",
  favicon:    "favicon.ico", // Ensure you have a relevant icon file

  // --- THEME ENGINE ---
  theme: {
    primary:  "#B8860B",   // Dark Goldenrod (Premium Medical Look)
    accent:   "#002366",   // Royal Blue (Trust & Professionalism)
    bg:       "#ffffff",   
    text:     "#1a1a1a",   
    mode:     "LIGHT"      
  },

  // --- NICHE TERMINOLOGY ---
  labels: {
    user:    "Patient",      
    action:  "Appointment",  
    service: "Treatment"     
  },

  // --- SERVICES / PRICING (Sourced from Clinic Data) ---
  services: [
    { name: "Microscope Root Canal (RCT)", price: "Specialist Rate" },
    { name: "Professional Teeth Cleaning", price: "₹1,500" },
    { name: "Dental Implants",             price: "Consultation Req." },
    { name: "Teeth Whitening",             price: "Premium" },
    { name: "Clear Aligners",              price: "Invisible Braces" },
    { name: "Pediatric Dentistry",         price: "Kids Care" }
  ],

  // --- API BACKEND ---
  gasUrl: "https://script.google.com/macros/s/AKfycby87Kh9jGLi3-2kctMIWhF1eGxLZHQAN0jIftq9SzrCysU5KuwKbMISs7VuWjvIvH9BTA/exec",

  // --- PHYSICAL ADDRESS ---
  address: "204/A, Zojwala Complex, Sahajanand Chowk, Agra Rd, Kalyan West, 421301"

};


// ============================================================
//  CORE ENGINE — Do not edit below
// ============================================================

function applyGlobalBranding() {
  const c = MASTER_CONFIG;
  const root = document.documentElement;

  // 1. — CSS VARIABLES
  root.style.setProperty('--primary',   c.theme.primary);
  root.style.setProperty('--accent',    c.theme.accent);
  root.style.setProperty('--bg-app',    c.theme.bg);
  root.style.setProperty('--text-main', c.theme.text);

  // 2. — BROWSER TAB
  document.title = c.metaTitle || c.brandName;

  // 3. — TEXT INJECTION
  document.querySelectorAll('.inject-brand').forEach(el => el.textContent = c.brandName);
  document.querySelectorAll('.inject-user').forEach(el => el.textContent = c.labels.user);
  document.querySelectorAll('.inject-action').forEach(el => el.textContent = c.labels.action);
  document.querySelectorAll('.inject-service-label').forEach(el => el.textContent = c.labels.service);
  document.querySelectorAll('.inject-address').forEach(el => el.textContent = c.address);

  // 4. — SERVICES DROPDOWN
  const dropdown = document.getElementById('service-select');
  if (dropdown) {
    dropdown.innerHTML =
      `<option value="">SELECT ${c.labels.service.toUpperCase()}</option>` +
      c.services.map(s =>
        `<option value="${s.name.toUpperCase()}">${s.name.toUpperCase()} — ${s.price}</option>`
      ).join('');
  }
}

// UTILITY HELPERS
function formatTime12(timeStr) {
  if (!timeStr) return '';
  if (/AM|PM/i.test(timeStr)) return timeStr;
  const [h, m] = timeStr.split(':');
  let hour = parseInt(h, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour}:${m || '00'} ${ampm}`;
}

function getGasUrl() {
  return MASTER_CONFIG.gasUrl;
}

window.addEventListener('DOMContentLoaded', applyGlobalBranding);
