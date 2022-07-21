// var obj = {name:"node",v:12 };
// console.log(obj);

// var obj = {name:"node",v:12 ,name:"react"};// same cant repeat twice will overwrite the previous value
// console.log(obj);

// var obj = {name:"node",v:12}
// console.log(obj.v);

//spread operator

// var obj = {name:{fn:"JS"},v:12 ,email:"ahns4en"};
// obj={...obj,name:{...obj.name,sn:"react"}};
// console.log(obj);

//7 kayer depth '

// var obj={details:{name:{fname:{health:{persona:{final:{a:"hello"},clearence:34},level:10},name:"name"},mname:"m"},mobile:2325,email:"gmail"},sal:20};
// obj={...obj,details:{...obj.details,name:{...obj.details.name,fname:{...obj.details.name.fname,health:{...obj.details.name.fname.health,persona:{...obj.details.name.fname.health.persona,final:{...obj.details.name.fname.health.persona.final,b:"there"}}}}}}};
// console.log(obj);
var obj={L1:{L2:{L3:{L4:{L5:{L6:{L7:{}}}}}}}};
obj={...obj,L1:{...obj.L1,L2:{...obj.L1.L2,L3:{...obj.L1.L2.L3,L4:{...obj.L1.L2.L3.L4,L5:{...obj.L1.L2.L3.L4.L5,L6:{...obj.L1.L2.L3.L4.L5.L6,L7:{...obj.L1.L2.L3.L4.L5.L6.L7,s:"inside seventh layer"}}}}}}}};
console.log(obj);