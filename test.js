//! Jest

//JavaScript;

//! Example test

// "Func" should be your function name.. Alternatively you can put your function in a seperate file,
// change the name of the function and import it into your test.js file so your test will run properly.

describe("Api1 test functions", () => {
  test("test1", () => {
    expect(func({ variable: "data", year: 2014 })).toEqual({
      outcomeTitle: "expected result",
    });
  });

  it("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});

//! Jest test commands and functions

// test() or it() defines a single unit test
test("test1", () => {
  expect(func({ variable: "data", year: 2014 })).toEqual({
    outcomeTitle: "expected result",
  });
});

// expect() - Used to create an asserton so you can compare an actual value to the expected value
expect(actual).toBe(expected);

// beforeEach() / afterEach() - Run code before or after each test
beforeEach(() => {
  console.log("Runs before every test");
});

// beforeAll() / afterAll() - Run code once before/after all tests in the file
beforeAll(() => {
  console.log("Runs once before all tests");
});

// describe() Groups related tests together (Shown at the top of the file)
// Mocking (Advanced) For mocking functions or modules.
const mockFunc = jest.fn();

mockFunc("hello");
expect(mockFunc).toHaveBeenCalledWith("hello");

//! Matchers (Used with expect())
// .toBe() - Strict equality (like ===) - expect(2 + 2)toBe(4)
// .toEqual() - Deep equality (for object/array) - expect({a:1}).toEqual({a:1})
// .not.toBe() - Negation - expect(2+2).not.toBe(5)
// .toBeNull() - Checks for null - expect(null).toBeNull()
// .toBeUndefined() - Checks for undefined - expect(undefined).toBeUndefined()
// .toBeTruthy() - Value evaluates to true - expect("Hello").toBeTruthy()
// .toBeFalsy() - Value to evaluate to false - expect(0).toBeFalsy()
// .toContain() - Checks for array or string inclusion - expect([1,2,3]).toContain(2)
// .toHaveLength() - Checks for length of array or string - expect("abc").toHaveLength(3)
// .toThrow() - Expects function to throw an error - expect(() => {throw me an error();}).toThrow()
