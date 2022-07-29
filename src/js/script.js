const burger = document.querySelector('.burger');
const menuItems = document.querySelectorAll('.menu__item');

burger.addEventListener('click', () => {
	menuItems.forEach(item => {
		item.classList.toggle('active');
	})
});