const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

const iconHam = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", false);
  } else {
    navToggle.setAttribute("aria-expanded", true);
  }
  primaryNav.toggleAttribute("data-visible");
  iconClose.toggleAttribute("data-visible");
  iconHam.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false,
      // arrows: true,
    },
  },
});
