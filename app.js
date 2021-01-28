const form = document.querySelector('form');
const USER = 'USER';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        ec: 0,
        hp: 100,
    };

    const stringUser = JSON.stringify(user);

    localStorage.setItem(USER, stringUser);

    window.location = '../map/';
    console.log(user);
});

const getUser = localStorage.getItem(USER);
console.log(getUser);

