const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
}
// //for in loop
// const another={};
// console.log(another);
// for(let key in circle)
//     another[key]=circle[key];
// console.log(another);

//using object.assign method
const another=Object.assign({},circle);
console.log(another); //{ radius: 1, draw: [Function: draw] }
console.log("-----");
const another1=Object.assign({
    color:'red'},circle);
    console.log(another1); //console.log(another);
    another.draw();
    console.log("-----");
 //using spread opertor(...)   
 const another3={...circle};
 console.log(another3); //{ radius: 1, draw: [Function: draw] }
 another3.draw();