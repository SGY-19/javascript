function Circle(radius) {
    this.radius = radius;
    this.draw = function() {  
        console.log('draw', this.radius);
    };
}

const a = new Circle(1);
//console.log(a);
//console.log(a.radius);
a.draw();               



