const bar = document.getElementById('bar');
const van = document.getElementById('navbar');

// let displayNav =

// PRODUCTS DETAILS
let mainImg = document.getElementById('main-img');
let smallImg = document.getElementsByClassName('small-img');

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


