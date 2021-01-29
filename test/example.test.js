// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById } from '../quest/find-by-id.js';
import questData from '../quest-data.js';
const test = QUnit.test;

test('when given a questdata and an id it should return an quest with matching id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = questData[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(questData, 'wig-shop');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
