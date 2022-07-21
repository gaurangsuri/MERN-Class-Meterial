//functions in JS

// function Add(v1,v2,v3=35){
//     return v1+v2+v3;
// }
// const c = Add(1,1);
// console.log(c);

//arrow method for functions

// const add = (v1,v2) =>{
//     return v1+v2;
// }
// const sub = (x,y) => {
//     return x-y;
// }
// const c = add(1,sub(5,4));
// console.log(c); 

//nested function JUST LOGIC callback concept

// const mul =(x,y)=>{
//     return x*y;
// };
// const f1 =(x,y,fun)=>{
//     return fun(x,y);
// };
// const f2=(fun)=>{
//     return fun(2,3,mul);
// };
// var our = f2(f1);
// console.log(our);

//array stuff

// var arr =[1,2,3,4,15];
// console.log(arr.length)//length is a keyword of array
// console.log(arr.slice(0))//prints whole array
//if passing two parameters in slice method then the second index specified is not used 

//push method to insert elements in array

// arr.push(32)
// console.log(arr.slice(0))


//concat arrays 

// var arr2=[43,5,54,3,2,6];
//  var arr3=[...arr,...arr2];
// console.log(arr3.slice(0));

// var arr2=[43,5,54,3,2,6];
// arr = arr.concat(arr2);
// console.log(arr.slice(0));

// square using for loop

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]*arr[i]);
// }

// SQUARE USING MAP METHOD


// var arr =[1,2,3,4,15];
// const method = (value , index, array) => {
//     console.log(value,"--",index);
// }


// arr.map(method);

//map method passes the value of nth term of array along with the index n and the total array for every element one by one
//its like a small predefined for loop which traverses one by one

//passing arrow function straight into map method

// var arr =[1,2,3,4,15];
// arr.map((v,i,a)=> {console.log(v,"--",i);});

// arr.map((v,i)=>{console.log(v,"--",(v*v));});

// arr.map((v)=> {console.log(v);});

//_______________________________________________________________________________________________________________________________________________

//FILTER METHOD


// arr=[{name:"s1",age:25},{name:"s2",age:27},{name:"s3",age:23},{name:"s4",age:20},{name:"s5",age:37}]; 

// var filtereddata = arr.filter((v)=> v.age>25);

//FIND METHOD
// var filtereddata = arr.find((v)=> v.age>25);

// console.log(filtereddata);

//difference between find and filter is almost naught... filter returns array of alll elements which matches conditions whereas find returns the first match of the given condition

//FILTER,MAP,FIND MOST IMPORTANT
//forEach *REMIND*
//_______________________________________________________________________________________________________________________________________________

//PROMISE

//in promise.js

//set timeout

// setTimeout(()=>{console.log("HELLO");},3000); // time is in milliseconds
