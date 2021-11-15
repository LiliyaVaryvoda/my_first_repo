import {calculator} from "../homework2.js"
import assert from 'assert';
import {expect} from "chai"


describe('Calculator', () => {
	describe('Addition', () => {
		it('1 + 8 should be equals to 9', () => {
			expect(calculator(1, 8, "+")).to.be.equal(9)
		})
		})})



describe('Subtraction', () => {
	it('10 - 5 should be equals to 5', () => {
		expect(calculator(10, 5, "-")).to.be.equal(5)
	})
})


describe('Multiplication', () => {
	it('4 * 2 should be equals to 8', () => {
			expect(calculator(4, 2, "*")).to.be.equal(8)
	})
})


describe('Division', () => {
	it('6 / 2 should be equals to 3', () => {
		expect(calculator(6, 2, "/")).to.be.equal(3)
    })
})