/*
	1. Implement ES6 into the 'john' {}
  2. Return value from the 'deduct' () after 2s


var john = {
	name: 'John Doe',
  balance: 1500,
  deduct: function(amount) {
  	this.balance = this.balance - amount;
    return this.name + ' has a balance of ' + this.balance;
  }
}

*/

// const john = {
// 	name: 'John Doe',
//   balance: 1500,
//   deduct(amount){
//     return new Promise((res, rej)=> {
//         setTimeout(()=> {
//             this.balance = this.balance - amount;
//             res (`${this.name}  has a balance of  ${this.balance}`);
//         }, 2000)
//     })
//   }
// }

// // console.log(john.deduct(300));

// john.deduct(300).then((msg)=> console.log(msg));

// function add(a, b, ...args) {
//   let sum = a + b

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i]
//   }

//   return sum
// }

// // console.log(add(1,2))

// function add1(a){
//   return function (b){
//     if (b) return add1(a+b);
//     return a
//   }
// }

// console.log(add1(5)(2)(3)());

//find repeated word Hai in given array
const arr = ["Hai", "Hai, how are you", "Hai you", "Hi, hai", "Hai hello" ,"Hai, how are you"]

const sentence = 'Hai, how are you'

function getWords(text){
  let x = text.replace(/[^A-Za-z0-9]+/g, " ");
  let newArr = x.trim().split(" ");
  return newArr;
}

const allWords = []

const getallWords = arr.map((item, index)=> {
  const result = getWords(item)
  allWords.push(...result)
  return allWords
})


console.log(allWords.sort())


