// const circle={
//     radius:1,
//     draw(){
//         console.log('draw');
//     }
// }
// //for...in
// for (let key in circle)
//     console.log(key,circle[key]); //radius 1
// console.log("-----"); 
// //for...of
// for (let key of Object.keys(circle)) 
//     console.log(key); //radius 
                         //draw
// console.log("-----"); 
// for (let key of Object.entries(circle)) 
//     console.log(key); //[ 'radius', 1 ] 
                         //[ 'draw', [Function: draw] ]
// console.log("-----");
// //in operator (check a properties in object)
// if ('draw' in circle)
//     console.log("yes");
// console.log("-----");
// if ('price' in circle)
//     console.log("yes");
// console.log("-----");


const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
}
//for...in
for (let key in circle)
    console.log(key+"  "+circle[key]);
console.log("-----");
//for...of 
console.log(Object.keys(circle)); //[ 'radius', 'draw' ]
console.log("-----");
console.log(Object.entries(circle));//[ [ 'radius', 1 ], [ 'draw', [Function: draw] ] ]
console.log("-----");
//in operator (check a properties in object)
if ('draw' in circle)
    console.log("yes");
console.log("-----");
if ('price' in circle)
    console.log("yes");
console.log("-----");