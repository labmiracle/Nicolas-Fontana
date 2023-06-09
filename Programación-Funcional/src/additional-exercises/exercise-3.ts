const array = [1, 2, 3, 4, 5];

const myFilter = <T>(arr: T[], cb: (value: T, index: number, array: T[]) => boolean): T[] => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(myFilter(array, element => element < 0));
