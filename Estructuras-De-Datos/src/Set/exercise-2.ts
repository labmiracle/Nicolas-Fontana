const uniqueElements = (arr1: number[], arr2: number[]): number[] => {
    const set = new Set([...arr1, ...arr2]);
    return [...set];
};

const arr3 = [6, 2, 3, 3, 4];
const arr4 = [0, 3, 3, 6, 9, 0];

console.log(uniqueElements(arr3, arr4));
