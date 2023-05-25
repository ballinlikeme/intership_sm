import { fetchContentDb } from './fetchContentDb.module.js';
import { debounce } from './debounce.module.js';

document.addEventListener('DOMContentLoaded', () => {
	const contentList = document.getElementById('content-list');
	const emptyStateElement = document.getElementById('empty');
	const contentElements = fetchContentDb();

	const input = document.getElementById('input-search');

	contentElements.forEach(item => {
		contentList.appendChild(item);
	});

	input.onkeyup = debounce((event) => {
		contentList.innerHTML = '';
		emptyStateElement.classList.remove('active');
		contentElements.forEach(item => {
			if (item.textContent.includes(event.target.value))
			{
				contentList.appendChild(item);
			}
		});
		if (contentList.childNodes.length === 0)
		{
			emptyStateElement.classList.add('active');
		}
	});

});