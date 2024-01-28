function oddIntegersArray(n) {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
      throw new Error('Input must be a positive integer');
  }

  const resultArray = [];
  for (let i = 1; i <= n; i += 2) {
      resultArray.push(i);
  }

  return resultArray;
}

const inputNumber = 16;
console.log(oddIntegersArray(inputNumber));