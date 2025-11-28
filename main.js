///1
const sum = Number("123") + 7;
console.log(sum);
///2

function CheckFalsy(value){
    value ? "Valid" : "Invalid";

}
console.log(CheckFalsy(0));
/////3
for(let i=0 ; i<11 ; i++){
    if (i%2 !== 0)  
        console.log(i);
}
/////4
const arr = [1, 2, 3, 4, 5];
const evens = arr.filter(num => num % 2 === 0);

console.log(evens);
//////5
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];

console.log(merged);
/////6
function getDay(num) {
  switch (num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid Day";
  }
}

console.log(getDay(2));
/////7
const array =["a", "ab", "abc"];
const lengths = array.map(str => str.length);
console.log(lengths);
////8
function CheckDivisible(number){
    if (number % 3 === 0 && number %5 ===0){
        return " Divisible by both"}

        else{
            return "Invalid"
        }
    }
    console.log(CheckDivisible(15)); 
/////9
const squ = (number) => number*number
console.log(squ(5));
////10
function describePerson({ name, age }) {
  return `${name} is ${age} years old`;
}

const person = { name: "John", age: 25 };
console.log(describePerson(person)); 
////11

function sum2(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum2(1, 2, 3, 4, 5));
///12
const delayedSuccess = () =>
  new Promise(resolve => setTimeout(() => resolve("Success"), 3000));

delayedSuccess().then(msg => console.log(msg));
//13
function splitWords(str) {
  return str.split(" ");
}

const sentence = "The quick brown fox";
console.log(splitWords(sentence)); 
