const firstCharacterRepeatedConsecutively = (str: string): number => {
    if (typeof str != "string") {
        throw new Error("Must be a string");
    }
    let index = -1;
    const strLowerCase = str.toLowerCase();
    for (let i = 1; i < strLowerCase.length; i++) {
        if (strLowerCase[i] == " ") {
            continue;
        }
        if (strLowerCase[i - 1] == strLowerCase[i]) {
            index = i;
            break;
        }
    }
    return index;
};

console.log(firstCharacterRepeatedConsecutively("HoOla, cómo va?"));

export default firstCharacterRepeatedConsecutively;
