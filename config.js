// ============================================================
//  AGENCY ENGINE v2.0 — 32 Watts / Multi-Client Framework
//  Edit MASTER_CONFIG only. Everything else is automatic.
// ============================================================

const MASTER_CONFIG = {

  // --- CLIENT IDENTITY ---
  brandName:  "32 Watts Dental",           // Renders wherever .inject-brand appears
  metaTitle:  "32 Watts Dental | Dr. Priyanka Jain | Ghatkopar East",
  favicon:    "images (1).png",             // Relative or absolute URL

  // --- THEME ENGINE ---
  theme: {
    primary:  "#00C8D7",   // Main brand color  (nav accents, buttons, highlights)
    accent:   "#0a1128",   // Secondary color   (footer bg, dark sections)
    bg:       "#f8fafc",   // Page background   (slate-50 equivalent)
    text:     "#0f172a",   // Body text         (slate-900 equivalent)
    mode:     "LIGHT"      // "LIGHT" or "DARK" — controls form & card surfaces
  },

  // --- NICHE TERMINOLOGY ---
  labels: {
    user:    "Patient",      // Renders wherever .inject-user appears
    action:  "Appointment",  // Renders wherever .inject-action appears
    service: "Treatment"     // Renders wherever .inject-service-label appears
  },

  // --- SERVICES / PRICING ---
  // These populate the booking form dropdown automatically.
  services: [
    { name: "Painless RCT",        price: "₹3,500" },
    { name: "Cosmetic Smile",      price: "₹8,000" },
    { name: "Dental Implants",     price: "₹25,000" },
    { name: "Orthodontics",        price: "₹500 consult" },
    { name: "Hygiene & Cleaning",  price: "₹1,500" },
    { name: "General Consultation", price: "₹300" }
  ],

  // --- API BACKEND ---
  gasUrl: "https://script.google.com/macros/s/AKfycby87Kh9jGLi3-2kctMIWhF1eGxLZHQAN0jIftq9SzrCysU5KuwKbMISs7VuWjvIvH9BTA/exec"

};


// ============================================================
//  CORE ENGINE — Do not edit below unless extending features
// ============================================================

function applyGlobalBranding() {
  const c = MASTER_CONFIG;
  const root = document.documentElement;

  // 1. — CSS VARIABLES (controls all color across every page)
  root.style.setProperty('--primary',   c.theme.primary);
  root.style.setProperty('--accent',    c.theme.accent);
  root.style.setProperty('--bg-app',    c.theme.bg);
  root.style.setProperty('--text-main', c.theme.text);

  // 2. — BROWSER TAB
  document.title = c.metaTitle || c.brandName;

  // 3. — FAVICON
  if (c.favicon) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
    link.href = c.favicon;
  }

  // 4. — TEXT INJECTION (add these classes to any HTML element)
  //   .inject-brand         → brandName
  //   .inject-user          → labels.user
  //   .inject-action        → labels.action
  //   .inject-service-label → labels.service
  document.querySelectorAll('.inject-brand').forEach(el => el.textContent = c.brandName);
  document.querySelectorAll('.inject-user').forEach(el => el.textContent = c.labels.user);
  document.querySelectorAll('.inject-action').forEach(el => el.textContent = c.labels.action);
  document.querySelectorAll('.inject-service-label').forEach(el => el.textContent = c.labels.service);

  // 5. — SERVICES DROPDOWN (works with id="service-select")
  const dropdown = document.getElementById('service-select');
  if (dropdown) {
    dropdown.innerHTML =
      `<option value="">SELECT ${c.labels.service.toUpperCase()}</option>` +
      c.services.map(s =>
        `<option value="${s.name.toUpperCase()}">${s.name.toUpperCase()} — ${s.price}</option>`
      ).join('');
  }

  // 6. — DARK MODE SURFACES (optional: adds a class to <body> for dark card styling)
  if (c.theme.mode === 'DARK') {
    document.body.classList.add('mode-dark');
  } else {
    document.body.classList.remove('mode-dark');
  }
}


// ============================================================
//  UTILITY HELPERS — Available globally on every page
// ============================================================

/** Convert 24h "14:30" → "2:30 PM". Passthrough if already formatted. */
function formatTime12(timeStr) {
  if (!timeStr) return '';
  if (/AM|PM/i.test(timeStr)) return timeStr;
  const [h, m] = timeStr.split(':');
  let hour = parseInt(h, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour}:${m || '00'} ${ampm}`;
}

/** Format a date string to "28 MAR 2026". */
const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
function formatDateDisplay(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return `${String(d.getDate()).padStart(2,'0')} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Parse a date string safely, returns a Date at midnight or null. */
function parseDateSafe(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Expose config & gasUrl globally so index.html booking script can read it. */
function getGasUrl() {
  return MASTER_CONFIG.gasUrl;
}


// ============================================================
//  INIT
// ============================================================
window.addEventListener('DOMContentLoaded', applyGlobalBranding);
