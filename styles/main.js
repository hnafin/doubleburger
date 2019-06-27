const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * -0.5 + "px";
})

const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function(){
	let offset = window.pageYOffset;
	parallax2.style.backgroundPositionY = offset * -0.1 + "px";
})

const parallax3 = document.getElementById("parallax3");

window.addEventListener("scroll", function(){
	let offset = window.pageYOffset;
	parallax3.style.backgroundPositionY = offset * -0.085 + "px";
})
