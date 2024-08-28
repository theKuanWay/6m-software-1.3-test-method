//use the functions from sample.js
const {addFunc, isDivisibleBy5} = require("./sample");

//create the test suite
describe("Test Suite for sample.js functions", () => {
    //write the test for func addFunc
    it("should add 3 numbers", () => {
        const result = addFunc(1,3,4);
        //compare the result to an expected value:
        expect(result).toBe(8);
    })

    //write the test for fun isDivisibleBy5
    it("should check divisibility by 5", ()=>{
        const result = isDivisibleBy5(4);
        expect(result).toBe(false);
    })
})