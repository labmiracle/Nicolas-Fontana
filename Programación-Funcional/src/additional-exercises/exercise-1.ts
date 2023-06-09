const numbers = [1, 2, 3, 4, 5];

const myMap = <T>(arr: T[], cb: (value: T, index: number, array: T[]) => T): T[] => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i, arr));
    }
    return result;
};

console.log(myMap(numbers, number => number * 2));
