import { fetchMenuDb } from './fetchMenuDb.module.js';

document.addEventListener('DOMContentLoaded', () => {
	const menuBody = document.getElementById('menu-body');
	const menuIcon = document.getElementById('menu-icon');

	const fetchedMenuElements = fetchMenuDb();

	fetchedMenuElements.forEach(item => {
		item.onclick = () => {
			item.classList.toggle('active');
		};
		menuBody.appendChild(item);
	});

	menuIcon.onclick = () => {
		menuBody.classList.toggle('active');
		menuIcon.classList.toggle('active');
	};
});