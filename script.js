let nums={t:4};
let fcn = function(a){
   return  this.t+a
}
//call
console.log(fcn.call(nums,5));

//apply
function fcn3(a,b){
return this.t+a+b
}
let k=[7,8]
console.log( fcn3.apply(nums,k));

//bind
let m= fcn.bind(nums);
console.log(  m(4));


//
let student={age:20};

function printAge(){
    console.log(this.age);
}

let printAgeOfStudent = printAge.bind(student);
printAgeOfStudent();