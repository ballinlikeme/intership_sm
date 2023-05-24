import { fetchContentDb } from './fetchContentDb.module.js';
import { debounce } from './debounce.module.js';

document.addEventListener('DOMContentLoaded', () => {
	const contentList = document.getElementById('content-list');
	const contentElements = fetchContentDb();

	const input = document.getElementById('input-search');

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

});