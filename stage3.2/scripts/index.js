document.addEventListener('DOMContentLoaded', () => {
	const menuIcon = document.getElementById('menu-icon');
	const menuBody = document.getElementById('menu-body');

	const menuElements = [...document.getElementsByClassName('menu__element')];

	menuElements.forEach((element) => {
		element.onclick = () => {
			element.classList.toggle('active');
		};
	});


	menuIcon.onclick = () => {
		menuBody.classList.toggle('active');
		menuIcon.classList.toggle('active');
	};
});
