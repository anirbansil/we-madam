// ==========================================================================
// We Madam — shared site behavior (navbar, scroll reveal, interactions)
// ==========================================================================
(function () {
  "use strict";

  /* ---------- footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- navbar scroll state ---------- */
  const nav = document.querySelector(".site-nav");
  const mobileMenu = document.getElementById("mobileMenu");

  function updateNavState() {
    if (!nav) return;
    const scrolled = window.scrollY > 60;
    nav.classList.toggle("is-scrolled", scrolled);
  }
  updateNavState();
  window.addEventListener("scroll", updateNavState, { passive: true });

  if (mobileMenu && nav) {
    mobileMenu.addEventListener("show.bs.collapse", () => nav.classList.add("is-open"));
    mobileMenu.addEventListener("hidden.bs.collapse", () => nav.classList.remove("is-open"));

    // Stagger the mobile link entrance each time the menu opens.
    const mobileLinks = mobileMenu.querySelectorAll(".nav-link, .btn-turmeric");
    mobileMenu.addEventListener("show.bs.collapse", () => {
      mobileLinks.forEach((link, i) => {
        link.style.transition = "none";
        link.style.opacity = "0";
        link.style.transform = "translateX(-16px)";
        requestAnimationFrame(() => {
          link.style.transition = `opacity .35s ease ${i * 0.06}s, transform .35s ease ${i * 0.06}s`;
          link.style.opacity = "1";
          link.style.transform = "translateX(0)";
        });
      });
    });

    // Close the mobile menu after tapping a link (but not the Our Units toggle).
    mobileMenu.querySelectorAll(".nav-link:not(.units-toggle), .btn-turmeric").forEach((link) => {
      link.addEventListener("click", () => {
        const collapse = bootstrap.Collapse.getOrCreateInstance(mobileMenu);
        collapse.hide();
      });
    });
  }

  /* ---------- active nav link for current page ---------- */
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".site-nav [data-nav-link]").forEach((link) => {
    const target = (link.getAttribute("data-nav-link") || "").toLowerCase();
    if (target === page || (target === "index.html" && page === "")) {
      link.classList.add("active");
    }
  });
  document.querySelectorAll(".site-nav [data-nav-group]").forEach((link) => {
    const group = (link.getAttribute("data-nav-group") || "")
      .toLowerCase()
      .split(",")
      .map((s) => s.trim());
    if (group.includes(page)) link.classList.add("active");
  });

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute("data-delay");
            if (delay) el.style.transitionDelay = `${delay}s`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- staggered reveal groups (children get incremental delay) ---------- */
  document.querySelectorAll("[data-reveal-stagger]").forEach((group) => {
    const step = parseFloat(group.getAttribute("data-reveal-stagger")) || 0.12;
    Array.from(group.children).forEach((child, i) => {
      if (child.hasAttribute("data-reveal")) {
        child.setAttribute("data-delay", (i * step).toFixed(2));
      }
    });
  });

  /* ---------- guest count picker (reserve form) ---------- */
  document.querySelectorAll("[data-guest-group]").forEach((group) => {
    const buttons = group.querySelectorAll(".guest-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const hidden = group.parentElement.querySelector('input[name="guests"]');
        if (hidden) hidden.value = btn.textContent.trim();
      });
    });
  });

  /* ---------- generic "fake submit" forms (reserve + contact) ---------- */
  document.querySelectorAll("form[data-fake-submit]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const wrapper = form.closest("[data-form-wrapper]") || form.parentElement;
      const success = wrapper.querySelector(".form-success");
      form.style.display = "none";
      if (success) success.classList.add("active");
    });
  });

  /* ---------- menu category tabs ---------- */
  const menuTabs = document.querySelectorAll("[data-menu-tab]");
  const menuWordEl = document.querySelector("[data-menu-word-target]");
  if (menuTabs.length) {
    menuTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-menu-tab");
        menuTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        document.querySelectorAll("[data-menu-panel]").forEach((panel) => {
          const isTarget = panel.getAttribute("data-menu-panel") === targetId;
          panel.classList.toggle("active", isTarget);
          if (isTarget) {
            panel.querySelectorAll(".menu-card").forEach((card, i) => {
              card.style.animation = "none";
              card.offsetHeight; // reflow to restart animation
              card.style.animationDelay = `${i * 0.08}s`;
              card.style.animation = "";
            });
          }
        });
        if (menuWordEl) {
          const word = tab.getAttribute("data-menu-word");
          if (word) {
            menuWordEl.style.transition = "none";
            menuWordEl.style.opacity = "0";
            requestAnimationFrame(() => {
              menuWordEl.textContent = word;
              menuWordEl.style.transition = "opacity .4s ease";
              menuWordEl.style.opacity = "1";
            });
          }
        }
      });
    });
  }

  /* ---------- gallery unit tabs (gallery.html) ---------- */
  const unitTabs = document.querySelectorAll("[data-unit-tab]");
  if (unitTabs.length) {
    unitTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-unit-tab");
        unitTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        document.querySelectorAll("[data-unit-panel]").forEach((panel) => {
          const isTarget = panel.getAttribute("data-unit-panel") === targetId;
          panel.classList.toggle("active", isTarget);
        });
      });
    });
  }

  /* ---------- mobile "Our Units" submenu toggle ---------- */
  document.querySelectorAll(".units-toggle").forEach((btn) => {
    const sublist = document.getElementById(btn.getAttribute("aria-controls"));
    if (!sublist) return;
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      sublist.hidden = open;
    });
  });
})();
