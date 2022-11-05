//let getA = a=> a;
//console.log(getA(1));

// let square=a=>a*a;
// console.log(square(2));

//  var a=8;
//  let square= ()=>{return a*a};
//  console.log(square());

//  let mult=(a,b)=>{return a*b};
//  console.log(mult(2,3));

//  var x=function(){
//     this.val=1;
//     setTimeout(function(){
//         this.val++;console.log(this.val);
//     },1 )
//  }
//  var xx= new x();

//  var x=function(){
//     var that=this;
//     this.val=1;
//     setTimeout(function(){
//         that.val++;console.log(that.val);
//     },1 )
//  }
//  var xx= new x();

 
//  var x=function(){
    
//     this.val=1;
//     setTimeout(()=>{
//         this.val++;console.log(this.val);
//     },1 )
//  }
//  var xx= new x();

// var x=(...n)=>{console.log(n[0]);}
// x(1,2,3);


class student{
    static count=0;
  constructor(name,age,ph,boardMarks){
      this.age=age;
      this.name=name;
      this.ph=ph;
      this.boardMarks=boardMarks;
      student.count+=1;
  };
isEligibleForPlacements=(age)=>{
if(this.age>age && this.boardMarks>40 ){
    return this.name + " is eligible";
 }else {return  this.name +" is not eligible";}
}


   isEligible= function(){
   if(this.boardMarks>40){return this.name + ' is eligible'}
  else{return this.name + ' is not eligible'}
   }}
  
      let student1= new student('student1',23,1231,34);
let student2= new student('student2',22,1232,24);
  let student3= new student('student3',21,1233,54);
   let student4= new student('student4',20,1234,64);
   let student5= new student('student5',225,1235,74);
  console.log(student.count);
  console.log(student1.isEligible());
console.log(student3.isEligibleForPlacements(20));
