const filterButtons = document.querySelectorAll(".filter-btn");
const spaceCards = document.querySelectorAll(".space-card");
const form = document.querySelector("#availabilityForm");
const formStatus = document.querySelector("#formStatus");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector("#mobileMenu");
const statValues = document.querySelectorAll(".stat-value");
const backToTop = document.querySelector(".back-to-top");
const heroMedia = document.querySelector(".hero-media");
const heroVideo = document.querySelector(".hero-video");
const socialTiles = document.querySelectorAll(".social-tile");
const workshopLightbox = document.querySelector("#workshopLightbox");
const workshopLightboxTrigger = document.querySelector(".news-gallery-trigger");
const workshopLightboxClose = document.querySelector(".lightbox-close");
const workshopLightboxStrip = document.querySelector(".lightbox-strip");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const resetToTop = () => {
  document.documentElement.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
  window.setTimeout(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
    document.body.style.scrollBehavior = "";
  }, 120);
};

window.addEventListener("pageshow", resetToTop);
window.addEventListener("load", resetToTop);
window.addEventListener("DOMContentLoaded", resetToTop);

if (heroVideo && heroMedia && /^https?:$/.test(window.location.protocol)) {
  heroVideo.addEventListener("load", () => {
    heroMedia.classList.add("video-loaded");
  }, { once: true });

  const videoUrl = new URL(heroVideo.dataset.src);
  videoUrl.searchParams.set("origin", window.location.origin);
  heroVideo.src = videoUrl.toString();
}

socialTiles.forEach((tile) => {
  const image = tile.querySelector("img");
  const label = tile.querySelector("div");
  if (!image || !label || tile.querySelector(".tile-flipper")) return;

  const flipper = document.createElement("div");
  flipper.className = "tile-flipper";

  const front = document.createElement("div");
  front.className = "tile-face tile-front";

  const back = document.createElement("div");
  back.className = "tile-face tile-back";
  back.innerHTML = `<span>${tile.dataset.logo || ""}</span><strong>${tile.dataset.company || ""}</strong>`;

  front.append(image, label);
  flipper.append(front, back);
  tile.append(flipper);
});

const setWorkshopLightboxOpen = (isOpen) => {
  if (!workshopLightbox) return;

  workshopLightbox.classList.toggle("is-open", isOpen);
  workshopLightbox.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("modal-open", isOpen);

  if (isOpen) {
    if (workshopLightboxStrip) workshopLightboxStrip.scrollLeft = 0;
    workshopLightboxStrip?.focus({ preventScroll: true });
  } else {
    workshopLightboxTrigger?.focus({ preventScroll: true });
  }
};

workshopLightboxTrigger?.addEventListener("click", () => {
  setWorkshopLightboxOpen(true);
});

workshopLightboxClose?.addEventListener("click", () => {
  setWorkshopLightboxOpen(false);
});

workshopLightbox?.addEventListener("click", (event) => {
  if (event.target === workshopLightbox) setWorkshopLightboxOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && workshopLightbox?.classList.contains("is-open")) {
    setWorkshopLightboxOpen(false);
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });

    spaceCards.forEach((card) => {
      const kinds = card.dataset.kind || "";
      const matches = filter === "all" || kinds.split(" ").includes(filter);
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const space = String(data.get("space") || "space").toLowerCase();
    formStatus.textContent = `Thanks. Your ${space} request is ready to send in the production build.`;
    form.reset();
  });
}

const setMenuOpen = (isOpen) => {
  if (!siteHeader || !menuToggle || !mobileMenu) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  siteHeader.classList.toggle("menu-open", isOpen);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.tabIndex = isOpen ? 0 : -1;
  });
};

if (menuToggle && mobileMenu && siteHeader) {
  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.contains(event.target)) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

const easeOut = (value) => 1 - Math.pow(1 - value, 3);

const animateNumber = (element) => {
  const finalValue = Number(element.dataset.final);
  const suffix = element.dataset.suffix || "";
  const start = performance.now();
  const duration = 1200;

  const tick = (now) => {
    const progress = easeOut(Math.min((now - start) / duration, 1));
    element.textContent = `${Math.round(finalValue * progress).toLocaleString("en-US")}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window) {
  const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateNumber(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  statValues.forEach((stat) => statObserver.observe(stat));
} else {
  statValues.forEach((stat) => {
    stat.textContent = `${Number(stat.dataset.final).toLocaleString("en-US")}${stat.dataset.suffix || ""}`;
  });
}

if (backToTop) {
  const updateBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 520);
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  window.addEventListener("load", updateBackToTop);
}
