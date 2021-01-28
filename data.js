const wigStore = {
    id: 'wig-shop',
    title: 'The Wig Shop',
    image: 'wig-shop.png',
    description: `'You walk in the wig shop and you see dozens of pussycat wigs and one stunning blonde lace front. The nice wig is going to set you back $100, but you don't want the reputation of only wearing pussycat wigs. What do you do?'`,
    //each choice has an id, a description of the choice, a result of the choice, amounth of currency and health
    choices: [{
        id: 'lace-front-wig',
        description: `Get the lace front wig`,
        result: `You leave with a beautiful wig but it sets you back $100`,
        cash:-100,
    }, {
        id: 'pussycat-wig',
        description: `Go with the less expensive option`,
        result: `You got yourself a new pussycat wig for $50`,
        cash: -50,
    }, {
        id: 'bald',
        description: `Hold off for now..`,
        result: `Go bald darling!`,
        cash: 0
    }]
};

const nailShop = {
    id: 'nail-shop',
    title: 'Lovely Nails',
    image: 'nail-shop.png',
    description: `You've been wearing press-ons for quite some time but youre ready to step it up a notch. You could get a new set of acrylics for $75 or save some cash and get some fresh press-ons. What do you do?`,
    //each choice has an id, a description of the choice, a result of the choice, amounth of currency and health
    choices: [{
        id: 'press-ons',
        description: `Save cash`,
        result: `You bought yourself some fresh press-ons for $20!`,
        cash: -20,
    }, {
        id: 'acrylics',
        description: `Spring for the acrylics`,
        result: `Don't break em! You spent $100`,
        cash: -100,
    }, {
        id: 'grunge',
        description: `Go for that grunge look..`,
        result: `Keep your dirty claws!`,
        cash: 0
     
    }]
};

const club = {
    id: 'club',
    title: 'Mickys',
    image: 'club.png',
    description: `You arrive to work and the place is packed. You can tell people are tipping well. You also run into your drag sister, who is celebrating her birthday. You've got to decide if you're going to pay rent on time this month or kiki with your friends`,
    //each choice has an id, a description of the choice, a result of the choice, amounth of currency and health
    choices: [{
        id: 'work',
        description: `Time to work!`,
        result: `You earned $200 lip syncing your heart out!`,
        currency: 200
    }, {
        id: 'party',
        description: `Lets drink!`,
        result: `You spent $200 on shots. What a great night!`,
        currency: -200
    }]
};

const quests = [wigStore, nailShop, club];

export default quests;
