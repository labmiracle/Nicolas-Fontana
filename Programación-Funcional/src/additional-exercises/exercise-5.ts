const one = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(1);
    }
    return 1;
};
const two = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(2);
    }
    return 2;
};
const three = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(3);
    }
    return 3;
};
const four = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(4);
    }
    return 4;
};
const five = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(5);
    }
    return 5;
};
const six = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(6);
    }
    return 6;
};
const seven = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(7);
    }
    return 7;
};
const eight = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(8);
    }
    return 8;
};
const nine = (operation?: (num: number) => number): number => {
    if (operation) {
        return operation(9);
    }
    return 9;
};

const plus = (num2: number) => {
    return (num: number): number => num + num2;
};

const minus = (num2: number) => {
    return (num: number): number => num - num2;
};

const divideBy = (num2: number) => {
    return (num: number): number => Math.floor(num / num2);
};

const times = (num2: number) => {
    return (num: number): number => num2 * num;
};

console.log("1 + 5 = ", one(plus(five())));
console.log("6 - 3 = ", six(minus(three())));
console.log("7 / 2 = ", seven(divideBy(two())));
console.log("2 * 4 = ", two(times(four())));
console.log(eight(), nine());
