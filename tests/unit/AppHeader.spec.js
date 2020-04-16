import AppHeader from '@components/AppHeader'

//Creates a block of tests, aka a 'test suite'
describe('Appheader', () => {
//Creates a Jest test
    test('If user is not logged in, do not show logout button', () => {
        //an assertion about the expected outcome
        //inside expect, the value to apply matchers against
        //toBe is a Jest matcher that checks that a value is what is expected 
        expect(true).toBe(true)
    })
})