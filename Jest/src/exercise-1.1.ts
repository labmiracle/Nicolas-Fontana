const fizzBuzz = (num: number): number | string => {
    if(typeof num != "number") {
        throw new Error("Must be a number");
    }
    if (num === 0) {
        return num;
    }
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    }
    return num;
};

export default fizzBuzz;
