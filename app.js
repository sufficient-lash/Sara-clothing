const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
if (bar) {
	bar.addEventListener("click", () => {
		nav.classList.add("active");
	});
}

// PRODUCTS DETAILS
let mainImg = document.getElementById("main-img");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
	mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
	mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
	mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
	mainImg.src = smallImg[3].src;
};
