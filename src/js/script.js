const burger = document.querySelector('.burger');
const menuItems = document.querySelectorAll('.menu__item');
const violetBgTop = document.querySelector('.violet-bg-top');
const introDescr = document.querySelector('.intro__description');
const appStoreBtn = document.querySelector('#app-store-btn');
const playMarketBtn = document.querySelector('#play-market-btn');
const socialButtons = document.querySelectorAll('.twitter, .facebook, .instagram');
console.log(socialButtons);

burger.addEventListener('click', () => {
	violetBgTop.classList.toggle('violet-bg-top--plus-height');
	menuItems.forEach(item => {
		item.classList.toggle('menu__item--active');
	})
});

appStoreBtn.onclick = function() {
	window.open('https://www.apple.com/ru/shop/goto/store');
}
playMarketBtn.onclick = function() {
	window.open('https://play.google.com/store/apps?hl=ru&gl=US');
}

socialButtons.forEach(btn => {
	if (btn.classList.contains('twitter')) {
		btn.onclick = function () {
			window.open('https://www.google.com/search?q=twitter');
		}
	}
	if (btn.classList.contains('facebook')) {
		btn.onclick = function () {
			window.open('https://www.google.com/search?q=facebook');
		}
	}
	if (btn.classList.contains('instagram')) {
		btn.onclick = function () {
			window.open('https://www.google.com/search?q=instagram');
		}
	}
})