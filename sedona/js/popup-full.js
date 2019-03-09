var nojs = document.querySelector(".nojs");
var link = document.querySelector(".open-form-button");
var popup = document.querySelector(".search-form-field");

nojs.classList.remove("nojs");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("hide-form");
});