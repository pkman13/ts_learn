function displayAlert(message: string | number) {
  console.log('The message is ' + message);
}

function sum(input: number[]): number {
  let total =  0;
  for(let count = 0; count < input.length; count++) {
      if(isNaN(input[count])){
          continue;
      }
      total += Number(input[count]);
  }
  return total;
}



// sum(5); // Returns an error not array
// sum([1, 'two', 3]);  // Returns an error not string
sum([1, 2, 3]);



//Required parameters
function addNumbers2 (x: number, y: number): number {
  return x + y;
}

addNumbers2(1, 2); // Returns 3
//addNumbers2(1);    // Returns an error

//Optional parameters
function addNumbers3 (x: number, y?: number): number {
  if (y === undefined) {
      return x;
  } else {
      return x + y;
  }
}

addNumbers3(1, 2); // Returns 3
addNumbers3(1);    // Returns 1

// Default parameters
function addNumbers4 (x: number, y = 25): number {
  return x + y;
}

addNumbers4(1, 2);  // Returns 3
addNumbers4(1);     // Returns 26

//Rest Parameters
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
  let total: number =  firstNumber;
  for(let counter = 0; counter < restOfNumbers.length; counter++) {
     if(isNaN(restOfNumbers[counter])){
        continue;
     }
     total += Number(restOfNumbers[counter]);
  }
  return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

// Deconstructed object parameters
interface Message {
  text: string;
  sender: string;
}

function displayMessage({text, sender}: Message) {
   console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});


////////

let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

// addThreeNumbers(10,20) // return NaN
// addThreeNumbers(10,20,30,40) // return 60 

let addThreeNumbers1 = (x: number, y: number, z?: number): number => {
  if((z === undefined)) {
      return x + y;
  } else {
      return x + y + z;
  }
};


let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

subtractThreeNumbers(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15);   // returns -25

//////

//Exercise - Define function types
//type calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number;
}

let addNumber: Calculator = (x: number, y: number): number => x + y;
let subtractNumber: Calculator = (x: number, y: number): number => x - y;

console.log(addAllNumbers(1,2));
console.log(subtractNumber(3,4));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
  if (operation === 'add') {
    return addNumber;
  } else {
    return subtractNumber;
  }
}

console.log(doCalculation('add')(1, 2));