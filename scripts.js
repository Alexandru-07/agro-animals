const feeds = {
  cow: {
    eyebrow: "Dairy formulation",
    title: "OmegaRich Dairy Feed",
    description:
      "Steamed barley, cold-pressed flax, and seaweed minerals designed for smooth milk flow and glossy coats.",
    tag: "High-energy ration",
    image:
      "https://plus.unsplash.com/premium_photo-1664297469065-996f5c9795ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZGFpcnklMjBjb3dzJTIwaGF5fGVufDB8fHx8MTc2MzI0OTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dairy cows eating hay inside a bright barn",
    highlights: ["Nori mineral top-dress", "Active probiotic culture", "Milk solids boost"],
    nutrition: {
      protein: "18%",
      fiber: "24%",
      minerals: "5:1 Ca:P",
    },
  },
  chicken: {
    eyebrow: "Poultry menu",
    title: "Golden Layer Grain Mix",
    description:
      "Dual-texture crumble with turmeric oils and citrus zest that keeps yolks rich and shells resilient.",
    tag: "Layer feed",
    image:
      "https://plus.unsplash.com/premium_photo-1661834559466-63eea5f1d858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aGVucyUyMGZlZWR8ZW58MHx8fHwxNzYzMjQ5ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Flock of hens gathered for feed outdoors",
    highlights: ["Fermented kelp crumble", "Electrolyte mist sachets", "Retail egg sleeves"],
    nutrition: {
      protein: "19%",
      fiber: "8%",
      minerals: "Calcium 4.3%",
    },
  },
  goat: {
    eyebrow: "Fiber herd focus",
    title: "Herbal Loom Pellets",
    description:
      "Alpine herbs, lupin protein, and chelated copper to keep cashmere coats bright and strong.",
    tag: "Caprine pellets",
    image:
      "https://plus.unsplash.com/premium_photo-1663127629083-0b03ba984d92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Z29hdCUyMGVhdGluZ3xlbnwwfHx8fDE3NjMyNDk4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "White goat eating fresh greens from a basket",
    highlights: ["Chamomile calm cubes", "Portable tasting kit", "Custom swing tags"],
    nutrition: {
      protein: "16%",
      fiber: "22%",
      minerals: "Zn 120 ppm",
    },
  },
  horse: {
    eyebrow: "Equine performance",
    title: "Velocity Oats + Fiber",
    description:
      "Slow-cooked oats with beet pulp, chia, and joint botanicals for high-output arenas and tours.",
    tag: "Sport ration",
    image:
      "https://plus.unsplash.com/premium_photo-1722528215557-74219f77d711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aG9yc2UlMjBlYXRpbmd8ZW58MHx8fHwxNzYzMjQ5ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Brown horse grazing on lush grass near a fence",
    highlights: ["Electrolyte soft chews", "Show-ring sampling kit", "QR training plan"],
    nutrition: {
      protein: "14%",
      fiber: "28%",
      minerals: "MSM + Vit E",
    },
  },
};

const accessories = [
  {
    eyebrow: "Halter & lead",
    title: "ContourFit Halter duo",
    description:
      "Double-layered leather halter with brass hardware and detachable reflective lead for twilight walks.",
    image:
      "https://plus.unsplash.com/premium_photo-1733342531000-a99857bd088a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aG9yc2UlMjBoYWx0ZXJ8ZW58MHx8fHwxNzYzMjQ5ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Grey horse wearing a red halter outdoors",
    highlights: ["Memory-foam crown", "Quick-swap buckles", "Monogram-ready tabs"],
  },
  {
    eyebrow: "Lighting suite",
    title: "Lumen Barn Halo",
    description:
      "Low-surge LED pendants with adjustable warmth so milk inspections and foal care feel calm day or night.",
    image:
      "https://plus.unsplash.com/premium_photo-1731623107496-6381090519aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8YmFybiUyMGxpZ2h0aW5nfGVufDB8fHx8MTc2MzI0OTg4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Warm pendant lights hanging from a barn ceiling",
    highlights: ["Auto circadian presets", "Anti-dust coating", "Power usage dashboard"],
  },
  {
    eyebrow: "Grooming ritual",
    title: "Velvet Grooming Suite",
    description:
      "Anodized brushes, detangling mist, and saddle cloth story cards that turn grooming into a branded moment.",
    image:
      "https://plus.unsplash.com/premium_photo-1664359132068-01d2714648c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aG9yc2UlMjBncm9vbWluZ3xlbnwwfHx8fDE3NjMyNDk4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Person brushing a horse with a grooming brush",
    highlights: ["Dual-finish brushes", "Signature aroma oil", "Retail-ready kit bag"],
  },
];

const feedButtons = document.querySelectorAll(".food-tab");
const foodImage = document.getElementById("food-image");
const foodTag = document.getElementById("food-tag");
const foodEyebrow = document.getElementById("food-eyebrow");
const foodTitle = document.getElementById("food-title");
const foodDescription = document.getElementById("food-description");
const foodHighlights = document.getElementById("food-highlights");
const foodProtein = document.getElementById("food-protein");
const foodFiber = document.getElementById("food-fiber");
const foodMinerals = document.getElementById("food-minerals");

const accessoryImage = document.getElementById("accessory-image");
const accessoryEyebrow = document.getElementById("accessory-eyebrow");
const accessoryTitle = document.getElementById("accessory-title");
const accessoryDescription = document.getElementById("accessory-description");
const accessoryHighlights = document.getElementById("accessory-highlights");
const accessoryIndicator = document.getElementById("accessory-indicator");
const accessoryNavButtons = document.querySelectorAll(".accessory-nav");

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector(".contact-form");
const formResponse = document.getElementById("form-response");
const footerYear = document.getElementById("year");

let currentAccessory = 0;

const renderFeed = (key) => {
  const feed = feeds[key];
  if (!feed) return;

  feedButtons.forEach((button) => {
    const isActive = button.dataset.feed === key;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  foodImage.src = feed.image;
  foodImage.alt = feed.alt;
  foodTag.textContent = feed.tag;
  foodEyebrow.textContent = feed.eyebrow;
  foodTitle.textContent = feed.title;
  foodDescription.textContent = feed.description;

  foodHighlights.innerHTML = "";
  feed.highlights.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    foodHighlights.appendChild(li);
  });

  foodProtein.textContent = feed.nutrition.protein;
  foodFiber.textContent = feed.nutrition.fiber;
  foodMinerals.textContent = feed.nutrition.minerals;
};

const hydrateAccessoryDots = () => {
  if (!accessoryIndicator) return;
  accessoryIndicator.innerHTML = "";
  accessories.forEach((_item, index) => {
    const dot = document.createElement("span");
    if (index === currentAccessory) {
      dot.classList.add("active");
    }
    accessoryIndicator.appendChild(dot);
  });
};

const renderAccessory = (index) => {
  const accessory = accessories[index];
  if (!accessory) return;

  accessoryImage.src = accessory.image;
  accessoryImage.alt = accessory.alt;
  accessoryEyebrow.textContent = accessory.eyebrow;
  accessoryTitle.textContent = accessory.title;
  accessoryDescription.textContent = accessory.description;

  accessoryHighlights.innerHTML = "";
  accessory.highlights.forEach((detail) => {
    const li = document.createElement("li");
    li.textContent = detail;
    accessoryHighlights.appendChild(li);
  });

  currentAccessory = index;
  hydrateAccessoryDots();
  if (accessoryIndicator) {
    Array.from(accessoryIndicator.children).forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === currentAccessory);
    });
  }
};

feedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { feed } = button.dataset;
    renderFeed(feed);
  });
});

accessoryNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.direction === "next" ? 1 : -1;
    const nextIndex = (currentAccessory + direction + accessories.length) % accessories.length;
    renderAccessory(nextIndex);
  });
});

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const smoothScrollTriggers = document.querySelectorAll('a[href^="#"]:not([href="#"]), [data-scroll]');

smoothScrollTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const targetSelector = trigger.dataset.scroll || trigger.getAttribute("href");
    if (!targetSelector || !targetSelector.startsWith("#")) {
      return;
    }
    const target = document.querySelector(targetSelector);
    if (!target) return;

    event.preventDefault();
    navLinks?.classList.remove("open");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameField = contactForm.querySelector('input[name="name"]');
  const name = nameField?.value.trim() || "friend";
  if (formResponse) {
    formResponse.textContent = `Thanks, ${name}! I’ll send a tailored proposal shortly.`;
  }
  contactForm.reset();
});

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// initial render
renderFeed("cow");
renderAccessory(0);
