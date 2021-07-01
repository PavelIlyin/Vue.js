import 'regenerator-runtime/runtime'
import HelloWorld from '../src/components/HelloWorld'
import { mount } from '@vue/test-utils'

describe('Calculator logic test', () => {

    const Wrapper = mount(HelloWorld)
    // поле ввода №1
    const operand1 = Wrapper.find('input[name=operand1]')
    operand1.setValue('12')
    // поле ввода №2
    const operand2 = Wrapper.find('input[name=operand2]')
    operand2.setValue('5')
    // поля ввода №1 и №2 экранной клавиатуры
    const radioInput1 = Wrapper.find('input[id=one]')
    const radioInput2 = Wrapper.find('input[id=two]')
    // кнопки экранной клавиатуры
    const btn1 = Wrapper.find('button[name="1"]')
    const btn2 = Wrapper.find('button[name="2"]')
    const btn3 = Wrapper.find('button[name="3"]')
    const btn4 = Wrapper.find('button[name="4"]')
    const btn5 = Wrapper.find('button[name="5"]')
    const btn6 = Wrapper.find('button[name="6"]')
    const btn7 = Wrapper.find('button[name="7"]')
    const btn8 = Wrapper.find('button[name="8"]')
    const btn9 = Wrapper.find('button[name="9"]')
    const btn0 = Wrapper.find('button[name="0"]')
    const arr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0]
    // функция клика по всем кнопкам экранной клавиатуры
    let cliker = () => {
        for (let i of arr) {
            i.trigger('click')
        }
    }

    test('Test sum operations', () => {
        const sumBtn = Wrapper.find('button[name=sum]')
        sumBtn.trigger('click')

        expect(Wrapper.vm.result).toBe(17)
    })

    test('Test sub operations', () => {
        const sumBtn = Wrapper.find('button[name=sub]')
        sumBtn.trigger('click')

        expect(Wrapper.vm.result).toBe(7)
    })

    test('Test div operations', () => {
        const sumBtn = Wrapper.find('button[name=div]')
        sumBtn.trigger('click')

        expect(Wrapper.vm.result).toBe(2.4)
    })

    test('Test mul operations', () => {
        const sumBtn = Wrapper.find('button[name=mul]')
        sumBtn.trigger('click')

        expect(Wrapper.vm.result).toBe(60)
    })

    test('Test int operations', () => {
        const sumBtn = Wrapper.find('button[name=int]')
        sumBtn.trigger('click')

        expect(Wrapper.vm.result).toBe(2)
    })

    test('Test pow operations', () => {
        const sumBtn = Wrapper.find('button[name=pow]')
        sumBtn.trigger('click')

        expect(Wrapper.vm.result).toBe(248832)
    })

    test('Test res operations', () => {
        const sumBtn = Wrapper.find('button[name=res]')
        sumBtn.trigger('click')

        expect(Wrapper.vm.result).toBe(0)
        expect(Wrapper.vm.operand1).toBe("")
        expect(Wrapper.vm.operand2).toBe("")
    })

    test('Test RadioChange', () => {
        const radioInput = Wrapper.find('input[type=radio]')
        radioInput.trigger('click')

        expect(radioInput.element.checked).toBeTruthy()
    })

    test('Test Fill2 operation', () => {
        radioInput2.setChecked()
        cliker()
        expect(Wrapper.vm.operand2).toBe("1234567890")
    })

    test('Test Fill1 operation', () => {
        radioInput1.setChecked()
        cliker()
        expect(Wrapper.vm.operand1).toBe("1234567890")
    })

    test('Test del operation Fill2', () => {
        radioInput2.setChecked()
        const btnBack = Wrapper.find('button[name=del]')
        btnBack.trigger('click')
        btnBack.trigger('click')

        expect(Wrapper.vm.operand2).toBe("12345678")
    })

    test('Test del operation Fill1', () => {
        radioInput1.setChecked()
        const btnBack = Wrapper.find('button[name=del]')
        btnBack.trigger('click')

        expect(Wrapper.vm.operand1).toBe("123456789")
    })
})