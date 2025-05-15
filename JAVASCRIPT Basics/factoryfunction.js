// function createcircle(radius){
//     return{
//         radius,
//         ooru(){
//             console.log('ooru');
//         }
//     }
// }
// const c1=createcircle(1);
// console.log(c1);
// const c2=createcircle(5);
// console.log(c2);
function createReactangel(length, width){
        return{
           length,
            width,
           getArea(){
    return  this.length*this.width;
            },
            getPerimeter(){
return 2*(this.length + this.width);
            }
        };
     }
    const R1=createReactangel(4,5);
     console.log(`Perimeter:${R1.getPerimeter()}`);
     console.log(`Area:${R1.getArea()}`);
// function createRectangle(length, width) {  // ✅ Fixed function name
//     return {
//         length,
//         width,  // ✅ Fixed spelling
//         getArea() {
//             return this.length * this.width; // ✅ Fixed method syntax
//         },
//         getPerimeter() {
//             return 2 * (this.length + this.width); // ✅ Fixed method logic
//         }
//     };
// }

// const R1 = createRectangle(4, 5);  // ✅ Fixed function name

// console.log(`Perimeter: ${R1.getPerimeter()}`); // ✅ Call method with ()
// console.log(`Area: ${R1.getArea()}`);  // ✅ Call method with ()

    