const isLeapYear = (year: number): boolean => {
    if (typeof year != "number") {
        throw new Error("Must be a number");
    }
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

export default isLeapYear;
