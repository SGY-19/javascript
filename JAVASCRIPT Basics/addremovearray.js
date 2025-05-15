
// let trainbox= ["s0","s1","s2","s3"];
// trainbox.unshift("s4");
// console.log(trainbox);
// console.log("--------");
// console.log(trainbox.includes("s1"));  // true
// console.log(trainbox.includes("s5"));   // false
// console.log("--------");
// console.log(trainbox.indexOf("s2")); //3
// console.log(trainbox.indexOf("s5")); //-1

// let trainbox= [ ]; 
// trainbox.push("s0-VIP"); 
// trainbox.push("s1");
// trainbox.push("s2"); 
// trainbox.push("s3"); 
// trainbox.push("s4");  
// console.log(trainbox);//[ 's0-VIP', 's1', 's2', 's3', 's4' ]
// console.log(trainbox.includes("s1"));//true
// console.log(trainbox.includes("s5"));//false
// console.log(trainbox.indexOf("s1"));//1
// console.log(trainbox.indexOf("s5"));//-1
// console.log(trainbox.shift());//s0-VIP
// console.log(trainbox); //[ 's1', 's2', 's3', 's4' ]
// console.log(trainbox.pop());//s4
// console.log(trainbox);//[ 's1', 's2', 's3' ]
// let trainbox = ["s1", "s2", "s3","s4"];
// let passengers = [
//     { seat: "s1", name: "Ruth" },
//     { seat: "s2", name: "Stella" },
//     { seat: "s3", name: "Abi" }
//   ];
// //   console.log(passengers);
// trainbox.splice(2, 0, "s2.5");  // insert at index 2
// console.log(trainbox);  // [ 's1', 's2', 's2.5', 's3', 's4' ]
// //remove passanger
// trainbox.splice(3, 1);  // remove 1 item at index 3
// console.log(trainbox);  // [ 's1', 's2', 's2.5', 's4' ]

// for (let seat of trainbox) {
//     console.log("Seat: " + seat);
//   }
//   for (let person of passengers) {
//     console.log(person.seat + " → " + person.name);
//   }
    
// // 1️⃣ Create an empty train (array)
// let train = [];
// console.log("Initial train:", train);

// // 2️⃣ Add seats at the end using push()
// train.push("s1");
// train.push("s2");
// console.log("After push:", train);  // ["s1", "s2"]

// // 3️⃣ Add a VIP seat at the beginning using unshift()
// train.unshift("s0-VIP");
// console.log("After unshift:", train);  // ["s0-VIP", "s1", "s2"]

// // 4️⃣ Remove last seat using pop()
// train.pop();  // removes "s2"
// console.log("After pop:", train);  // ["s0-VIP", "s1"]

// // 5️⃣ Remove first seat using shift()
// train.shift();  // removes "s0-VIP"
// console.log("After shift:", train);  // ["s1"]

// // 6️⃣ Add more seats for further operations
// train.push("s2", "s3", "s4");
// console.log("Current train:", train);  // ["s1", "s2", "s3", "s4"]

// // 7️⃣ Insert a new seat at position 2 using splice()
// train.splice(2, 0, "s2.5");  // insert at index 2
// console.log("After inserting s2.5:", train);  // ["s1", "s2", "s2.5", "s3", "s4"]

// // 8️⃣ Remove a specific seat at position 3 using splice()
// train.splice(3, 1);  // removes "s3"
// console.log("After removing s3:", train);  // ["s1", "s2", "s2.5", "s4"]

// // 9️⃣ Replace seat "s2.5" with "s2X" using splice()
// train.splice(2, 1, "s2X");  // replaces "s2.5" with "s2X"
// console.log("After replacing s2.5:", train);  // ["s1", "s2", "s2X", "s4"]

// // 🔟 Check if a seat exists using includes()
// console.log("Has s2?", train.includes("s2"));      // true
// console.log("Has s3?", train.includes("s3"));      // false

// // 1️⃣1️⃣ Get index of a seat using indexOf()
// console.log("Index of s2:", train.indexOf("s2"));  // 1
// console.log("Index of s3:", train.indexOf("s3"));  // -1

// // 1️⃣2️⃣ Loop through all seat names using for...of
// console.log("Looping through train seats:");
// for (let seat of train) {
//   console.log("Seat:", seat);
// }

// // 1️⃣3️⃣ Loop using index with traditional for loop
// console.log("Loop with index:");
// for (let i = 0; i < train.length; i++) {
//   console.log("Index", i, "has seat", train[i]);
// }
// console.log("--------------------");
//find() & findindex()
// let passanger=[
//     {seat:"s1",name:"Abi"},
//     {seat:"s2",name:"Ruth"},
//     {seat:"s3",name:"Stella"}
// ];
// let result=passanger.find(pass=>pass.seat==="s2");
// console.log(result);           //{ seat: 's2', name: 'Ruth' }
// let index=passanger.findIndex(pass=>pass.seat==="s2");
// console.log(index);  //1

//remove an element from an Array
let trainbox= ["s0","s1","s2","s3"];
trainbox.splice(2,1);
console.log(trainbox);
trainbox.length=0;
console.log(trainbox);