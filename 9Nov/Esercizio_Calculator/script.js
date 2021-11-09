// First calculator
numbers = [2,5,5,2]

function calculator(numbers) {
  function sum() {
    let sumTotal = 0; 
    for (n of numbers) sumTotal += n;
    return sumTotal;
  }
  function sub() {
    let subTotal = numbers[0];
    for (n of numbers) subTotal -= n;
    return subTotal + numbers[0];
  }
  function mult() {
    let multTotal = 1;
    for (n of numbers) multTotal *= n;
    return multTotal;
  }
  function div() {
    let divTotal = numbers[0];
    for (n of numbers) divTotal /= n;
    return divTotal * numbers[0];
  }
  return {
    sum: sum(),
    sub: sub(),
    mult: mult(),
    div: div(),
  }
}

console.log(calculator(numbers).sum)
console.log(calculator(numbers).sub)
console.log(calculator(numbers).mult)
console.log(calculator(numbers).div)

// Second calculator

numbers = [2,5,5,2]

function minimalCalc(numbers) {
  const sum = () => numbers.reduce((acc, num) => acc + num);
  const sub = () => numbers.reduce((acc, num) => acc - num);
  const mult = () => numbers.reduce((acc, num) => acc * num);
  const div = () => numbers.reduce((acc, num) => acc / num);
  const pow = () => numbers.map(num => num * num)
  const sqrt = () => numbers.map(num => Math.sqrt(num))
  return {
    sum: sum(),
    sub: sub(),
    mult: mult(),
    div: div(),
    pow: pow(),
    rad: sqrt(),
   }
}

console.log(minimalCalc(numbers).sum)
console.log(minimalCalc(numbers).sub)
console.log(minimalCalc(numbers).mult)
console.log(minimalCalc(numbers).div)
console.log(minimalCalc(numbers).pow)
console.log(minimalCalc(numbers).rad)