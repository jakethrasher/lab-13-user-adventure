import questData from '../quest-data.js';

const user = JSON.parse(localStorage.getItem('USER'));

let completedAllQuests = true;
//if all tests are complete, redirect to results page
for (let quest of questData) {
    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}

//if user is out of cash, redirect them to results
if (user.cash <= 0 || user.fiercness <= 0 || completedAllQuests) {
    window.location = '../results/';
}

const ul = document.querySelector('ul');

for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    ul.append(li);
    li.append(a);

}


