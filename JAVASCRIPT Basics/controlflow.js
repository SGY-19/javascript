//  let hour=0;
//  if (hour>6&&hour<12)console.log('good morning');
//  else if(hour>=12&&hour<=18)console.log('good afternoon');
//  else console.log('good evening');
//write a program to fin max number
// let a=1000;
// let b=2000;
// let c=300;
// if(a>b&&a>c)console.log('a is the greatest...');
// else if(b>c)console.log('b is the greatest...');
// else console.log('c is the greatest...');
//switch case:
let role='admin';
switch (role) {
    case 'guest':
        console.log('guest user');
        break;
        case 'admin':
        console.log('admin user');
        break;
        case 'vendor':
        console.log('vendor user');
        break;
        default :
        console.log('no user');
        break;
}
if (role==='guest')console.log('guest user');
else if (role==='admin')console.log('admin user');
else if (role==='vendor')console.log('vendor user');
else console.log(' no user');
