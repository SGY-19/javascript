function createCircle(radius,color){
    return{ 
        radius,
        color,
        draw(){
            console.log('draw');
        },
        getArea(){
        return Math.PI * this.radius*this.radius;
        }
    };
}
const c1=createCircle(3,'red');
console.log(c1);
console.log(`Area of c1:${c1.getArea()}`);
const c2=createCircle(5,'yellow');
console.log(c2);
console.log(`Area of c2: ${c2.getArea()}`)