var hamb = document.querySelector(".hamb");
var clicked_menu = document.querySelector(".clicked_menu")

clicked_menu.addEventListener('click', function () {
	console.log("test")

	hamb.classList.toggle("active");


})