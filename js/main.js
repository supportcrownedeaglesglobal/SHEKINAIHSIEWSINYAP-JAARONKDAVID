/* ============================================================
   shekinaih-aaron.com — Refactored JavaScript
   ------------------------------------------------------------
   1. Scroll-progress bar
   2. Top nav scrolled-state
   3. Mobile hamburger menu + active-section sync
   4. Chapter FAB + bottom sheet (mobile only)
   5. Fade-up on scroll (IntersectionObserver)
   6. Gallery category filter
   ============================================================ */

(function () {
  'use strict';

  /* ----- Curated chapter list (mobile FAB + sheet + hamburger sync) ----- */
  var chapters = [
    { id: 'hero',          num: '·',  label: 'Cover' },
    { id: 'magazines',     num: '01', label: 'Two Magazines' },
    { id: 'featured',      num: '02', label: 'JT Foxx Interview' },
    { id: 'founders',      num: '03', label: 'About the Founders' },
    { id: 'journey',       num: '04', label: 'The Chronicle' },
    { id: 'ev-megasuccess', num: '·', label: 'Nov 2025 · MegaSuccess · Los Angeles' },
    { id: 'ev-manila',     num: '·',  label: 'Nov 2025 · Manila Up Awards · Los Angeles' },
    { id: 'ev-hollywood',  num: '·',  label: 'Nov 2025 · Hollywood Walk of Fame · Los Angeles' },
    { id: 'ev-his-presence', num: '·', label: 'Nov 2025 · His Presence Fire · Los Angeles' },
    { id: 'ev-thailand',   num: '·',  label: 'Dec 2025 · UNPKFC / GLS · Bangkok' },
    { id: 'ev-dalai-lama', num: '·',  label: 'Jan 2026 · Dalai Lama Audience · Mundgod' },
    { id: 'ev-mumbai',         num: '·', label: 'Jan 2026 · DMGP Diplomacy Awards · Mumbai' },
    { id: 'ev-nagpur',         num: '·', label: 'Jan 2026 · Buddhist Gala & Feeding the Poor · Nagpur' },
    { id: 'ev-walk-for-peace', num: '·', label: 'Feb 2026 · Walk for Peace & Aloha · Kolkata' },
    { id: 'ev-sister-nivedita',num: '·', label: 'Feb 2026 · Sister Nivedita University · Kolkata' },
    { id: 'ev-oman',           num: '·', label: 'Feb 2026 · IISA 2026 · Muscat, Oman' },
    { id: 'awards',        num: '05', label: 'Awards & Recognition' },
    { id: 'connect',       num: '06', label: 'Connect' },
    { id: 'finale',        num: '07', label: 'The Closing Frame' }
  ];

  /* ----- 1. Scroll-progress bar ----- */
  var progress = document.getElementById('scrollProgress');
  if (progress) {
    var pTick = false;
    function updateProgress() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      progress.style.width = pct + '%';
      pTick = false;
    }
    window.addEventListener('scroll', function () {
      if (!pTick) { requestAnimationFrame(updateProgress); pTick = true; }
    }, { passive: true });
    updateProgress();
  }

  /* ----- 2. Top nav scrolled-state ----- */
  var nav = document.getElementById('nav');
  if (nav) {
    function syncNav() {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    }
    window.addEventListener('scroll', syncNav, { passive: true });
    syncNav();
  }

  /* ----- 3. Mobile hamburger menu ----- */
  var menu = document.getElementById('mm');
  var hamb = document.getElementById('hamburger');
  var mmClose = document.getElementById('mmClose');

  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    document.body.classList.add('mm-open');
    menu.setAttribute('aria-hidden', 'false');
  }
  function closeMenu() {
    if (!menu) return;
    // Move focus out of the menu BEFORE hiding it (avoids aria-hidden + focused descendant warning)
    if (document.activeElement && menu.contains(document.activeElement)) {
      document.activeElement.blur();
      if (hamb) hamb.focus({ preventScroll: true });
    }
    menu.classList.remove('is-open');
    document.body.classList.remove('mm-open');
    menu.setAttribute('aria-hidden', 'true');
  }
  if (hamb) hamb.addEventListener('click', function () {
    if (menu && menu.classList.contains('is-open')) closeMenu(); else openMenu();
  });
  if (mmClose) mmClose.addEventListener('click', closeMenu);
  if (menu) {
    var mmLinks = menu.querySelectorAll('a');
    Array.prototype.forEach.call(mmLinks, function (a) {
      a.addEventListener('click', closeMenu);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (menu && menu.classList.contains('is-open')) closeMenu();
      if (sheet && sheet.classList.contains('is-open')) closeSheet();
    }
  });

  /* ----- 4. Chapter FAB + bottom sheet ----- */
  var fab = document.getElementById('chapterFab');
  var fabNum = document.getElementById('fabNum');
  var fabLab = document.getElementById('fabLab');
  var sheet = document.getElementById('sheet');
  var scrim = document.getElementById('sheetScrim');
  var sheetList = document.getElementById('sheetList');

  // Filter to chapters whose target exists on this page
  var valid = chapters.filter(function (c) { return document.getElementById(c.id); });

  if (fab && sheet && sheetList && valid.length) {
    // Build the sheet list
    valid.forEach(function (c) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.className = 'sheet-item';
      a.href = '#' + c.id;
      a.setAttribute('data-id', c.id);
      a.innerHTML =
        '<span class="sn">' + c.num + '</span>' +
        '<span class="sl">' + c.label + '</span>' +
        '<span class="sd" aria-hidden="true"></span>';
      a.addEventListener('click', function () { closeSheet(); });
      li.appendChild(a);
      sheetList.appendChild(li);
    });

    function openSheet() {
      sheet.classList.add('is-open');
      if (scrim) scrim.classList.add('is-open');
      sheet.setAttribute('aria-hidden', 'false');
      fab.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeSheet() {
      sheet.classList.remove('is-open');
      if (scrim) scrim.classList.remove('is-open');
      sheet.setAttribute('aria-hidden', 'true');
      fab.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    fab.addEventListener('click', function () {
      if (sheet.classList.contains('is-open')) closeSheet(); else openSheet();
    });
    if (scrim) scrim.addEventListener('click', closeSheet);

    // Swipe-down to close
    var startY = null;
    sheet.addEventListener('touchstart', function (e) {
      if (sheet.scrollTop > 0) return;
      startY = e.touches[0].clientY;
    }, { passive: true });
    sheet.addEventListener('touchmove', function (e) {
      if (startY === null) return;
      var dy = e.touches[0].clientY - startY;
      if (dy > 60) { closeSheet(); startY = null; }
    }, { passive: true });
    sheet.addEventListener('touchend', function () { startY = null; });

    /* IntersectionObserver — sync FAB + sheet + menu */
    var menuItems = menu ? menu.querySelectorAll('.mm-item[data-id]') : [];
    var menuIdMap = {};
    Array.prototype.forEach.call(menuItems, function (it) {
      menuIdMap[it.getAttribute('data-id')] = it;
    });
    var idToChapter = {};
    valid.forEach(function (c) { idToChapter[c.id] = c; });
    var currentId = null;

    function setActive(id) {
      if (id === currentId) return;
      currentId = id;
      var c = idToChapter[id];
      if (!c) return;
      if (fabNum) fabNum.textContent = c.num;
      if (fabLab) fabLab.textContent = c.label;
      // Sheet
      var sheetItems = sheetList.querySelectorAll('.sheet-item');
      Array.prototype.forEach.call(sheetItems, function (it) {
        it.classList.toggle('is-active', it.getAttribute('data-id') === id);
      });
      // Menu
      Array.prototype.forEach.call(menuItems, function (it) {
        it.classList.toggle('is-active', it.getAttribute('data-id') === id);
      });
    }

    // Init to first chapter
    setActive(valid[0].id);

    var observer = new IntersectionObserver(function (entries) {
      var best = null;
      var bestTop = Infinity;
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var t = Math.abs(e.boundingClientRect.top - window.innerHeight * 0.3);
          if (t < bestTop) { bestTop = t; best = e; }
        }
      });
      if (best) setActive(best.target.id);
    }, { rootMargin: '-30% 0px -50% 0px', threshold: 0 });

    valid.forEach(function (c) {
      var el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
  }

  /* ----- 5. Fade-up on scroll ----- */
  var fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    var fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          fadeObs.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: .05 });
    Array.prototype.forEach.call(fadeEls, function (el) { fadeObs.observe(el); });
  }

  /* ----- 6. YouTube facade — click-to-play (avoids Error 153 on file://) ----- */
  var ytWrap = document.getElementById('ytWrap');
  if (ytWrap) {
    var ytFacade = ytWrap.querySelector('.yt-facade');
    var ytId = ytWrap.getAttribute('data-yt');
    var isFileProtocol = window.location.protocol === 'file:';
    if (ytFacade && ytId) {
      ytFacade.addEventListener('click', function (e) {
        e.preventDefault();
        // On file:// the YouTube embed fails with Error 153 — open on YouTube instead
        if (isFileProtocol) {
          window.open('https://www.youtube.com/watch?v=' + ytId, '_blank', 'noopener,noreferrer');
          return;
        }
        // On http(s):// load the iframe in place
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0&modestbranding=1';
        iframe.title = 'International Leadership Presence — Los Angeles';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0';
        ytWrap.innerHTML = '';
        ytWrap.appendChild(iframe);
      });
    }
  }

  /* ----- 7. Gallery category filter ----- */
  var galleryFilters = document.querySelectorAll('.gallery-filter');
  var galleryItems = document.querySelectorAll('.masonry-item');
  if (galleryFilters.length && galleryItems.length) {
    Array.prototype.forEach.call(galleryFilters, function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-cat');
        Array.prototype.forEach.call(galleryFilters, function (b) { b.classList.toggle('is-on', b === btn); });
        Array.prototype.forEach.call(galleryItems, function (it) {
          var itemCats = (it.getAttribute('data-cat') || '').split(/\s+/);
          var match = cat === 'all' || itemCats.indexOf(cat) !== -1;
          if (match) it.removeAttribute('hidden'); else it.setAttribute('hidden', '');
        });
      });
    });
  }

})();
