function makeArray(firstArray, secondArray, maxLength) {
    const combinedArray = [...firstArray, ...secondArray];
    if (combinedArray.length > maxLength) {

        return combinedArray.slice(0, maxLength);
    }

   
    return combinedArray;
}


console.log(makeArray([1, 2, 3], [4, 5, 6], 5)); // [1, 2, 3, 4, 5]
console.log(makeArray(['a', 'b'], ['c', 'd', 'e'], 6)); // ['a', 'b', 'c', 'd', 'e']
console.log(makeArray([], [1, 2, 3, 4], 3)); // [1, 2, 3]
console.log(makeArray([1, 2, 3], [4, 5, 6], 10)); // [1, 2, 3, 4, 5, 6]
console.log(makeArray([1, 2, 3], [4, 5], 7)); // [1, 2, 3, 4, 5]