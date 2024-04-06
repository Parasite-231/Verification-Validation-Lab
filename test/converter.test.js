const { LengthConverter } = require('../src/converter');

describe('LengthConverter', () => {
    test('converts feet to inches and miles correctly', () => {
        expect(LengthConverter("feets", 3)).toEqual(["36.00 inches", "0.00 miles"]);
    });

    test('converts inches to feet and miles correctly', () => {
        expect(LengthConverter("inches", 36)).toEqual(["3.00 feets", "0.00 miles"]);
    });

    test('converts miles to feet and inches correctly', () => {
        expect(LengthConverter("miles", 1)).toEqual(["5280.00 feets", "63360.00 inches"]);
    });

    test('handles wrong input measurement type', () => {
        expect(LengthConverter("yards", 10)).toBe("wrong input");
    });

   
    test('converts zero feet to inches and miles correctly', () => {
        expect(LengthConverter("feets", 0)).toEqual(["0.00 inches", "0.00 miles"]);
    });

    test('converts zero inches to feet and miles correctly', () => {
        expect(LengthConverter("inches", 0)).toEqual(["0.00 feets", "0.00 miles"]);
    });

    test('converts zero miles to feet and inches correctly', () => {
        expect(LengthConverter("miles", 0)).toEqual(["0.00 feets", "0.00 inches"]);
    });
});


// const { LengthConverter } = require('../src/converter');


// describe('LengthConverter', () => {
//     it('should convert feet to inches and miles correctly', () => {
//         const result = LengthConverter("feets", 3);
//         expect(result).toEqual(['36.00 inches', '0.00 miles']);
//     });

//     it('should convert inches to feet and miles correctly', () => {
//         const result = LengthConverter("inches", 36);
//         expect(result).toEqual(['3.00 feets', '0.00 miles']);
//     });
// });

