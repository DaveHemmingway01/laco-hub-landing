const filterButtons = document.querySelectorAll(".filter-btn");
const spaceCards = document.querySelectorAll(".space-card");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector("#mobileMenu");
const statValues = document.querySelectorAll(".stat-value");
const backToTop = document.querySelector(".back-to-top");
const heroMedia = document.querySelector(".hero-media");
const heroVideo = document.querySelector(".hero-video");
const tenantTiles = document.querySelectorAll(".social-tile");
const workshopLightbox = document.querySelector("#workshopLightbox");
const workshopLightboxTrigger = document.querySelector(".news-gallery-trigger");
const workshopLightboxClose = document.querySelector(".lightbox-close");
const workshopLightboxStrip = document.querySelector(".lightbox-strip");
const languageButtons = document.querySelectorAll("[data-lang]");
const newsletterForm = document.querySelector("#newsletterForm");
const newsletterFrame = document.querySelector('iframe[name="newsletterSubmission"]');
const newsletterSuccess = document.querySelector("#newsletterSuccess");
const newsletterLanguage = document.querySelector("#newsletterLanguage");
const communityList = document.querySelector(".community-section .check-list");
const availabilityForm = document.querySelector("#availabilityForm");
const availabilityFrame = document.querySelector('iframe[name="availabilitySubmission"]');
const availabilityLanguage = document.querySelector("#availabilityLanguage");
const formStatus = document.querySelector("#formStatus");

const translations = {
  en: {
    "meta.title": "Laco Hub Lagos | Flexible Business Space",
    "meta.description": "Laco Hub Lagos offers flexible offices, workshops, logistics and light industrial space near the N125 and A22.",
    "nav.spaces": "Spaces",
    "nav.community": "Community",
    "nav.life": "Tenants",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "cta.availability": "Check availability",
    "cta.explore": "Explore spaces",
    "menu.label": "Menu",
    "hero.title": "Work,\ncreate, build\nand grow in Lagos.",
    "hero.copy": "Flexible offices, workshops, logistics and light industrial spaces inside a factory-turned-business and culture hub near the N125 and A22.",
    "stats.covered": "covered area",
    "stats.exterior": "exterior area",
    "stats.access": "fast access",
    "stats.parking": "for teams and logistics",
    "spaces.title": "Choose the right base for the work you do.",
    "spaces.copy": "Start with a use case, then talk to the Laco team about size, utilities, access and availability.",
    "filter.all": "All",
    "filter.quiet": "Quiet work",
    "filter.industrial": "Industrial",
    "filter.logistics": "Logistics",
    "space.office.eyebrow": "Quiet work",
    "space.office.title": "Offices",
    "space.office.copy": "Move-in ready rooms for teams, operators and growing local companies.",
    "space.workshop.eyebrow": "Industrial",
    "space.workshop.title": "Workshops",
    "space.workshop.copy": "Practical units for makers, trades, repairs and production activity.",
    "space.storage.eyebrow": "Logistics",
    "space.storage.title": "Storage and fulfilment",
    "space.storage.copy": "Covered and exterior capacity close to Lagos, the N125 and A22.",
    "space.industry.eyebrow": "Industrial + logistics",
    "space.industry.title": "Light industry",
    "space.industry.copy": "Flexible space for companies that need power, access and room to work.",
    "community.title": "A productive base with a local pulse.",
    "community.copy": "Laco Hub brings businesses into one practical campus with a cantina, shared facilities and everyday chances to meet the people building in Lagos.",
    "community.item1": "Shared cantina and common areas",
    "community.item2": "Business neighbours across trades and services",
    "community.item3": "Markets, workshops and tenant stories",
    "community.item4": "Simple access for people, vehicles and deliveries",
    "life.title": "Entrepreneurs at Laco Hub.",
    "life.copy": "Meet the makers, food brands, artists, workshop operators and local businesses building from the hub.",
    "life.follow": "Follow tenant stories",
    "life.swipe": "Swipe for more",
    "location.title": "Easy to reach. Easy to operate from.",
    "location.copy": "Close to Lagos and positioned by the N125, with fast connection to the A22. Built for teams, vehicles, storage and daily operations.",
    "location.lagos": "nearby city access",
    "location.n125": "national road frontage",
    "location.a22": "regional connection",
    "location.parkingTitle": "Parking",
    "location.parkingCopy": "on-site capacity",
    "map.title": "Find Laco on the map",
    "map.copy": "Open route, save the pin, send it to your team.",
    "map.action": "Open Maps",
    "contact.title": "Tell us what kind of space you need.",
    "contact.copy": "Share the basics and the Laco team can match your business with the right office, workshop, storage or industrial option.",
    "contact.noteTitle": "Useful to include",
    "contact.noteCopy": "Space size, vehicle access, utilities, timing and team size.",
    "form.name": "Name",
    "form.email": "Email",
    "form.space": "Space type",
    "form.optionOffice": "Office",
    "form.optionWorkshop": "Workshop",
    "form.optionStorage": "Logistics & storage",
    "form.optionIndustry": "Light industry",
    "form.optionUnsure": "Not sure yet",
    "form.message": "What do you need?",
    "form.submit": "Request availability",
    "form.success": "Thank you. Your request has been sent to the Laco Hub team.",
    "newsletter.eyebrow": "From the hub",
    "newsletter.title": "Stay in the loop.",
    "newsletter.copy": "Occasional updates on new spaces, people and happenings at Laco Hub.",
    "newsletter.email": "Email address",
    "newsletter.consent": "I would like to receive occasional Laco Hub news by email.",
    "newsletter.submit": "Subscribe",
    "newsletter.successTitle": "Thank you.",
    "newsletter.successCopy": "You are now on the Laco Hub update list.",
    "news.title": "News from the hub.",
    "news.copy": "Keep the site fresh with unit openings, tenants, markets, workshops and availability updates.",
    "news.workshop.eyebrow": "Workshop update",
    "news.workshop.title": "New workshop spaces under construction",
    "news.workshop.copy": "The build is moving. Ask us for sizes, timing and availability, or open the latest photo update.",
    "news.workshop.action": "View photos",
    "news.events.eyebrow": "Events",
    "news.events.title": "Markets, food and open days",
    "news.events.copy": "Bring the Instagram energy onto the website and drive visits.",
    "news.community.eyebrow": "Community",
    "news.community.title": "Meet the makers at Laco",
    "news.community.copy": "Feature tenants, artists and operators using the hub every week.",
    "footer.tagline": "Flexible business space near Lagos, Portugal.",
    "footer.address": "Address",
    "footer.email": "Email us",
    "footer.credit": "© 2026 All rights reserved, Laco hub website is powered by Davinci Studio",
    "lightbox.eyebrow": "Workshop update",
    "lightbox.title": "New spaces under construction",
    "lightbox.copy": "Scroll sideways through the latest build photos. Ask us for sizes, timing and availability.",
    "lightbox.caption1": "Workshop framing overview",
    "lightbox.caption2": "Units taking shape",
    "lightbox.caption3": "Fresh workshop interiors",
    "lightbox.caption4": "Construction detail",
    "top.label": "Top"
  },
  pt: {
    "meta.title": "Laco Hub Lagos | Espaços flexíveis para negócios",
    "meta.description": "O Laco Hub Lagos oferece escritórios, oficinas, logística e espaços industriais ligeiros perto da N125 e da A22.",
    "nav.spaces": "Espaços",
    "nav.community": "Comunidade",
    "nav.life": "Inquilinos",
    "nav.location": "Localização",
    "nav.contact": "Contacto",
    "cta.availability": "Ver disponibilidade",
    "cta.explore": "Explorar espaços",
    "menu.label": "Menu",
    "hero.title": "Trabalhe, crie,\nconstrua e cresça\nem Lagos.",
    "hero.copy": "Escritórios, oficinas, logística e espaços industriais ligeiros dentro de uma antiga fábrica transformada em hub de negócios e cultura, perto da N125 e da A22.",
    "stats.covered": "área coberta",
    "stats.exterior": "área exterior",
    "stats.access": "acesso rápido",
    "stats.parking": "para equipas e logística",
    "spaces.title": "Escolha a base certa para o seu trabalho.",
    "spaces.copy": "Comece pelo tipo de utilização e fale com a equipa Laco sobre dimensão, infraestruturas, acesso e disponibilidade.",
    "filter.all": "Todos",
    "filter.quiet": "Trabalho tranquilo",
    "filter.industrial": "Industrial",
    "filter.logistics": "Logística",
    "space.office.eyebrow": "Trabalho tranquilo",
    "space.office.title": "Escritórios",
    "space.office.copy": "Salas prontas a usar para equipas, operadores e empresas locais em crescimento.",
    "space.workshop.eyebrow": "Industrial",
    "space.workshop.title": "Oficinas",
    "space.workshop.copy": "Unidades práticas para makers, ofícios, reparações e produção.",
    "space.storage.eyebrow": "Logística",
    "space.storage.title": "Armazenamento e fulfilment",
    "space.storage.copy": "Capacidade coberta e exterior perto de Lagos, da N125 e da A22.",
    "space.industry.eyebrow": "Industrial + logística",
    "space.industry.title": "Indústria ligeira",
    "space.industry.copy": "Espaços flexíveis para empresas que precisam de energia, acesso e espaço para trabalhar.",
    "community.title": "Uma base produtiva com pulso local.",
    "community.copy": "O Laco Hub junta empresas num campus prático com cantina, espaços partilhados e oportunidades diárias para conhecer quem está a construir em Lagos.",
    "community.item1": "Cantina e áreas comuns partilhadas",
    "community.item2": "Vizinhos de negócio de vários setores",
    "community.item3": "Mercados, workshops e histórias de inquilinos",
    "community.item4": "Acesso simples para pessoas, veículos e entregas",
    "life.title": "Empreendedores no Laco Hub.",
    "life.copy": "Conheça makers, marcas de comida, artistas, operadores de oficinas e negócios locais a crescer no hub.",
    "life.follow": "Seguir histórias dos inquilinos",
    "life.swipe": "Deslize para ver mais",
    "location.title": "Fácil de chegar. Fácil de operar.",
    "location.copy": "Perto de Lagos e junto à N125, com ligação rápida à A22. Pensado para equipas, veículos, armazenamento e operações diárias.",
    "location.lagos": "acesso próximo à cidade",
    "location.n125": "frente para estrada nacional",
    "location.a22": "ligação regional",
    "location.parkingTitle": "Estacionamento",
    "location.parkingCopy": "capacidade no local",
    "map.title": "Ver o Laco no mapa",
    "map.copy": "Abra a rota, guarde o pin e envie à sua equipa.",
    "map.action": "Abrir Maps",
    "contact.title": "Diga-nos que tipo de espaço precisa.",
    "contact.copy": "Partilhe o essencial e a equipa Laco ajuda a encontrar o escritório, oficina, armazenamento ou espaço industrial certo.",
    "contact.noteTitle": "Útil incluir",
    "contact.noteCopy": "Dimensão do espaço, acesso para veículos, infraestruturas, timing e dimensão da equipa.",
    "form.name": "Nome",
    "form.email": "Email",
    "form.space": "Tipo de espaço",
    "form.optionOffice": "Escritório",
    "form.optionWorkshop": "Oficina",
    "form.optionStorage": "Logística e armazenamento",
    "form.optionIndustry": "Indústria ligeira",
    "form.optionUnsure": "Ainda não sei",
    "form.message": "O que precisa?",
    "form.submit": "Pedir disponibilidade",
    "form.success": "Obrigado. O seu pedido foi enviado para a equipa Laco Hub.",
    "newsletter.eyebrow": "Do hub",
    "newsletter.title": "Fique a par.",
    "newsletter.copy": "Atualizações ocasionais sobre novos espaços, pessoas e acontecimentos no Laco Hub.",
    "newsletter.email": "Endereço de email",
    "newsletter.consent": "Quero receber notícias ocasionais do Laco Hub por email.",
    "newsletter.submit": "Subscrever",
    "newsletter.successTitle": "Obrigado.",
    "newsletter.successCopy": "Já faz parte da lista de atualizações do Laco Hub.",
    "news.title": "Notícias do hub.",
    "news.copy": "Mantenha-se a par de novas unidades, inquilinos, mercados, workshops e disponibilidade.",
    "news.workshop.eyebrow": "Atualização das oficinas",
    "news.workshop.title": "Novos espaços de oficina em construção",
    "news.workshop.copy": "A obra está a avançar. Peça-nos áreas, timings e disponibilidade, ou veja a atualização fotográfica.",
    "news.workshop.action": "Ver fotos",
    "news.events.eyebrow": "Eventos",
    "news.events.title": "Mercados, comida e dias abertos",
    "news.events.copy": "Trazemos a energia do Instagram para o website e criamos motivos para visitar.",
    "news.community.eyebrow": "Comunidade",
    "news.community.title": "Conheça os makers do Laco",
    "news.community.copy": "Destaque para inquilinos, artistas e operadores que usam o hub todas as semanas.",
    "footer.tagline": "Espaço flexível para negócios perto de Lagos, Portugal.",
    "footer.address": "Morada",
    "footer.email": "Envie-nos um email",
    "footer.credit": "© 2026 Todos os direitos reservados, website Laco Hub powered by Davinci Studio",
    "lightbox.eyebrow": "Atualização das oficinas",
    "lightbox.title": "Novos espaços em construção",
    "lightbox.copy": "Deslize lateralmente pelas fotos mais recentes da obra. Peça-nos áreas, timings e disponibilidade.",
    "lightbox.caption1": "Vista geral da estrutura das oficinas",
    "lightbox.caption2": "Unidades a ganhar forma",
    "lightbox.caption3": "Interiores recentes das oficinas",
    "lightbox.caption4": "Detalhe de construção",
    "top.label": "Topo"
  }
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const getTranslation = (key, lang = document.documentElement.lang) => {
  return translations[lang]?.[key] || translations.en[key] || "";
};

const setLanguage = (lang) => {
  const nextLang = translations[lang] ? lang : "en";
  document.documentElement.lang = nextLang;
  document.title = getTranslation("meta.title", nextLang);

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", getTranslation("meta.description", nextLang));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = getTranslation(element.dataset.i18n, nextLang);
    if (text) element.textContent = text;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === nextLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (newsletterLanguage) newsletterLanguage.value = nextLang;
  if (availabilityLanguage) availabilityLanguage.value = nextLang;
  if (formStatus?.dataset.state === "success") {
    formStatus.textContent = getTranslation("form.success", nextLang);
  }

  localStorage.setItem("laco-language", nextLang);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(localStorage.getItem("laco-language") || "en");

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
    window.setTimeout(() => {
      heroMedia.classList.add("video-loaded");
    }, 2200);
  }, { once: true });

  const videoUrl = new URL(heroVideo.dataset.src);
  videoUrl.searchParams.set("origin", window.location.origin);
  heroVideo.src = videoUrl.toString();
}

tenantTiles.forEach((tile) => {
  const front = tile.querySelector(".tile-front");
  if (!front) return;

  front.addEventListener("click", () => {
    tile.classList.toggle("is-flipped");
  });

  front.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      tile.classList.remove("is-flipped");
      front.focus();
    }
  });
});

let newsletterPending = false;

newsletterForm?.addEventListener("submit", () => {
  newsletterPending = true;
});

newsletterFrame?.addEventListener("load", () => {
  if (!newsletterPending || !newsletterForm || !newsletterSuccess) return;

  newsletterForm.hidden = true;
  newsletterSuccess.hidden = false;
});

let availabilityPending = false;

availabilityForm?.addEventListener("submit", () => {
  availabilityPending = true;
  if (formStatus) formStatus.textContent = "";
});

availabilityFrame?.addEventListener("load", () => {
  if (!availabilityPending || !availabilityForm || !formStatus) return;

  availabilityForm.reset();
  if (availabilityLanguage) availabilityLanguage.value = document.documentElement.lang;
  formStatus.dataset.state = "success";
  formStatus.textContent = getTranslation("form.success");
  availabilityPending = false;
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

const setMenuOpen = (isOpen) => {
  if (!siteHeader || !menuToggle || !mobileMenu) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  siteHeader.classList.toggle("menu-open", isOpen);

  mobileMenu.querySelectorAll("a, button").forEach((item) => {
    item.tabIndex = isOpen ? 0 : -1;
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

if (communityList) {
  communityList.classList.add("is-animated");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    communityList.classList.add("is-revealed");
  } else if ("IntersectionObserver" in window) {
    const communityObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    communityObserver.observe(communityList);
  } else {
    communityList.classList.add("is-revealed");
  }
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
