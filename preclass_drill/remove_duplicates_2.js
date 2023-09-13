/*
Write a JavaScript function called removeDuplicates that takes an array of numbers as input and returns a new array with duplicate elements removed while preserving the order of the original elements.
*/

function removeDuplicates(array) {
    const foundElements = {};
    /*const newArray = [];
    for (const element of array) { // O(n)
        if (!foundElements[element]) { // O(1)
            newArray.push(element);
            foundElements[element] = true;
        }
    }

    return newArray;*/

    return array.filter((element) => {
        if (!foundElements[element]) {
            foundElements[element] = true;
            return true;
        }

        return false;
    });
}

console.log(removeDuplicates([1,5,3,2,1,10,3]));