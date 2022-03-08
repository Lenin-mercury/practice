console.log(
  "------------------------App Running-------------------------------------"
)
// const arr = [1, 2, 3, 4, 5];
// const sum = (x) => {
//   return new Promise((resolve, reject) => {
//     resolve(x + 10);
//   });
// };

// const final = () => {
//     arr.map(async (x) => {
//       await sum(x).then((y) => {
//         console.log(y);
//         return y;
//       });
//     })

// };

// final();

// console.log(final, "55");

// const array = [1,2,3,4,5]
// const promises = []
// array.map(arr =>{
// promises.push(new Promise((resolve, reject)=>{
// setTimeout(()=>{
// resolve(arr+10)
// }, 100)
// }))
// })
// Promise.all(promises).then(res=>console.log(res))

// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

// 1. (Remove even integers from array)
// function removeEvens(numbers) {
//     return numbers.filter(n => n % 2 !== 0); // if a number is even, remove it
// }

// const oddNumbers = removeEvens(array);
// console.log(oddNumbers);

// 2.(Merge Two Sorted / unsorted arrays)

// a = [8, 3, 5, 9, 10]
// b = [4, 6, 2, 11, 7, 12, 1, 8]

// function mergeSortedArray(a, b) {
//   for (var i = 0; i < b.length; i++) {
//       //pushing all data from b to a
//     a.push(b[i])
//   }
// //   console.log(a, "a")
//   for (i = 0; i < a.length; i++) {
//     for (j = i + 1; j < a.length; j++) {
//         //sorting logic
//       if (a[i] > a[j]) {
//         temp = a[i]
//         a[i] = a[j]
//         a[j] = temp
//       }
//     }
//   }
//   return a
// }
// console.log(mergeSortedArray(a, b))

// 3. (Find two numbers that add up to a value "15")
// function findtwo(a, tar){
//     for(i=0; i<a.length; i++){
//         for(j = i + 1; j < a.length; j++ ){
//             if(a[i] + a[j] === tar){
//               const res = {};
//                 console.log(a[i], a[j], "equals to", tar);
//             }
//         }
//     }
//     return null
// }
// console.log(findtwo(array, 20));

// 4. (Array of Products of All Elements)
// function multiply(array) {
//   var sum = 1
//   for (var i = 0; i < array.length; i++) {
//     sum = sum * array[i]
//   }
//   return sum
// }
// console.log(multiply([1,2,3]))

// 5. (Find Minimum Value in Array)
// var max = array.reduce(function(a, b) {
//     return Math.max(a, b);
// });

// console.log(max);

// 6. (Find First Unique Integer in an Array)
// function getUniqueFromArray(arr){
//   return arr.find(function(value){
//     return arr.indexOf(value) === arr.lastIndexOf(value);
//   }) || -1;
// }

// var A =  [22, 25, 3, 3, 1, 2, 0, 0,100,22,25,1,2];
// console.log(getUniqueFromArray(array));

// 7.(Find Second Maximum Value in an Array)

// function firstSecondMax(a) {
//   for (var i = 0; i < a.length; i++) {
//   for (i = 0; i < a.length; i++) {
//     if (a[i] > a[j]) {
//       temp = a[i]
//       a[i] = a[j]
//       a[j] = temp
//     }
//   }

// }
//   return a
// }

// console.log(firstSecondMax(), "555")

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// function nextBiggest(arr) {
//   let max = -Infinity, result = -Infinity;

//   for (const value of arr) {
//     const nr = Number(value)

//     if (nr > max) {
//       [result, max] = [max, nr] // save previous max
//     } else if (nr < max && nr > result) {
//       result = nr; // new second biggest
//     }
//   }

//   return result;
// }

// const arr = ['20','120','111','215','54','78'];
// console.log(nextBiggest(array));

//=============> Two sum of array

// function twoSum(arr, target){
//   const numsVisited = {};
//   const res = [];

//   for(let i=0; i<arr.length; i++){
//     const num = arr[i];
//     const complement = target - num;
//     if(numsVisited[complement] !==  undefined){
//       res.push(i);
//       res.push(numsVisited[complement])
//     }
//     numsVisited[num]= i
//   }
// }

// console.log(twoSum([3,3,3,4,5], 6))
// 1.