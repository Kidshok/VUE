import { expect, it } from "@jest/globals"
import { mount } from "@vue/test-utils"
import Calc from '../components/Calc.vue'

describe('Test Calc', () => {
	it('Test first operand input', () => {
		const wrapper = mount(Calc)
		const operand1 = wrapper.find('input[name=operand1]');
		operand1.setValue("1")
		expect(wrapper.vm.operand1).toBe(1)
	})

	it('Test second operand input', () => {
		const wrapper = mount(Calc)
		const operand2 = wrapper.find('input[name=operand2]');
		operand2.element.value = "1"
		operand2.trigger('input')
		expect(wrapper.vm.operand2).toBe(1)
	})

	it('Test method sum', () => {
		const wrapper = mount(Calc)

		const operand1 = wrapper.find('input[name=operand1]');
		operand1.setValue("2")

		const operand2 = wrapper.find('input[name=operand2]');
		operand2.element.value = "3"
		operand2.trigger('input')

		const btn = wrapper.find('button[name="+"]');
		btn.trigger('click')

		expect(wrapper.vm.result).toBe(5)
	})

	it('Test method substract', () => {
		const wrapper = mount(Calc)

		const operand1 = wrapper.find('input[name=operand1]');
		operand1.setValue("3")

		const operand2 = wrapper.find('input[name=operand2]');
		operand2.element.value = "2"
		operand2.trigger('input')

		const btn = wrapper.find('button[name="-"]');
		btn.trigger('click')

		expect(wrapper.vm.result).toBe(1)
	})

	it('Test method divide', () => {
		const wrapper = mount(Calc)

		const operand1 = wrapper.find('input[name=operand1]');
		operand1.setValue("4")

		const operand2 = wrapper.find('input[name=operand2]');
		operand2.element.value = "2"
		operand2.trigger('input')

		const btn = wrapper.find('button[name="/"]');
		btn.trigger('click')

		expect(wrapper.vm.result).toBe(2)
	})

	it('Test method multiply', () => {
		const wrapper = mount(Calc)

		const operand1 = wrapper.find('input[name=operand1]');
		operand1.setValue("2")

		const operand2 = wrapper.find('input[name=operand2]');
		operand2.element.value = "2"
		operand2.trigger('input')

		const btn = wrapper.find('button[name="*"]');
		btn.trigger('click')

		expect(wrapper.vm.result).toBe(4)
	})

})