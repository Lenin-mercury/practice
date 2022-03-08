console.log("-----------running---------------")
// 1. js
// const C1 = () => {
//     return {
//         bar:"hello"
//     }
// }

// const C2 = () => {
//     return {
//         bar: "hello"
//     }
// }

// console.log(C1(), C2());

// 2. JS
// var add = {
//   name: "julie",
//   age:"20",
//   city:"Vegas",
//   state:"Nevada"
// }

// add.city = undefined;

// console.log(add);

// 3.JS

// let age = 23;
// let arr = ["John", age, age += 10, age--, age-1, undefined]
// // console.log(arr);
// arr.length = 2;
// // console.log(arr);
// delete arr[3];
// // console.log(arr.length);
// delete arr[0];
// // console.log(arr, '******');
// // console.log(arr.length);
// // arr[6] = "Sam"
// console.log(arr);

//4 sorting

const arr =[1,2,3,4,5,10,11,21,14,15,1,1,2,1,2,4,7,8,5]
// const arr3 =["pineapple","banana","apple", "apple", "orange","pineapple","banana","apple", "apple", "orange"]

// const arr2= Array.from(new Set(arr))

// console.log(arr2.sort((a,b)=>{
//     return a - b
// }));

// console.log(JSON.stringify(arr2.sort().reverse()));


// function addnum(num) {
//     return num + 200;
// }

// console.log(addnum(20),addnum(40),addnum(20));

// for (const i of arr){
//     console.log(i);
// }

// for(var i=1; i<=5; i++){
//     // console.log(i);
//     console.log("*  ".repeat(i));
//  }


// if(2 === "2") {
//     console.log("First true");
//  }

//  if(2 == "2") {
//     console.log("Second true");
//  }

//------------------------------
// let a = 2;
// let b = "-2"

// if(a + b) {
//    console.log("If Part");
// } else {
//    console.log("Else Part");
// }
//------------------------------

// const b = {
//    name:"Vivek",
//    f: function(){
//      var self = this;
//      console.log(this.name, "1");
//      (function(){
//        console.log(this.name, "2");
//        console.log(self.name, "3");
//      })();
//    }
//  }

//  b.f();


var fruits = ["apple", "orange", "cherry"];

function myFunction(item) {
   console.log(item);
   return item;
}

var output = fruits.forEach(myFunction);
// var outputMap = fruits.map( myFunction);

// console.log(output);
// console.log(outputMap);


