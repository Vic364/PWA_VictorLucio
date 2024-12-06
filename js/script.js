// Efecto de escritura
document.getElementById("typing-effect").style.color = "#f1fa8c";

const typingEffect = document.getElementById("typing-effect");
const textArray = ["En la ruta de ser un desarrollador."];
let textIndex = 0;
let charIndex = 0;
let typingTimer;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingEffect.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    typingTimer = setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEffect.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    typingTimer = setTimeout(erase, 100);
  } else {
    setTimeout(type, 1000);
  }
}

// Inicia el efecto de escritura
document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Navbar dinámica
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const navLinks = document.querySelectorAll(".nav-links ul li a");
const sections = document.querySelectorAll(".section");

// Alternar la barra lateral (móviles)
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Resaltar la sección activa al hacer scroll
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70; // Ajuste para la altura de la navbar
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Cierra el menú al seleccionar una sección (en móviles)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active");
    }
  });
});

// Detectar tamaño de la pantalla para ajustar la barra lateral
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("active");
  }
});


if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./serviceworker.js")
      .then((reg) => console.log("Service Worker registrado", reg))
      .catch((err) => console.error("Error al registrar el Service Worker:", err));
  }
  
  