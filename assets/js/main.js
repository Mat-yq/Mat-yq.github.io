/* =============================================================
   M—Y Portfolio — minimal interactions
   - i18n switching with localStorage memory
   - Mobile menu toggle
   - Active-link marking based on body[data-page]
   ============================================================= */
(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio.lang';
  const SUPPORTED = ['zh', 'en'];
  const DEFAULT_LANG = 'zh';

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || '').toLowerCase();
    return nav.startsWith('zh') ? 'zh' : nav.startsWith('en') ? 'en' : DEFAULT_LANG;
  }

  function applyLang(lang) {
    const dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N[DEFAULT_LANG]) || {};
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.body.classList.toggle('lang-zh', lang === 'zh');
    document.body.classList.toggle('lang-en', lang === 'en');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-lang]').forEach((el) => {
      el.hidden = el.getAttribute('data-lang') !== lang;
    });
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLangToggle() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const cur = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
      applyLang(cur === 'zh' ? 'en' : 'zh');
    });
  }

  function initMobileMenu() {
    const btn = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    function close() {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    function toggle() {
      const open = btn.getAttribute('aria-expanded') === 'true';
      if (open) return close();
      btn.setAttribute('aria-expanded', 'true');
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    btn.addEventListener('click', toggle);
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  }

  function initYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function initActiveNav() {
    const page = document.body.getAttribute('data-page');
    if (!page) return;
    document.querySelectorAll('.nav__link').forEach((a) => {
      if (a.getAttribute('data-page-link') === page) a.classList.add('is-active');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(detectLang());
    initLangToggle();
    initMobileMenu();
    initYear();
    initActiveNav();
  });
})();
