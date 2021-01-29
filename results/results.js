const resetButton = document.getElementById('reset-button');
const emptyArray = [];
const user = JSON.parse(localStorage.getItem('USER'));
const resultsDiv = document.getElementById('results-div');


resetButton.addEventListener('click', () => {
    const stringArray = JSON.stringify(emptyArray);
    localStorage.setItem('USER', stringArray);
    window.location = '../.';
});

const endCashAmount = cashResult(user.cash);

resultsDiv.textContent = `${user.name}, the ${user.typeOfQueen},  ${endCashAmount}`;





function cashResult(cash) {
    if (cash < 0) {
        return `Uh oh looks like you overdrew your bank account. Your current account balance is ${user.cash}. Go back to Micky's and get to work!`;
    } else if (cash > 300) {
        return `Condragulations! You made $${user.cash - 300}!`;
    } else return 'you survived another day!';
}

// function fiercenessResults(fierceness){

// }
