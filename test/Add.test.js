const Calculator = require("../src/Add");

const metaData = [[1, 1, 1]];

describe("Addition", () => {
  it("should return 2 when input is 1 and 1", () => {
    const calculator = new Calculator(1, 1);
    const total = calculator.combine();
    expect(total).toBe(2);
  });
});

describe("Multiplication", () => {
  it("Should return 4 when multiplication function is called with input as 2 & 2", () => {
    const calculator = new Calculator(2, 2);
    const answer = calculator.multiply();
    expect(answer).toBe(4);
  });
  it("Should return 6 when multiplication function is called with input as 2 & 2", () => {
    const calculator = new Calculator(2, 3);
    const answer = calculator.multiply();
    expect(answer).toBe(6);
  });
  it.each(metaData)("multiply %i,%i ", (expected, a, b) => {
    const calculator = new Calculator(a, b);
    const answer = calculator.multiply();
    expect(answer).toBe(expected);
  });
});
