"use strict"

// ЗАДАЧА 1

  const sumTwoSmallestNumbers = (...args) => {
    if (args.length > 2 ) {
        const sortedArgs = args.sort((a, b) => a - b);
        return sortedArgs[0] + sortedArgs[1];
    } else {
        console.error("Введите 2 или более числа!")
    }
};
  
console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(10, 343, 345, 3, 13, 22)); // 13
console.log(sumTwoSmallestNumbers(2, 3, 4, 0, 21, -1)); // -1
console.log(sumTwoSmallestNumbers(2));


// ЗАДАЧА 2


const createCalculator = (imputNumber) => {
  let result = imputNumber;

  return{
    sum: function (newValue) {
      return result += newValue;
    },

    sub: function (newValue) {
      return result -= newValue;
    },

    div: function (newValue) {
      return result /= newValue;
    },

    mult: function (newValue) {
      return result *= newValue;
    }
  };
};

const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
