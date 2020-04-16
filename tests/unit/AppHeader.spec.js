import { mount } from '@vue/test-utils'
import { AppHeader } from "@components/AppHeader";
//Creates a block of tests, aka a 'test suite'
describe('AppHeader', () => {
//Creates a Jest test
    test('If user is not logged in, do not show logout button', () => {
        //an assertion about the expected outcome
        //inside expect, the value to apply matchers against
        //toBe is a Jest matcher that checks that a value is what is expected 
        const wrapper = mount(AppHeader)
        expect(wrapper.find('button').isVisible()).toBe(false)
    })
    test('If user is logged in, show logout button', async () => {
        const wrapper = mount(AppHeader)
        wrapper.setData({ loggedIn: true })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
})