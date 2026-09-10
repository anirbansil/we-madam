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

    // Close the mobile menu after tapping a link.
    mobileMenu.querySelectorAll(".nav-link, .btn-turmeric").forEach((link) => {
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
      });
    });
  }

  /* ---------- gallery filter (gallery.html) ---------- */
  const filterPills = document.querySelectorAll("[data-filter]");
  if (filterPills.length) {
    filterPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const cat = pill.getAttribute("data-filter");
        filterPills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        document.querySelectorAll("[data-cat]").forEach((item) => {
          const show = cat === "All" || item.getAttribute("data-cat") === cat;
          item.hidden = !show;
        });
      });
    });
  }
})();
