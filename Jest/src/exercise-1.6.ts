const consecutiveValuesInArray = (matrix: (string | number)[][]): number => {
    if (!isValidArray(matrix)) {
        return -1;
    }
    let count = 0;
    let maxCount = 0;
    for (const arr of matrix) {
        for (const element of arr) {
            if (element == 1) {
                count++;
                maxCount = Math.max(maxCount, count);
            } else {
                count = 0;
            }
        }
    }
    return maxCount;
};

const isValidArray = (matrix: (string | number)[][]): boolean => {
    for (const fila of matrix) {
        if (fila.length === 0) {
            return false;
        }
    }
    return matrix.every(arr => arr.every(elem => elem == 1 || elem == 0));
};

export default consecutiveValuesInArray;
