'use strict'
var popup = document.querySelector('.popup');
var popupInner = document.querySelector('.popup-inner');
var openPopupButton = document.querySelector('.open-popup');
var cross = document.querySelector('.cross-btn');
var skipPopupButton = document.querySelector('.skip-btn');

openPopupButton.addEventListener('click', function (event) {
    console.log('click');
    popup.style.display = 'flex';
});

cross.addEventListener('click', function (event) {
    console.log('click on cross')
    popup.style.display = 'none';
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        popup.style.display = 'none';
    }
});

skipPopupButton.addEventListener('click', function () {
    popup.style.display = 'none';
});