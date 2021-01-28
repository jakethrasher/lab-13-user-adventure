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

const form = document.querySelector('form');

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
const submitButton = document.createElement('input');
submitButton.type = 'submit';
form.append(submitButton);

const USER = 'USER';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const choiceId = formData.get('choices');

    const choice = findById(quest.choices, choiceId);

 
    const user = JSON.parse(localStorage.getItem(USER));

    const cash = user.cash;

    console.log(cash);
    console.log(choice);


});


/*displaying the choice results
make div for results in html, if there is also a submit button in the div make a span for text. grab dom elements
span.textContent = choice.results

may need a back to map button
backToMapButton.addEventListener('click', ()=>{
    windwow.location = '../map/'
})

or
set timer?? that redirects to map after certain amount of time
*/



