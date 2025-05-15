function Car(brand,model,year){
    this.brand=brand;
    this.model=model;
    this.year=year;
}
    Car.prototype.start=function(){
        console.log(`car :${this.brand},${this.model},${this.year}`);
    };
const car1=new Car("Honda","Civic",2024);
const car2=new Car("Toyota","Camry",2025);
console.log(car1);
console.log(car2);
car1.start();
car2.start();