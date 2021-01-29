import { cashResult } from './cashResult.js';
const resetButton = document.getElementById('reset-button');
resetButton.classList.add('button');
const emptyArray = [];
const user = JSON.parse(localStorage.getItem('USER'));
const resultsDiv = document.getElementById('results-div');
resultsDiv.style.width = '70%'; 

resetButton.addEventListener('click', () => {
    const stringArray = JSON.stringify(emptyArray);
    localStorage.setItem('USER', stringArray);
    window.location = '../.';
});

const endCashMessage = cashResult(user.cash);

resultsDiv.textContent = `${user.name}, the ${user.typeOfQueen},  ${endCashMessage}`;




