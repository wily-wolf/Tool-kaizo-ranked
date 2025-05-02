document.addEventListener("DOMContentLoaded", () => {
  // Carica HTML
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      const temp = document.createElement('div');
      temp.innerHTML = data;
      document.body.insertBefore(temp.firstElementChild, document.body.firstChild);
    });

  // Carica CSS
  const link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = "navbar.css";
  document.head.appendChild(link);
});

// Aggiungi la funzione toggleMenu se non è già definita
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}
