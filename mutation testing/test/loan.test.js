const { calculateLoan } = require('../src/loan');

describe('calculateLoan', () => {
    test('calculates monthly payment correctly for positive values', () => {
        // Example based on a loan amount of 1000, an interest rate of 0.1%, and a 12-month payment period
        expect(calculateLoan(1000, 0.1, 12)).toBe("83.42");

    });

    test('handles invalid loan amount', () => {
        expect(calculateLoan('', 5, 12)).toBe("Please provide a valid loan amount");
        expect(calculateLoan(-100, 5, 12)).toBe("Please provide a valid loan amount");
        expect(calculateLoan('abc', 5, 12)).toBe("Please provide a valid loan amount");
    });

    test('handles invalid interest rate', () => {
        expect(calculateLoan(1000, '', 12)).toBe("Please provide a valid interestRate");
        expect(calculateLoan(1000, -5, 12)).toBe("Please provide a valid interestRate");
        expect(calculateLoan(1000, 'abc', 12)).toBe("Please provide a valid interestRate");
    });

    test('handles invalid month', () => {
        expect(calculateLoan(1000, 5, '')).toBe("Please provide a valid month");
        expect(calculateLoan(1000, 5, -1)).toBe("Please provide a valid month");
        expect(calculateLoan(1000, 5, 'xyz')).toBe("Please provide a valid month");
    });

    // Test for zero or very low interest rates
    test('calculates correctly for zero interest rate', () => {
        expect(calculateLoan(1000, 0, 12)).toBe("83.33");
    });

    // // Test for zero or negative months (even though these are handled as invalid, it's good to confirm behavior)
    // test('handles zero or negative payment duration', () => {
    //     expect(calculateLoan(1000, 5, 0)).toBe("Please provide a valid month");
    //     expect(calculateLoan(1000, 5, -12)).toBe("Please provide a valid month");
    // });

    
});

// const { calculateLoan } = require('../src/loan');


// describe('calculateLoan', () => {
//     it('should calculate the loan payment correctly for valid inputs', () => {
//         const payment = calculateLoan(1000, 0.1, 12);
//         expect(payment).toEqual('83.42');
//     });

//     it('should return an error message for invalid loan amount', () => {
//         const errorMessage = calculateLoan('', 0.1, 12);
//         expect(errorMessage).toEqual('Please provide a valid loan amount');
//     });
// });