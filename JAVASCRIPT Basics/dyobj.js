const circle={
    radius:1,
    color:'red',
    log(){
        console.log('log',this.radius); //{ radius: 1, color: 'red', log: [Function: log] }
    }
}
console.log(circle);
circle.price=100;
circle.ispresent=true;
delete circle.price;
console.log(circle); //{ radius: 1, color: 'red', log: [Function: log], ispresent: true }