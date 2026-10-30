
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");

  const icon = menuBtn.querySelector("i");

  if (navbar.classList.contains("open")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
});

// Close menu after clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");

    const icon = menuBtn.querySelector("i");
    icon.classList.replace("fa-xmark", "fa-bars");

    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Typing Animation
const typingElement = document.getElementById("typing");

const roles = [
  "Java Full Stack Developer",
  "Software Developer",
  "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentRole.substring(0, charIndex);

  let delay = deleting ? 45 : 90;

  if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    delay = 1400;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeRole, delay);
}

typeRole();

// Active Navigation on Scroll
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {
  let currentSection = "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
});
