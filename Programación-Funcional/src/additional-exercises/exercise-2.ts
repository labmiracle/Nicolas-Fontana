const clients = [
    { name: "John", lastname: "Smith", age: 25 },
    { name: "Jane", lastname: "Johnson", age: 30 },
    { name: "Michael", lastname: "Brown", age: 28 },
    { name: "Emma", lastname: "Taylor", age: 22 },
    { name: "William", lastname: "Miller", age: 35 },
];

const myFind = <T>(arr: T[], cb: (value: T, index: number, array: T[]) => boolean): T | undefined => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
};

console.log(myFind(clients, client => client.name === "Michael"));
