const nums = [1, 2, 3, 4, 5];

const myReduce = <T>(arr: T[], cb: (acc: T, value: T, index: number, array: T[]) => T, initialValue?: T): T | undefined => {
    let acc: T | number = initialValue !== undefined ? initialValue : 0;
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc as T, arr[i], i, arr);
    }
    return acc as T | undefined;
};

console.log(myReduce(nums, (acc, num) => acc + num));
