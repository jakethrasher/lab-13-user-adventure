import questData from '../quest-data.js';
import { findById } from './find-by-id.js';
const questTitle = document.querySelector('h1');
const questImage = document.querySelector('img');
const description = document.querySelector('p');

//grab quest id from url
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');

const quest = findById(questData, questId);

questTitle.textContent = quest.title;
questImage.src = `../assets/${quest.image}`;
description.textContent = quest.description;

const form = document.querySelector('form')
const choices = quest.choices;
for (let choice of choices) {
    const labels = document.createElement('label');
    labels.textContent = choice.description;

    const radioButtons = document.createElement('input');
    radioButtons.type = 'radio';
    radioButtons.name = 'choices';
    radioButtons.value = choice.id;

    form.append(labels);
    labels.append(radioButtons);
}

const USER = 'USER';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);


    const stringUser = JSON.stringify(user);

    localStorage.setItem(USER, stringUser);

    window.location = '../map/';
});




