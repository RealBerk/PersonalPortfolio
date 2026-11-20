'use strict';

/* Karanlik ve aydinlik tema*/
(function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;


  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      toggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  });
})();

/* Mobil menu */
(function initMobileMenu() {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on Escape (keyboard accessibility)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
})();

/* Filtre ve arama secenegi */
(function initProjectFilter() {
  const grid = document.getElementById('project-grid');
  const search = document.getElementById('project-search');
  const select = document.getElementById('project-filter');
  const countEl = document.getElementById('project-count');
  if (!grid || !search || !select) return;

  const cards = Array.from(grid.querySelectorAll('.project-card'));

function applyFilter() {
  const q = search.value.trim().toLowerCase();
  const tag = select.value;
  let visible = 0;

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    // Split the data-tags into individual tokens and check exact membership
    const tagList = (card.dataset.tags || '').toLowerCase().split(/\s+/);
    const matchesSearch = q === '' || text.includes(q);
    const matchesTag = tag === 'all' || tagList.includes(tag);
    const show = matchesSearch && matchesTag;
    card.hidden = !show;
    if (show) visible++;
  });

  if (countEl) countEl.textContent = `${visible} proje gösteriliyor.`;
}

  search.addEventListener('input', applyFilter);
  select.addEventListener('change', applyFilter);


  applyFilter();
})();

/* Iletisim bilgileri onay */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name:    { el: document.getElementById('name'),    min: 2  },
    email:   { el: document.getElementById('email')                },
    message: { el: document.getElementById('message'), min: 10 }
  };
  const status = document.getElementById('form-status');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(key, message) {
    const errEl = document.getElementById(`${key}-error`);
    const input = fields[key].el;
    if (!errEl || !input) return;
    errEl.textContent = message || '';
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function validate() {
    let ok = true;

    // Ad
    const name = fields.name.el.value.trim();
    if (name.length < fields.name.min) {
      setError('name', `Ad en az ${fields.name.min} karakter olmalı.`);
      ok = false;
    } else setError('name', '');

    // Email
    const email = fields.email.el.value.trim();
    if (!emailRegex.test(email)) {
      setError('email', 'Geçerli bir e-posta adresi girin.');
      ok = false;
    } else setError('email', '');

    // Mesaj
    const msg = fields.message.el.value.trim();
    if (msg.length < fields.message.min) {
      setError('message', `Mesaj en az ${fields.message.min} karakter olmalı.`);
      ok = false;
    } else setError('message', '');

    return ok;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // demo olarak, bir yere gondermiyor
    if (validate()) {
      if (status) {
        status.textContent = '✓ Mesajınız doğrulandı (demo). Gerçek gönderim için backend gerekir.';
        status.style.color = '#16a34a';
      }
      form.reset();
    } else {
      if (status) {
        status.textContent = 'Lütfen formdaki hataları düzeltin.';
        status.style.color = '#dc2626';
      }
    }
  });

 
  Object.keys(fields).forEach((key) => {
    const el = fields[key].el;
    if (el) el.addEventListener('blur', validate);
  });
})();