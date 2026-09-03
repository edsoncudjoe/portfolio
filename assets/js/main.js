/* ============================================
   Email obfuscation — build mailto from parts
   so the raw address never appears in HTML
   ============================================ */

(function () {
  'use strict';

  var user = 'hello';
  var domain = 'edsoncudjoe';
  var tld = 'com';
  var addr = user + '@' + domain + '.' + tld;

  document.querySelectorAll('.email-link').forEach(function (el) {
    el.setAttribute('href', 'mailto:' + addr);
  });
})();

/* ============================================
   Minimal lightbox — vanilla JS, no libraries
   ESC / click-outside closes, arrows navigate
   ============================================ */

(function () {
  'use strict';

  const galleryLinks = document.querySelectorAll('.gallery-grid a');
  const lightbox = document.getElementById('lightbox');

  if (!galleryLinks.length || !lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const btnClose = lightbox.querySelector('.lightbox-close');
  const btnPrev = lightbox.querySelector('.lightbox-prev');
  const btnNext = lightbox.querySelector('.lightbox-next');

  const images = Array.from(galleryLinks).map(function (link) {
    const img = link.querySelector('img');
    return { src: link.getAttribute('href'), alt: img ? img.alt : '' };
  });

  let currentIndex = 0;

  function open(index) {
    currentIndex = index;
    show();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function show() {
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    show();
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
    show();
  }

  galleryLinks.forEach(function (link, index) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      open(index);
    });
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', function (e) { e.stopPropagation(); prev(); });
  btnNext.addEventListener('click', function (e) { e.stopPropagation(); next(); });

  // Click on the dark background (not the image) closes
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
