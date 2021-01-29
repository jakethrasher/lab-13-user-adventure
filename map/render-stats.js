export function renderStats(user) {

    const statsDiv = document.getElementById('stats-landing-area');
    statsDiv.classList.add('stats');

    const nameP = document.createElement('p');
    nameP.textContent = `Drag Name: ${user.name}`;

    const cashP = document.createElement('p');
    cashP.textContent = `Cash:$${user.cash}`;

    const fiercenessP = document.createElement('p');
    fiercenessP.textContent = `Fierceness: ${user.fierceness}`;
    
    statsDiv.append(nameP, cashP, fiercenessP);
    
}
