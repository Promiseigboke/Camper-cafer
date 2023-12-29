setTimeout(function() {
// Hide the preloader and show the content.
document.querySelector(".preloader").style.display = "none";
document.getElementById("content").classList.remove("hidden");
}, 1000)
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
} 