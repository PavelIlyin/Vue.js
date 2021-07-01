import 'regenerator-runtime/runtime'
import TestComponent from './TestComponent'
import { mount } from '@vue/test-utils'

describe('TestComponent', () => {
    test('Content of the TestComponent', () => {
        const Wrapper = mount(TestComponent, {
            propsData: {
                message: 'Hello from test!'
            }
        })
        expect(Wrapper.text()).toEqual('The message is: Hello from test!')
    })

})