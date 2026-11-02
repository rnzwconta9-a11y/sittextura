// Site estático: os downloads são servidos da própria pasta /downloads.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
