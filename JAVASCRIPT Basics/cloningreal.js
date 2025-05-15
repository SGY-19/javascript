let user={
    name:"Ruth",
    detail:{
        degree:"MBA",
        grade:"A"
    }
};
// let shallowcopy={...user};
// shallowcopy.detail.degree="BE";
// console.log(shallowcopy);//{ name: 'Ruth', detail: { degree: 'BE', grade: 'A' } }--actual result 
// //// { name: 'Ruth', detail: { degree: 'MBA', grade: 'A' } }---we need this (nested obj not working in shallow copy)

// let deepcopy =JSON.parse(JSON.stringify(user));
// deepcopy.detail.degree="BE";
// console.log(deepcopy); //{ name: 'Ruth', detail: { degree: 'BE', grade: 'A' } }
// console.log(deepcopy.detail.degree);//BE
// console.log(user.detail.degree);//MBA 
let deepcopy=structuredClone(user);
deepcopy.detail.degree="BE";
console.log(user.detail.degree); //MBA (orginal safe)
console.log(deepcopy.detail.degree); //BE (copy updated)