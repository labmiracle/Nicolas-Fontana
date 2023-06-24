const hasDuplicates = (arr: number[]): boolean => {
    const set = new Set(arr);
    return set.size !== arr.length;
};

const arr1 = [1, 2, 3, 4, 5, 1, 6, 2];
const arr2 = [1, 2, 3, 4, 5, 6];

console.log(hasDuplicates(arr1));
console.log(hasDuplicates(arr2));
