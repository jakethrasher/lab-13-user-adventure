const form = document.querySelector('form');
const USER = 'USER';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        typeOfQueen: formData.get('type-of-queen'),
        cash: 300,
        completed:{}
    };

    const stringUser = JSON.stringify(user);

    localStorage.setItem(USER, stringUser);

    window.location = '../map/';
    console.log(user);
});

const getUser = localStorage.getItem(USER);
console.log(getUser);

