const vulcan = {
    id: 'vulcan',
    title: 'Welcome To Vulcan',
    image: 'vulcan-quest.png',
    description: `something happens on vulcan what do you do?`,
    //each choice has an id, a description of the choice, a result of the choice, amounth of currency and health
    choices: [{
        id: 'option-one',
        description: `this is description of option one`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }, {
        id: 'option-two',
        description: `this is description of option two`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }, {
        id: 'option-three',
        description: `this is description of the option three`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }]
};

const andoria = {
    id: 'andoria',
    title: 'You\'ve reached Andoria...',
    image: 'andoria-quest.png',
    description: `something happens on vulcan what do you do?`,
    //each choice has an id, a description of the choice, a result of the choice, amounth of currency and health
    choices: [{
        id: 'option-one',
        description: `this is description of option one`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }, {
        id: 'option-two',
        description: `this is description of option two`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }, {
        id: 'option-three',
        description: `this is description of the option three`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }]
};

const risa = {
    id: 'vulcan',
    title: 'Planet Risa Welcomes you..',
    image: 'risa-quest.png',
    description: `something happens on vulcan what do you do?`,
    //each choice has an id, a description of the choice, a result of the choice, amounth of currency and health
    choices: [{
        id: 'option-one',
        description: `this is description of option one`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }, {
        id: 'option-two',
        description: `this is description of option two`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }, {
        id: 'option-three',
        description: `this is description of the option three`,
        result: `this is what happens when you choose this option`,
        currency: 20,
        hp: 0,
    }]
};

const quests = [vulcan, andoria, risa];

export default quests;
