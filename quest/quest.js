import questData from '../quest-data.js';
import { findById } from './find-by-id.js';
const questTitle = document.querySelector('h1');
const questImage = document.querySelector('img');
const description = document.querySelector('p');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');


const quest = findById(questData, questId);

console.log(findById(questData, 'nail-shop'));

console.log(quest);


questTitle.textContent = quest.title;
questImage.src = `../assets/${quest.image}`;
description.textContent = quest.description;







