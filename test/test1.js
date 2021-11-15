import {calculator} from "../homework2.js"
import chai from "chai";
import assert from 'assert';
import {expect} from "chai"
import chaiParam from 'chai-param'
let param = chaiParam.param;
chai.use(chaiParam);


describe('Calculator', () => {
	describe('Division', () => {
        it('6 / 0 should return Infinity', () => {
            expect(calculator(6, 0, "/")).to.be.equal(Infinity)
        })
    })})


describe('Calculator', () => {
        it('Check paramethers length', () => {
        expect(calculator).param(5,6,"+").to.have.length.above(0)
});
        it('should return NaN if passed a word instead of numbers', function() {
        expect(calculator("hello", "hey")).to.be.NaN;
  });
})