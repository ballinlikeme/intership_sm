import { CONTENT_ITEMS } from './db.module.js';

export function fetchContentDb() {

	let elements = [];

	CONTENT_ITEMS.forEach(item => {
		const parentElement = document.createElement('li');
		const bodyElement = document.createElement('div');
		const imageWrapperElement = document.createElement('div');
		const imageELement = document.createElement('img');
		const infoWrapperElement = document.createElement('div');
		const titleElement = document.createElement('h2');
		const textElement = document.createElement('p');

		imageELement.src = item.imageSrc;
		imageWrapperElement.classList.add('projects__image');
		imageWrapperElement.appendChild(imageELement);

		titleElement.classList.add('projects__title');
		titleElement.textContent = item.title;

		textElement.classList.add('projects__text');
		textElement.textContent = item.text;

		infoWrapperElement.classList.add('projects__info');
		infoWrapperElement.appendChild(titleElement);
		infoWrapperElement.appendChild(textElement);

		bodyElement.classList.add('projetcs__body');
		bodyElement.appendChild(imageWrapperElement);
		bodyElement.appendChild(infoWrapperElement);

		parentElement.classList.add('projects__item');
		parentElement.appendChild(bodyElement);

		elements.push(parentElement);	
	});

	return elements;
}