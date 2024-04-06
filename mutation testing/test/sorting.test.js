// const { insertionSort } = require('../src/sorting');

// describe('insertionSort', () => {
//     test('sorts an array of positive numbers', () => {
//         expect(insertionSort([4, 2, 3, 1])).toEqual([1, 2, 3, 4]);
//     });

//     test('sorts an array of negative numbers', () => {
//         expect(insertionSort([-3, -1, -4, -2])).toEqual([-4, -3, -2, -1]);
//     });

//     test('sorts an array of positive and negative numbers', () => {
//         expect(insertionSort([-2, 3, -1, 4, 0])).toEqual([-2, -1, 0, 3, 4]);
//     });

//     test('handles an array with duplicate values correctly', () => {
//         expect(insertionSort([5, 3, 4, 3, 5])).toEqual([3, 3, 4, 5, 5]);
//     });

//     test('correctly sorts an already sorted array', () => {
//         expect(insertionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
//     });

//     test('correctly sorts an array with a single element', () => {
//         expect(insertionSort([1])).toEqual([1]);
//     });

//     test('correctly sorts an empty array', () => {
//         expect(insertionSort([])).toEqual([]);
//     });

//     // Test for larger array or specific scenarios as needed
//     test('sorts a larger array of numbers', () => {
//         expect(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     });
// });

const { insertionSort } = require('../src/sorting');

// describe('insertionSort', () => {
//     it('should sort an array of integers in ascending order', () => {
//         const sortedArray = insertionSort([2, 1, 4, 3]);
//         expect(sortedArray).toEqual([1, 2, 3, 4]);
//     });

//     it('should sort an array of strings in ascending order', () => {
//         const sortedArray = insertionSort(['banana', 'apple', 'orange', 'grape']);
//         expect(sortedArray).toEqual(['apple', 'banana', 'grape', 'orange']);
//     });
// });

describe('insertionSort', () => {
    it('should sort an array of integers in ascending order', () => {
        const sortedArray = insertionSort([2, 1, 4, 3]);
        expect(sortedArray).toEqual([1, 2, 3, 4]);
    });

    it('should sort an array of strings in ascending order', () => {
        const sortedArray = insertionSort(['banana', 'apple', 'orange', 'grape']);
        expect(sortedArray).toEqual(['apple', 'banana', 'grape', 'orange']);
    });
     it('correctly sorts an empty array', () => {
        const sortedArray = insertionSort([]);
        expect(sortedArray).toEqual([]);
    });
});