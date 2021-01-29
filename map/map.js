import questData from '../quest-data.js';
import { renderStats } from './render-stats.js';

const user = JSON.parse(localStorage.getItem('USER'));

let completedAllQuests = true;
//if all tests are complete, redirect to results page
for (let quest of questData) {
    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}

//if user is out of cash, redirect them to results
if (user.cash <= 0 || user.fierceness <= 0 || completedAllQuests) {
    window.location = '../results/';
}

const ul = document.querySelector('ul');

for (let quest of questData) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = quest.title;
    const a = document.createElement('a');
    const questImage = document.createElement('img');
    questImage.classList.add('map-image');
    

    questImage.src = `../assets/${quest.image1}`;
    
    a.href = `../quest/?id=${quest.id}`;
    ul.append(li);
    li.append(p, a);
    a.append(questImage);
}

renderStats(user);