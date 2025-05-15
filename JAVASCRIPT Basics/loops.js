//for
// for(let i=1;i<=10;i++){
//     console.log(i);
//     if(i%2===0)
//         console.log('hi this is javascript');
// }
//while
// let i=8;
// while (i<=10){
//     console.log(i);
//     i++;
// }
//do-while
// let p=1;
// do {
//     console.log(p);
//     p++
// }
// while(p<=5);
//for-in
const persons={name:'john',age:25 };
for(let key in persons)
    console.log(key, persons[key]);
console.log('--------');
//array
const colours=['red','green','blue'];
for(let index in colours)
    console.log(index,colours[index]);
console.log('--------');
//for-of
for (let i of colours)
    console.log(i);
console.log('--------');
//break&continue
let k=0;
while (k<=10){
    if (k===2)
        break;
    console.log(k);
    k++
}