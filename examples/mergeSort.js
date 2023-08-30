// merge sort

function mergeSort(array) {
    //console.log("sorting", array);
    if (array.length === 1) {
        return array;
    }

    if (array.length === 2) {
        if (array[0] > array[1]) {
            return array.reverse();
        } else {
            return array;
        }
    }

    const mid = Math.floor(array.length/2);
    const array1 = array.slice(0, mid);
    const array2 = array.slice(mid, array.length);

    const sorted1 = mergeSort(array1);
    const sorted2 = mergeSort(array2);

    //console.log("sorted is", sorted1, sorted2);

    const finalArray = [];

    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < sorted1.length || pointer2 < sorted2.length) {
        const val1 = sorted1[pointer1];
        const val2 = sorted2[pointer2];

        //console.log(val1, val2, pointer1, pointer2);

        if (val1 === undefined) {
            finalArray.push(val2);
            pointer2 ++;
            continue;
        }

        if (val2 === undefined) {
            finalArray.push(val1);
            pointer1 ++;
            continue;
        }

        if (val1 <= val2) {
            finalArray.push(val1);
            pointer1 ++;
        } else {
            finalArray.push(val2);
            pointer2 ++;
        }
    }

    return finalArray;
}

console.log(mergeSort([1,7,3,99,4,6,3]))

console.log(mergeSort([4,5,435,45,5,35,32,6,456,54,789,78,342]));

// 1, 2, 4, 6, 7
//          ^
// 1, 3, 5
//       ^

// 1, 1, 2, 3, 4, 5, 6, 7