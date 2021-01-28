const resetButton = document.getElementById('reset-button');
const emptyArray = [];

resetButton.addEventListener('click', () => {
    const stringArray = JSON.stringify(emptyArray);
    localStorage.setItem('USER', stringArray);
    window.location = '../.';
});