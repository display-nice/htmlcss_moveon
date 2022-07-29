const burger = document.querySelector('.burger');
const menuItems = document.querySelectorAll('.menu__item');
const violetBgTop = document.querySelector('.violet-bg-top');
const introDescr = document.querySelector('.intro__description');

burger.addEventListener('click', () => {
	// violetBgTop.classList.toggle('violet-bg-top--enlarge')
	// introDescr.style.marginTop = '0';
	menuItems.forEach(item => {
		item.classList.toggle('menu__item--active');
	})
});