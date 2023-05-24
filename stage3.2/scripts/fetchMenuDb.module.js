import { MENU_ITEMS } from './db.module.js';

export function fetchMenuDb() {

	let result = [];

	MENU_ITEMS.forEach(item => {
		const parentElement = document.createElement('li');
		const innerSpan = document.createElement('span');
		
		parentElement.appendChild(innerSpan);
		
		if (item.children.length)
		{
			const innerList = document.createElement('ul');
			innerList.classList.add('menu__sub-menu', 'sub-menu');
			item.children.forEach((childElement) => {
				const newChildElement = document.createElement('li');
				const childElementInnerSpan = document.createElement('span');
				newChildElement.classList.add('sub-menu__element');

				childElementInnerSpan.textContent = childElement.title;
				newChildElement.appendChild(childElementInnerSpan);
				innerList.appendChild(newChildElement);
			});
			parentElement.appendChild(innerList);
		}

		
		innerSpan.textContent = item.title;

		parentElement.classList.add('menu__element');
		result.push(parentElement);
	});

	return result;
}