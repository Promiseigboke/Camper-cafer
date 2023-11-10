setTimeout(function() {
// Hide the preloader and show the content.
document.querySelector(".preloader").style.display = "none";
document.getElementById("content").classList.remove("hidden");
}, 3000)