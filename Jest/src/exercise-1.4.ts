const addPositiveNumbers = (arr: (string|number)[]) => {
  let sum = 0
  for (const number of arr) {
    if(!isNaN(+number) && +number > 0) {
      sum += +number
    }
  }
  return sum
}

export default addPositiveNumbers