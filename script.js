//for each
let looping=[100,200,300,400,500]

      looping. forEach ((item,index)=>{
  console.log(item);
  console.log(index);
  
  
  console.log(`${index}=${item}`);
   
  
})


// map looping
const mapretArr=looping.map((item,index)=>{
  console.log(item);
  console.log(index);
  return item*2

  console.log(mapretArr);

  
})


const rArr=looping. map(i=>i*2)
console.log(rArr);

//filter
console.log(looping);
const fileRetArr=looping. filter(i=>i>300)
console.log(fileRetArr);

//for of
let arrEx=[1,2,3,4,5]
for(let num of arrEx){
  console.log(num);
  if(num>2){
    console.log(num);
    
  }
}
 //logical
let e=true 
let f=false
console.log(e&&f);
console.log(e||f)
console.log(!e);

let g=10
let h=20
  console.log(g==10 && h==10);
  console.log(g==10 && h==20);
  console.log(g==20||h==20);
  console.log(g==10 || h==20);
  console.log(!g==10);
  
//Array obj
const jsonData=[
  {
     num:1,
     fruits:"apple",
     color:"red"
},
  {

      num:2,
      fruits:"grapes",
       color:"black"

  },
    {   
      num:5,
      fruits:"banana",
      color:"yellow"

    },

]


jsonData.forEach((item)=>{
  console.log(item.num);
console.log(item.fruits);
console.log(item.color);

})


//data type
let y=10
console.log(typeof y)

const name="sathiya"
console.log(typeof name);

let v=10.10
console.log(typeof v);

let z=true
console.log(typeof z);

let u= null
console.log(typeof u);



function top(){
  console.log("top fun");
  
  function bottom(){
    console.log("bot fun");
    
  }
  bottom()
}
top()


let arr=[100,200,300,400,500]

console.log(arr.length);

//push
arr.push(600)
console.log(arr);

//pop
arr.pop()
console.log(arr);

//unshit
arr.unshift(700);
console.log(arr);
//shift
arr.shift();
console.log(arr);

//slice
const retslice=arr.slice(2.3);
console.log(retslice);
console.log(arr);

//splice
const spliceret=arr.splice(1.3);
console.log(spliceret);
console.log(arr);




//hoisting
var a=10;
let b=20;
const c=30;
console.log(b);
console.log(c);



function hoist(){
  let x=100;
  console.log(x);
  
}
hoist()



//scope fun
//let a=10;

function scope(){
  let z=20;
  console.log(a);
  console.log(z);

  function nesfun(){
    let c=10;
    console.log(c);
    
  }
  nesfun()
}
scope()

  //Additional program


let score = 85;

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}
  

let str = 'hello ';    
let num = 42;                 
let isActive = true;          
let flowers = ['jasmine', 'rose', 'daisy'];  
let person = {                
  firstName: 'sathiya',
  lastName: 'suresh',
  age: 25
};

console.log(str);           
console.log(num);           
console.log(isActive);      
console.log(flowers[1]);     
console.log(person.firstName);
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));






const str1 = "hii";
console.log(str1);

let student = true;
console.log(student);


let val = null;
console.log(val);


let undefinedValue;
console.log(undefinedValue);


let id = Symbol("id");
console.log(id);


let bigNumber = 1234567;
console.log(bigNumber);


let ref = {
    name: 'sathiya',
    age: 21,
};
console.log(ref.name)



//ifelse
const key = 0;

if (num > 0) {
    console.log("correct");
} else if (key < 0) {
    console.log(" negative");
} else {
    console.log(" zero");
};
