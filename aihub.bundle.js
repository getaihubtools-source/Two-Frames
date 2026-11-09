/* AIhub Design System v1.1 — bundle (core + datepicker + cmdk). جدول/نمودار چون استفاده نمی‌شوند حذف شده‌اند. بدون ?. و ?? */

/* ===== aihub-core.js ===== */
(function (w, d) {
  'use strict';
  var A = w.AIhub = w.AIhub || {};
  var root = d.documentElement;

  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function store(k, v) {
    try {
      if (v === undefined) return w.localStorage.getItem(k);
      if (v === null) w.localStorage.removeItem(k); else w.localStorage.setItem(k, v);
    } catch (e) {}
    return null;
  }
  A.$ = $; A.$$ = $$; A.store = store;
  A.ready = function (fn) { if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', fn); else fn(); };

  var FA = '۰۱۲۳۴۵۶۷۸۹';
  A.fa = function (n) { return String(n).replace(/\d/g, function (c) { return FA.charAt(c); }); };
  A.num = function (n, o) { try { return Number(n).toLocaleString('fa-IR', o); } catch (e) { return A.fa(n); } };
  A.norm = function (s) {
    return String(s == null ? '' : s)
      .replace(/[يى]/g, 'ی').replace(/ك/g, 'ک')
      .replace(/[‌‍‎‏]/g, '')
      .replace(/[ً-ٰٟ]/g, '')
      .replace(/[۰-۹]/g, function (c) { return c.charCodeAt(0) - 0x06F0; })
      .replace(/[٠-٩]/g, function (c) { return c.charCodeAt(0) - 0x0660; })
      .toLowerCase().replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  };
  var uid = 0;
  A.uid = function (p) { uid += 1; return (p || 'aihub') + '-' + uid; };

  A.theme = {
    get: function () {
      return root.getAttribute('data-theme') || (w.matchMedia && w.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    },
    set: function (t) {
      root.setAttribute('data-theme', t); store('aihub-theme', t);
      $$('[data-theme-toggle]').forEach(function (b) { b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false'); });
    },
    toggle: function () { this.set(this.get() === 'dark' ? 'light' : 'dark'); }
  };
  A.brand = {
    get: function () { return root.getAttribute('data-brand') || 'firouzeh'; },
    set: function (n) {
      if (!n || n === 'firouzeh') { root.removeAttribute('data-brand'); store('aihub-brand', null); }
      else { root.setAttribute('data-brand', n); store('aihub-brand', n); }
      d.dispatchEvent(new CustomEvent('aihub:brand', { detail: { brand: A.brand.get() } }));
    }
  };
  (function boot() {
    var t = store('aihub-theme'), b = store('aihub-brand');
    if (t === 'dark' || t === 'light') root.setAttribute('data-theme', t);
    if (b) root.setAttribute('data-brand', b);
  })();

  A.toast = function (msg, o) {
    o = o || {};
    var host = $('#toasts');
    if (!host) { host = d.createElement('div'); host.id = 'toasts'; host.className = 'toasts'; d.body.appendChild(host); }
    var t = d.createElement('div');
    t.className = 'toast' + (o.kind ? ' toast--' + o.kind : '');
    t.setAttribute('role', o.kind === 'error' ? 'alert' : 'status');
    var s = d.createElement('span'); s.className = 'toast__msg'; s.textContent = msg; t.appendChild(s);
    var timer;
    function remove() { clearTimeout(timer); if (t.parentNode) t.parentNode.removeChild(t); }
    if (o.action) {
      var b = d.createElement('button'); b.type = 'button'; b.className = 'toast__action'; b.textContent = o.action.label;
      b.onclick = function () { try { if (o.action.onClick) o.action.onClick(); } finally { remove(); } };
      t.appendChild(b);
    }
    host.appendChild(t);
    timer = setTimeout(remove, o.duration || (o.action ? 6500 : 3200));
    return { close: remove };
  };

  A.sheet = function (html, o) {
    o = o || {};
    var prev = d.activeElement, ov = d.createElement('div'), sh = d.createElement('div');
    ov.className = 'overlay'; sh.className = 'sheet';
    sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-modal', 'true'); sh.setAttribute('aria-label', o.label || 'پنجره');
    sh.innerHTML = '<div class="sheet__grab"></div>' + html;
    ov.appendChild(sh); d.body.appendChild(ov);
    function close() {
      if (!ov.parentNode) return;
      ov.parentNode.removeChild(ov);
      if (prev && prev.focus) prev.focus();
      if (o.onClose) o.onClose();
    }
    ov.addEventListener('mousedown', function (e) { if (e.target === ov) close(); });
    sh.addEventListener('click', function (e) { if (e.target.closest('[data-sheet-close]')) close(); });
    ov.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
      if (e.key !== 'Tab') return;
      var f = $$('a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])', sh).filter(function (x) { return x.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    setTimeout(function () { var f = sh.querySelector('[autofocus],input,select,textarea,button'); if (f) f.focus(); }, 30);
    return { el: sh, close: close };
  };

  var drawerOpener = null;
  function app() { return $('.app'); }
  function syncSidebarToggle() {
    var a = app(); if (!a) return;
    var rail = a.getAttribute('data-sidebar') === 'rail';
    $$('[data-sidebar-toggle]').forEach(function (b) {
      b.setAttribute('aria-pressed', rail ? 'true' : 'false');
      b.setAttribute('aria-label', rail ? 'باز کردن منو' : 'جمع کردن منو');
    });
  }
  function openDrawer(opener) {
    var a = app(); if (!a) return;
    drawerOpener = opener || null;
    a.classList.add('is-drawer-open');
    $$('[data-drawer-open]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    setTimeout(function () { var f = $('.sidebar .nav__item', a); if (f) f.focus(); }, 60);
  }
  function closeDrawer(restore) {
    var a = app(); if (!a || !a.classList.contains('is-drawer-open')) return;
    a.classList.remove('is-drawer-open');
    $$('[data-drawer-open]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (restore !== false && drawerOpener && drawerOpener.focus) drawerOpener.focus();
    drawerOpener = null;
  }
  A.shell = { openDrawer: openDrawer, closeDrawer: closeDrawer,
    setSidebar: function (mode) { var a = app(); if (!a) return; a.setAttribute('data-sidebar', mode); store('aihub-sidebar', mode); syncSidebarToggle(); },
    toggleSidebar: function () { var a = app(); if (!a) return; this.setSidebar(a.getAttribute('data-sidebar') === 'rail' ? 'expanded' : 'rail'); } };

  function menuFor(trigger) {
    var sel = trigger.getAttribute('data-menu');
    var m = sel && sel.charAt(0) === '#' ? d.getElementById(sel.slice(1)) : null;
    if (!m) { var n = trigger.nextElementSibling; if (n && n.classList.contains('menu')) m = n; }
    if (m && !m.id) m.id = A.uid('menu');
    return m;
  }
  function triggerFor(menu) { return $('[aria-controls="' + menu.id + '"]'); }
  function closeMenus(except, restoreFocus) {
    $$('.menu.is-open').forEach(function (m) {
      if (m === except) return;
      m.classList.remove('is-open');
      var t = triggerFor(m);
      if (t) { t.setAttribute('aria-expanded', 'false'); if (restoreFocus) t.focus(); }
    });
  }
  function placeMenu(m) {
    m.classList.remove('menu--flip-x', 'menu--up');
    var r = m.getBoundingClientRect(), vw = d.documentElement.clientWidth, vh = w.innerHeight;
    if (r.left < 8 || r.right > vw - 8) m.classList.add('menu--flip-x');
    if (r.bottom > vh - 8) {
      var t = triggerFor(m), tr = t ? t.getBoundingClientRect() : null;
      if (tr && tr.top - r.height - 6 > 8) m.classList.add('menu--up');
    }
  }
  function items(m) { return $$('[role="menuitem"],[role="menuitemradio"],[role="menuitemcheckbox"]', m).filter(function (i) { return !i.disabled && i.getAttribute('aria-disabled') !== 'true'; }); }
  function openMenu(trigger, focusFirst) {
    var m = menuFor(trigger); if (!m) return;
    closeMenus(m);
    trigger.setAttribute('aria-controls', m.id); trigger.setAttribute('aria-haspopup', 'menu'); trigger.setAttribute('aria-expanded', 'true');
    m.setAttribute('role', 'menu'); m.classList.add('is-open');
    placeMenu(m);
    if (focusFirst) { var it = items(m)[0]; if (it) it.focus(); }
  }
  A.menu = { open: openMenu, close: closeMenus };

  function selectTab(tab, focus) {
    var list = tab.closest('[role="tablist"]'); if (!list) return;
    $$('[role="tab"]', list).forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false'); t.setAttribute('tabindex', on ? '0' : '-1');
      var pid = t.getAttribute('aria-controls'); var p = pid ? d.getElementById(pid) : null;
      if (p) p.hidden = !on;
    });
    if (focus) tab.focus();
    list.dispatchEvent(new CustomEvent('aihub:tab', { bubbles: true, detail: { tab: tab, value: tab.getAttribute('data-value') || tab.id } }));
  }
  function initTabs() {
    $$('[role="tablist"]').forEach(function (l) {
      var sel = $('[role="tab"][aria-selected="true"]', l) || $('[role="tab"]', l);
      if (sel) selectTab(sel, false);
    });
  }

  d.addEventListener('click', function (e) {
    var t = e.target;
    var el = t.closest ? t.closest('[data-theme-toggle]') : null;
    if (el) { A.theme.toggle(); return; }
    el = t.closest('[data-brand-set]');
    if (el) { A.brand.set(el.getAttribute('data-brand-set')); return; }
    el = t.closest('[data-sidebar-toggle]');
    if (el) { A.shell.toggleSidebar(); return; }
    el = t.closest('[data-drawer-open]');
    if (el) { openDrawer(el); return; }
    if (t.closest('[data-drawer-close]') || (t.classList && t.classList.contains('scrim'))) { closeDrawer(); return; }
    var a = app();
    if (a && a.classList.contains('is-drawer-open') && t.closest('.sidebar .nav__item')) closeDrawer(false);

    el = t.closest('[data-menu]');
    if (el) {
      var m = menuFor(el);
      if (m && m.classList.contains('is-open')) closeMenus(null, false); else openMenu(el, false);
      return;
    }
    var mi = t.closest('.menu__item');
    if (mi && !mi.hasAttribute('data-keep-open')) { var mm = mi.closest('.menu'); if (mm) closeMenus(null, true); }
    else if (!t.closest('.menu')) closeMenus(null, false);

    el = t.closest('[role="tab"]');
    if (el) selectTab(el, false);

    el = t.closest('[data-split-item]');
    if (el) {
      var sp = el.closest('.split');
      if (sp) {
        $$('[data-split-item]', sp).forEach(function (x) { x.removeAttribute('aria-current'); });
        el.setAttribute('aria-current', 'true');
        sp.classList.add('is-detail');
        sp.dispatchEvent(new CustomEvent('aihub:split-select', { bubbles: true, detail: { item: el } }));
        var det = $('.split__detail', sp);
        if (det && w.matchMedia && w.matchMedia('(max-width: 899.98px)').matches) { det.setAttribute('tabindex', '-1'); det.focus(); }
      }
      return;
    }
    el = t.closest('[data-split-back]');
    if (el) {
      var sp2 = el.closest('.split');
      if (sp2) { sp2.classList.remove('is-detail'); var cur = $('[data-split-item][aria-current]', sp2); if (cur) cur.focus(); }
    }
  });

  d.addEventListener('keydown', function (e) {
    var t = e.target;
    var openM = $('.menu.is-open');
    if (openM) {
      var its = items(openM), i = its.indexOf(d.activeElement);
      if (e.key === 'Escape') { e.preventDefault(); closeMenus(null, true); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); (its[(i + 1) % its.length] || its[0]).focus(); return; }
      if (e.key === 'ArrowUp') { e.preventDefault(); (its[(i - 1 + its.length) % its.length] || its[0]).focus(); return; }
      if (e.key === 'Home') { e.preventDefault(); if (its[0]) its[0].focus(); return; }
      if (e.key === 'End') { e.preventDefault(); if (its.length) its[its.length - 1].focus(); return; }
      if (e.key === 'Tab') { closeMenus(null, false); }
    }
    if (t.closest && t.closest('[data-menu]') && (e.key === 'ArrowDown')) { e.preventDefault(); openMenu(t.closest('[data-menu]'), true); return; }
    if (e.key === 'Escape') { var a = app(); if (a && a.classList.contains('is-drawer-open')) { closeDrawer(); return; } }
    var tab = t.closest ? t.closest('[role="tab"]') : null;
    if (tab) {
      var list = tab.closest('[role="tablist"]'), tabs = $$('[role="tab"]', list), idx = tabs.indexOf(tab);
      var vertical = list.getAttribute('aria-orientation') === 'vertical';
      var rtl = w.getComputedStyle(list).direction === 'rtl';
      var next = vertical ? 'ArrowDown' : (rtl ? 'ArrowLeft' : 'ArrowRight'), prev = vertical ? 'ArrowUp' : (rtl ? 'ArrowRight' : 'ArrowLeft');
      var to = null;
      if (e.key === next) to = tabs[(idx + 1) % tabs.length];
      else if (e.key === prev) to = tabs[(idx - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') to = tabs[0];
      else if (e.key === 'End') to = tabs[tabs.length - 1];
      if (to) { e.preventDefault(); selectTab(to, true); }
    }
  });

  w.addEventListener('resize', function () {
    if (w.innerWidth >= 640) closeDrawer(false);
    $$('.menu.is-open').forEach(placeMenu);
  });

  A.ready(function () {
    var a = app();
    if (a) {
      var saved = store('aihub-sidebar');
      if (saved === 'rail' || saved === 'expanded') a.setAttribute('data-sidebar', saved);
      else if (!a.hasAttribute('data-sidebar')) a.setAttribute('data-sidebar', 'expanded');
      syncSidebarToggle();
    }
    $$('[data-theme-toggle]').forEach(function (b) { b.setAttribute('aria-pressed', A.theme.get() === 'dark' ? 'true' : 'false'); });
    initTabs();
  });
})(window, document);

/* ===== aihub-datepicker.js ===== */
(function (w, d) {
  'use strict';
  var A = w.AIhub = w.AIhub || {};

  function div(a, b) { return ~~(a / b); }
  function mod(a, b) { return a - ~~(a / b) * b; }
  var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
  function jalCal(jy, withoutLeap) {
    var bl = breaks.length, gy = jy + 621, leapJ = -14, jp = breaks[0], jm, jump = 0, leap, leapG, march, n, i;
    if (jy < jp || jy >= breaks[bl - 1]) throw new Error('Invalid Jalaali year ' + jy);
    for (i = 1; i < bl; i += 1) {
      jm = breaks[i]; jump = jm - jp;
      if (jy < jm) break;
      leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
      jp = jm;
    }
    n = jy - jp;
    leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
    if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
    leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
    march = 20 + leapJ - leapG;
    if (withoutLeap) return { gy: gy, march: march };
    if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) leap = 4;
    return { leap: leap, gy: gy, march: march };
  }
  function g2d(gy, gm, gd) {
    var x = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
    return x - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  }
  function d2g(jdn) {
    var j = 4 * jdn + 139361631;
    j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
    var i = div(mod(j, 1461), 4) * 5 + 308;
    var gd = div(mod(i, 153), 5) + 1, gm = mod(div(i, 153), 12) + 1, gy = div(j, 1461) - 100100 + div(8 - gm, 6);
    return { gy: gy, gm: gm, gd: gd };
  }
  function j2d(jy, jm, jd) {
    var r = jalCal(jy, true);
    return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
  }
  function d2j(jdn) {
    var gy = d2g(jdn).gy, jy = gy - 621, r = jalCal(jy, false), jdn1f = g2d(gy, 3, r.march), jd, jm, k;
    k = jdn - jdn1f;
    if (k >= 0) {
      if (k <= 185) { jm = 1 + div(k, 31); jd = mod(k, 31) + 1; return { jy: jy, jm: jm, jd: jd }; }
      k -= 186;
    } else { jy -= 1; k += 179; if (r.leap === 1) k += 1; }
    jm = 7 + div(k, 30); jd = mod(k, 30) + 1;
    return { jy: jy, jm: jm, jd: jd };
  }
  function toJ(gy, gm, gd) { return d2j(g2d(gy, gm, gd)); }
  function toG(jy, jm, jd) { return d2g(j2d(jy, jm, jd)); }
  function isLeap(jy) { return jalCal(jy, false).leap === 0; }
  function monthLen(jy, jm) { return jm <= 6 ? 31 : (jm <= 11 ? 30 : (isLeap(jy) ? 30 : 29)); }

  var MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  var DOW = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  var DOWL = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function jdn(j) { return j2d(j.jy, j.jm, j.jd); }
  function cmp(a, b) { return jdn(a) - jdn(b); }
  function jStr(j) { return j.jy + '/' + pad(j.jm) + '/' + pad(j.jd); }
  function isoOf(j) { var g = toG(j.jy, j.jm, j.jd); return g.gy + '-' + pad(g.gm) + '-' + pad(g.gd); }
  function fromISO(s) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || ''); return m ? toJ(+m[1], +m[2], +m[3]) : null; }
  function parseJ(s) { var m = /(\d{3,4})[\/\-.](\d{1,2})[\/\-.](\d{1,2})/.exec(A.norm(s)); return m ? { jy: +m[1], jm: +m[2], jd: +m[3] } : null; }
  function fromDate(dt) { return toJ(dt.getFullYear(), dt.getMonth() + 1, dt.getDate()); }
  function today() { return fromDate(new Date()); }
  function dow(j) { return (((jdn(j) + 1) % 7) + 1) % 7; }
  function addDays(j, n) { return d2j(jdn(j) + n); }
  function longFa(j) { return A.fa(j.jd) + ' ' + MONTHS[j.jm - 1] + ' ' + A.fa(j.jy); }
  function fmt(j, style) {
    if (!j) return '';
    if (style === 'long') return longFa(j);
    if (style === 'weekday') return DOWL[dow(j)] + ' ' + longFa(j);
    if (style === 'iso') return isoOf(j);
    if (style === 'ascii') return jStr(j);
    return A.fa(jStr(j));
  }
  function toDate(j) { var g = toG(j.jy, j.jm, j.jd); return new Date(g.gy, g.gm - 1, g.gd); }

  A.jalali = {
    toJalali: toJ, toGregorian: toG, fromDate: fromDate, toDate: toDate, today: today,
    fromISO: fromISO, toISO: isoOf, parse: parseJ, format: fmt, monthLength: monthLen, isLeap: isLeap,
    dayOfWeek: dow, addDays: addDays, compare: cmp, monthNames: MONTHS, weekdayNames: DOWL
  };

  var pop, scrim, cur = null, isOpen = false;
  var ICON_PREV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
  var ICON_NEXT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>';

  function ensure() {
    if (pop) return;
    scrim = d.createElement('div'); scrim.className = 'dp-scrim'; scrim.hidden = true;
    pop = d.createElement('div'); pop.className = 'dp'; pop.hidden = true; pop.setAttribute('dir', 'rtl');
    pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', 'انتخاب تاریخ');
    d.body.appendChild(scrim); d.body.appendChild(pop);
    scrim.addEventListener('click', function () { close(true); });
    pop.addEventListener('click', onClick);
    pop.addEventListener('change', onChange);
    pop.addEventListener('keydown', onKey);
    d.addEventListener('pointerdown', function (e) {
      if (!isOpen) return;
      if (pop.contains(e.target) || e.target === cur.input) return;
      close(false);
    });
    w.addEventListener('resize', function () { if (isOpen) place(); });
    w.addEventListener('scroll', function () { if (isOpen) place(); }, true);
  }

  function html() {
    var st = cur, v = st.view, i, y, ys = '', ms = '';
    for (y = v.jy - 12; y <= v.jy + 6; y++) ys += '<option value="' + y + '"' + (y === v.jy ? ' selected' : '') + '>' + A.fa(y) + '</option>';
    for (i = 0; i < 12; i++) ms += '<option value="' + (i + 1) + '"' + (i + 1 === v.jm ? ' selected' : '') + '>' + MONTHS[i] + '</option>';
    var out = '';
    if (st.range) {
      out += '<div class="dp__presets"><button type="button" class="chip" data-preset="today">امروز</button><button type="button" class="chip" data-preset="7">۷ روز اخیر</button><button type="button" class="chip" data-preset="30">۳۰ روز اخیر</button><button type="button" class="chip" data-preset="month">این ماه</button><button type="button" class="chip" data-preset="prev">ماه قبل</button></div>';
    }
    out += '<div class="dp__head"><button type="button" class="dp__nav" data-act="prev" aria-label="ماه قبل">' + ICON_PREV + '</button>' +
      '<select class="dp__sel" data-act="month" aria-label="ماه">' + ms + '</select>' +
      '<select class="dp__sel" data-act="year" aria-label="سال">' + ys + '</select>' +
      '<button type="button" class="dp__nav" data-act="next" aria-label="ماه بعد">' + ICON_NEXT + '</button></div>';
    out += '<div class="dp__grid" role="grid">';
    for (i = 0; i < 7; i++) out += '<div class="dp__dow" aria-hidden="true">' + DOW[i] + '</div>';
    var off = dow({ jy: v.jy, jm: v.jm, jd: 1 }), len = monthLen(v.jy, v.jm), t = today();
    for (i = 0; i < off; i++) out += '<span></span>';
    for (var day = 1; day <= len; day++) {
      var j = { jy: v.jy, jm: v.jm, jd: day }, n = jdn(j), cls = '', sel = false;
      if (((off + day - 1) % 7) === 6) cls += ' is-fri';
      if (cmp(j, t) === 0) cls += ' is-today';
      if (st.s && cmp(j, st.s) === 0) sel = true;
      if (st.e && cmp(j, st.e) === 0) sel = true;
      if (st.s && st.e && n > jdn(st.s) && n < jdn(st.e)) cls += ' in-range';
      out += '<button type="button" class="dp__day' + cls + '" data-d="' + day + '" tabindex="' + (day === st.focus.jd ? 0 : -1) + '" aria-label="' + DOWL[(off + day - 1) % 7] + ' ' + longFa(j) + '"' + (sel ? ' aria-pressed="true"' : ' aria-pressed="false"') + '>' + A.fa(day) + '</button>';
    }
    out += '</div><div class="dp__foot"><button type="button" class="btn btn--ghost btn--sm" data-act="clear">پاک کردن</button>' +
      (st.range ? '' : '<button type="button" class="btn btn--ghost btn--sm" data-act="today">امروز</button>') + '</div>';
    return out;
  }

  function render(focus) {
    pop.innerHTML = html();
    place();
    if (focus) { var b = pop.querySelector('.dp__day[data-d="' + cur.focus.jd + '"]'); if (b) b.focus(); }
  }

  function place() {
    if (!cur) return;
    var vw = d.documentElement.clientWidth, vh = w.innerHeight, sheet = vw < 640;
    pop.classList.toggle('dp--sheet', sheet); scrim.hidden = !sheet;
    if (sheet) { pop.style.top = ''; pop.style.left = ''; return; }
    var r = cur.input.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight;
    var rtl = w.getComputedStyle(cur.input).direction === 'rtl';
    var left = rtl ? r.right - pw : r.left;
    left = Math.max(8, Math.min(vw - pw - 8, left));
    var top = r.bottom + 6;
    if (top + ph > vh - 8 && r.top - ph - 6 > 8) top = r.top - ph - 6;
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
  }

  function open(input) {
    ensure();
    var st = input._dp; if (!st) return;
    if (isOpen && cur === st) return;
    if (isOpen) close(false);
    cur = st;
    var base = st.s || today();
    st.view = { jy: base.jy, jm: base.jm };
    st.focus = { jy: base.jy, jm: base.jm, jd: base.jd };
    pop.setAttribute('aria-label', st.range ? 'انتخاب بازه تاریخ' : 'انتخاب تاریخ');
    pop.hidden = false; isOpen = true;
    input.setAttribute('aria-expanded', 'true');
    render(true);
  }
  function close(restore) {
    if (!isOpen) return;
    isOpen = false; pop.hidden = true; scrim.hidden = true;
    cur.input.setAttribute('aria-expanded', 'false');
    if (restore) cur.input.focus();
  }

  function commit() {
    var st = cur || null; if (!st) return;
    write(st);
    st.input.dispatchEvent(new Event('change', { bubbles: true }));
    st.input.dispatchEvent(new CustomEvent('aihub:date', { bubbles: true, detail: A.datepicker.value(st.input) }));
  }
  function write(st) {
    var inp = st.input, ds = inp.dataset;
    ['iso', 'jalali', 'isoStart', 'isoEnd', 'jalaliStart', 'jalaliEnd'].forEach(function (k) { delete ds[k]; });
    if (st.range) {
      if (st.s) { ds.isoStart = isoOf(st.s); ds.jalaliStart = jStr(st.s); }
      if (st.e) { ds.isoEnd = isoOf(st.e); ds.jalaliEnd = jStr(st.e); }
      inp.value = st.s ? (st.e ? fmt(st.s) + ' تا ' + fmt(st.e) : fmt(st.s)) : '';
    } else {
      if (st.s) { ds.iso = isoOf(st.s); ds.jalali = jStr(st.s); }
      inp.value = st.s ? fmt(st.s) : '';
    }
  }

  function pick(j) {
    var st = cur;
    st.focus = { jy: j.jy, jm: j.jm, jd: j.jd };
    if (st.range) {
      if (!st.s || st.e) { st.s = j; st.e = null; render(true); }
      else { if (cmp(j, st.s) < 0) { st.e = st.s; st.s = j; } else st.e = j; commit(); close(true); }
    } else { st.s = j; commit(); close(true); }
  }
  function preset(name) {
    var t = today(), s, e = t;
    if (name === 'today') s = t;
    else if (name === '7') s = addDays(t, -6);
    else if (name === '30') s = addDays(t, -29);
    else if (name === 'month') s = { jy: t.jy, jm: t.jm, jd: 1 };
    else {
      var pm = t.jm === 1 ? { jy: t.jy - 1, jm: 12 } : { jy: t.jy, jm: t.jm - 1 };
      s = { jy: pm.jy, jm: pm.jm, jd: 1 }; e = { jy: pm.jy, jm: pm.jm, jd: monthLen(pm.jy, pm.jm) };
    }
    cur.s = s; cur.e = e; commit(); close(true);
  }
  function shiftMonth(delta) {
    var v = cur.view, m = v.jm + delta, y = v.jy;
    if (m < 1) { m = 12; y -= 1; } else if (m > 12) { m = 1; y += 1; }
    cur.view = { jy: y, jm: m };
    cur.focus = { jy: y, jm: m, jd: Math.min(cur.focus.jd, monthLen(y, m)) };
  }

  function onClick(e) {
    var t = e.target, el;
    if ((el = t.closest('[data-d]'))) { pick({ jy: cur.view.jy, jm: cur.view.jm, jd: +el.getAttribute('data-d') }); return; }
    if ((el = t.closest('[data-preset]'))) { preset(el.getAttribute('data-preset')); return; }
    if ((el = t.closest('[data-act]'))) {
      var a = el.getAttribute('data-act');
      if (a === 'prev') { shiftMonth(-1); render(false); }
      else if (a === 'next') { shiftMonth(1); render(false); }
      else if (a === 'today') { pick(today()); }
      else if (a === 'clear') { cur.s = null; cur.e = null; commit(); close(true); }
    }
  }
  function onChange(e) {
    var a = e.target.getAttribute('data-act');
    if (a === 'month') { cur.view.jm = +e.target.value; } else if (a === 'year') { cur.view.jy = +e.target.value; } else return;
    cur.focus = { jy: cur.view.jy, jm: cur.view.jm, jd: Math.min(cur.focus.jd, monthLen(cur.view.jy, cur.view.jm)) };
    render(false);
    var s = pop.querySelector('[data-act="' + a + '"]'); if (s) s.focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(true); return; }
    if (e.key === 'Tab') {
      var f = [].slice.call(pop.querySelectorAll('button:not([tabindex="-1"]), select')).filter(function (x) { return !x.disabled; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
      return;
    }
    if (!e.target.classList.contains('dp__day')) return;
    var fcs = cur.focus, j = { jy: cur.view.jy, jm: cur.view.jm, jd: fcs.jd }, n = jdn(j), delta = 0, month = 0;
    var rtl = true;
    if (e.key === 'ArrowLeft') delta = rtl ? 1 : -1;
    else if (e.key === 'ArrowRight') delta = rtl ? -1 : 1;
    else if (e.key === 'ArrowDown') delta = 7;
    else if (e.key === 'ArrowUp') delta = -7;
    else if (e.key === 'PageDown') month = 1;
    else if (e.key === 'PageUp') month = -1;
    else if (e.key === 'Home') delta = -dow(j);
    else if (e.key === 'End') delta = 6 - dow(j);
    else return;
    e.preventDefault();
    var nj;
    if (month) { var m = j.jm + month, y = j.jy; if (m < 1) { m = 12; y--; } else if (m > 12) { m = 1; y++; } nj = { jy: y, jm: m, jd: Math.min(j.jd, monthLen(y, m)) }; }
    else nj = d2j(n + delta);
    cur.view = { jy: nj.jy, jm: nj.jm }; cur.focus = nj;
    render(true);
  }

  function bind(input) {
    if (input._dp) return;
    var st = { input: input, range: input.hasAttribute('data-range'), s: null, e: null, view: null, focus: null };
    input._dp = st;
    input.readOnly = true; input.setAttribute('autocomplete', 'off'); input.setAttribute('aria-haspopup', 'dialog'); input.setAttribute('aria-expanded', 'false');
    var ds = input.dataset;
    if (st.range) {
      st.s = parseJ(ds.valueStart || '') || fromISO(ds.isoStart); st.e = parseJ(ds.valueEnd || '') || fromISO(ds.isoEnd);
    } else {
      st.s = parseJ(ds.value || '') || fromISO(ds.iso) || (input.value ? parseJ(input.value) : null);
    }
    if (st.s || st.e) write(st);
    input.addEventListener('click', function () { open(input); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') { e.preventDefault(); open(input); }
    });
  }

  A.datepicker = {
    init: function (r) { [].forEach.call((r || d).querySelectorAll('input[data-jdate]'), bind); },
    open: function (input) { bind(input); open(input); },
    close: function () { close(false); },
    value: function (input) {
      var st = input._dp; if (!st) return null;
      return st.range
        ? { start: st.s ? { jalali: jStr(st.s), iso: isoOf(st.s) } : null, end: st.e ? { jalali: jStr(st.e), iso: isoOf(st.e) } : null }
        : (st.s ? { jalali: jStr(st.s), iso: isoOf(st.s) } : null);
    },
    set: function (input, a, b) {
      bind(input); var st = input._dp;
      st.s = typeof a === 'string' ? (parseJ(a) || fromISO(a)) : a; st.e = typeof b === 'string' ? (parseJ(b) || fromISO(b)) : (b || null);
      write(st);
    }
  };
  A.ready(function () { A.datepicker.init(d); });
})(window, document);

/* ===== aihub-cmdk.js ===== */
(function (w, d) {
  'use strict';
  var A = w.AIhub = w.AIhub || {};
  var norm = A.norm;
  var reg = [], root, input, list, shown = [], active = 0, isOpen = false, opener = null;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function icon(n) { return n ? '<svg class="ico" aria-hidden="true"><use href="#' + esc(n) + '"/></svg>' : '<span class="ico"></span>'; }

  function build() {
    if (root) return;
    root = d.createElement('div'); root.className = 'cmdk';
    root.innerHTML =
      '<div class="cmdk__panel" role="dialog" aria-modal="true" aria-label="جستجو و دستورها">' +
      '<div class="cmdk__input-row"><svg class="ico" aria-hidden="true"><use href="#i-search"/></svg>' +
      '<input class="cmdk__input" type="text" role="combobox" aria-expanded="true" aria-controls="cmdk-list" aria-autocomplete="list" aria-label="جستجو" placeholder="جستجوی صفحه یا دستور…" autocomplete="off" spellcheck="false">' +
      '<span class="kbd">Esc</span></div>' +
      '<div class="cmdk__list" id="cmdk-list" role="listbox" aria-label="نتایج"></div>' +
      '<div class="cmdk__foot"><span><span class="kbd">↑</span><span class="kbd">↓</span>حرکت</span><span><span class="kbd">Enter</span>انتخاب</span><span><span class="kbd">Esc</span>بستن</span></div></div>';
    d.body.appendChild(root);
    input = root.querySelector('.cmdk__input'); list = root.querySelector('.cmdk__list');
    root.addEventListener('mousedown', function (e) { if (e.target === root) close(); });
    input.addEventListener('input', function () { active = 0; render(); });
    input.addEventListener('keydown', onKey);
    list.addEventListener('mousemove', function (e) {
      var it = e.target.closest('.cmdk__item'); if (!it) return;
      var i = +it.getAttribute('data-i'); if (i !== active) { active = i; mark(false); }
    });
    list.addEventListener('click', function (e) { var it = e.target.closest('.cmdk__item'); if (it) choose(+it.getAttribute('data-i')); });
  }

  function score(it, toks) {
    var title = norm(it.title), hay = norm([it.title, it.group || '', (it.keywords || []).join(' ')].join(' ')), s = 0;
    for (var i = 0; i < toks.length; i++) {
      var p = hay.indexOf(toks[i]); if (p < 0) return 0;
      var tp = title.indexOf(toks[i]);
      s += tp === 0 ? 4 : (tp > 0 ? 3 : 1);
    }
    return s;
  }

  function render() {
    var q = norm(input.value), toks = q ? q.split(' ') : [], res = [];
    reg.forEach(function (it, i) { var s = toks.length ? score(it, toks) : 1; if (s > 0) res.push({ it: it, s: s, i: i }); });
    if (toks.length) res.sort(function (a, b) { return b.s - a.s || a.i - b.i; });
    shown = res.slice(0, 40).map(function (r) { return r.it; });
    if (!shown.length) { list.innerHTML = '<p class="cmdk__empty">نتیجه‌ای پیدا نشد. عبارت دیگری را امتحان کن.</p>'; input.removeAttribute('aria-activedescendant'); return; }
    var html = '', lastG = null;
    shown.forEach(function (it, i) {
      var g = toks.length ? '' : (it.group || '');
      if (!toks.length && g !== lastG) { html += '<div class="cmdk__group" role="presentation">' + esc(g) + '</div>'; lastG = g; }
      html += '<div class="cmdk__item" role="option" id="cmdk-o-' + i + '" data-i="' + i + '" aria-selected="false">' + icon(it.icon) +
        '<span>' + esc(it.title) + '</span>' + (it.hint ? '<span class="cmdk__item__hint">' + esc(it.hint) + '</span>' : '') + '</div>';
    });
    list.innerHTML = html; mark(true);
  }
  function mark(scroll) {
    var items = list.querySelectorAll('.cmdk__item');
    for (var i = 0; i < items.length; i++) items[i].setAttribute('aria-selected', i === active ? 'true' : 'false');
    if (items[active]) { input.setAttribute('aria-activedescendant', items[active].id); if (scroll !== false) items[active].scrollIntoView({ block: 'nearest' }); }
  }
  function choose(i) {
    var it = shown[i]; if (!it) return;
    close(false);
    setTimeout(function () { try { if (it.run) it.run(); } catch (e) { if (w.console) w.console.error(e); } }, 0);
  }
  function onKey(e) {
    var n = shown.length;
    if (e.key === 'ArrowDown') { e.preventDefault(); if (n) { active = (active + 1) % n; mark(); } }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (n) { active = (active - 1 + n) % n; mark(); } }
    else if (e.key === 'Enter') { e.preventDefault(); choose(active); }
    else if (e.key === 'Escape') { e.preventDefault(); close(true); }
    else if (e.key === 'Tab') { e.preventDefault(); }
  }

  function open() {
    build(); if (isOpen) return;
    opener = d.activeElement; isOpen = true;
    root.classList.add('is-open'); input.value = ''; active = 0; render();
    input.focus();
  }
  function close(restore) {
    if (!isOpen) return;
    isOpen = false; root.classList.remove('is-open');
    if (restore !== false && opener && opener.focus) opener.focus();
    opener = null;
  }

  function isTyping(t) { return t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)); }
  d.addEventListener('keydown', function (e) {
    if (isOpen && e.key === 'Escape') { e.preventDefault(); close(true); return; }
    if ((e.ctrlKey || e.metaKey) && (e.code === 'KeyK' || String(e.key).toLowerCase() === 'k')) { e.preventDefault(); if (isOpen) close(true); else open(); return; }
    if (!isOpen && !isTyping(e.target) && !e.ctrlKey && !e.metaKey && !e.altKey && (e.code === 'Slash')) { e.preventDefault(); open(); }
  });
  d.addEventListener('click', function (e) { var t = e.target.closest ? e.target.closest('[data-cmdk-open]') : null; if (t) { e.preventDefault(); open(); } });

  A.cmdk = {
    register: function (a) { (Array.isArray(a) ? a : [a]).forEach(function (it) { reg.push(it); }); },
    clear: function () { reg = []; },
    open: open, close: function () { close(true); },
    fromNav: function (sel, group) {
      [].forEach.call(d.querySelectorAll(sel), function (a) {
        var lab = a.querySelector('.nav__label'), title = (lab ? lab.textContent : a.textContent).replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
        var use = a.querySelector('use'), ic = use ? (use.getAttribute('href') || '').replace('#', '') : '';
        reg.push({ title: title, group: group || 'صفحه‌ها', icon: ic, hint: 'برو به صفحه', run: function () { a.click(); } });
      });
    }
  };
})(window, document);
