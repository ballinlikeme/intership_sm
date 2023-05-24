import { fetchMenuDb } from './fetchMenuDb.module.js';
import { fetchContentDb } from './fetchContentDb.module.js';

document.addEventListener('DOMContentLoaded', () => {

	const menuBody = document.getElementById('menu-body');
	const menuIcon = document.getElementById('menu-icon');
	const contentList = document.getElementById('content-list');

	fetchMenuDb(menuBody);
	fetchContentDb(contentList);

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
