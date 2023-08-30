/*
Using recursion solve the following problem. You are running a store, and you want to calculate the total number of ways you can arrange clothes on a rack. Each arrangement uses all the clothes and is unique. Write a program to calculate this number for a given number of clothes.
*Hint: This problem can be solved using factorials.
Example: 5! = 5 * 4* 3 * 2 *1
*/

function numberOfWaysToArrangeClothes(clothesCount) {
    // base case, this is when we stop the recursion
    if (clothesCount === 1) {
        return clothesCount;
    }

    // this is the recursion, we call the same function but with slightly different parameters
    const recursedNumber = numberOfWaysToArrangeClothes(clothesCount - 1);

    console.log("we are at", clothesCount, "recursed value is ", recursedNumber);

    // roll-up, process the data from previous recursions and our own data to produce a new sum
    return clothesCount * recursedNumber;
}

console.log(numberOfWaysToArrangeClothes(5));
/*
numberOfWaysToArrangeClothes(5)
numberOfWaysToArrangeClothes(4)
numberOfWaysToArrangeClothes(3)
numberOfWaysToArrangeClothes(2)
numberOfWaysToArrangeClothes(1)
*/