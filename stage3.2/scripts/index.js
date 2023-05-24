import { fetchMenuDb } from './fetchMenuDb.module.js';
import { fetchContentDb } from './fetchContentDb.module.js';
import { debounce } from './debounce.module.js';

document.addEventListener('DOMContentLoaded', () => {

	const menuBody = document.getElementById('menu-body');
	const menuIcon = document.getElementById('menu-icon');
	const contentList = document.getElementById('content-list');
	const input = document.getElementById('input-search');

	fetchMenuDb(menuBody);
	const contentElements = fetchContentDb();
	contentElements.forEach(item => {
		contentList.appendChild(item);
	});

	input.onchange = debounce((event) => {
		contentList.innerHTML = '';
		contentElements.forEach(item => {
			if (item.textContent.includes(event.target.value))
			{
				contentList.appendChild(item);
			}
		});
	});

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
