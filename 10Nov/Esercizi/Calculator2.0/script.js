
const inputNum = prompt("inserisci numeri")
let numbersInput= inputNum.split(',');
let numbers = [];

function minimalCalc(numbers) {
  const sum = () => numbers.reduce((acc, num) => acc + num);
  const sub = () => numbers.reduce((acc, num) => acc - num);
  const mult = () => numbers.reduce((acc, num) => acc * num);
  const div = () => numbers.reduce((acc, num) => acc / num);
  const pow = () => numbers.map(num => num * num)
  const sqrt = () => numbers.map(num => Math.sqrt(num))
  const pattern = new RegExp(/^\D/)

  for (n of numbersInput) {
    numbers.push(parseInt(n))
  try {
      if (isNaN(numbers[0]) && !pattern.test(n)) throw "no param"
      if (inputNum.length == 1 && !pattern.test(n)) throw "one val";
      if (pattern.test(n)) throw "non num";
    } catch (err){
      switch (err) {
          case "no param":
              console.error("Nessun parametro passato alla funzione");
            break;
          
          case "one val":
              console.error("Hai passato un solo valore");
            break;
          case "non num":
              console.error("Hai passato valore non numerico");
            break;
      }
    }
  }

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

