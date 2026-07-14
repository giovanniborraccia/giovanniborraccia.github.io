/* ---------------------------------------------------------------------
   Giovanni Borraccia — site behaviour
   1. Dark-mode toggle (remembers choice, respects OS preference)
   2. Current year in the footer
   3. Gentle reveal-on-scroll for sections
   4. Guard against clicking unfinished "#" placeholder links
   ------------------------------------------------------------------- */

(function () {
  "use strict";

  /* ---------- 1. Theme ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  // Start from a saved choice, otherwise follow the operating system.
  var saved = localStorage.getItem("theme");
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  /* ---------- 2. Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 3. Reveal on scroll ---------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".section");
    targets.forEach(function (el) { el.classList.add("reveal"); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 4. Placeholder-link guard ---------- */
  // Any link still pointing at "#" (a data-todo you haven't filled in)
  // gets a small nudge instead of jumping to the top of the page.
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var what = a.getAttribute("data-todo") || "this link";
      console.warn("Placeholder link not set yet: " + what);
    });
  });
})();
