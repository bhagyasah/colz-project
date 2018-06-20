import React from 'react';

export const  collectionExample = () => {


// array.from example
console.log(Array.from('bhagya'));

console.log(Array.from([1,2,3],x => x+x));
//isArray example its returns true if passing object is array otherwise its returns false

const arry=[];
const arry1={};
console.log(Array.isArray(arry1));
//Array.of example

var a= Array.of(7);
console.log(a);
var b= Array(7);
console.log(b);
// concat example
var a=['a',3,4];
var b=["bhagya","narayan","kumar"];
var c=a.concat(b);
console.log(c);

//filter example
var arry3=[{id:1,pass:2},{id:3,pass:4},{id:5,pas:6}];
console.log(arry3.filter(elm => elm.id>3));
console.log(arry3);
var found= arry3.find(elem => elem.id = 2);
console.log(found);
//console.log(arry3.flatten());
// reduce example

const array1=[1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));



// var arry= [1,2,3,4,5];
// console.log(arry.length);
// arry.length=2;
// console.log(arry.length);
// console.log(arry);
// for(var i=0;i<arry.length;i++){
// 	arry[i] *= 2;
// }
// console.log(arry);
		// console.log("collection example");
		// var emp1=[];
		// emp1["name"]="bhagya";
		// emp1["age"]=21;
		// emp1["address"]="sarlahi";

		// var emp2=[];
		// emp2["name"]="bhagy";
		// emp2["age"]=22;
		// emp2["address"]="sarlah";

		// var emp3=[];
		// emp3["name"]="bhag";
		// emp3["age"]=23;
		// emp3["address"]="sarlah";

		// var emps=[emp1,emp2,emp3];
		// var finalArray=[];
		// for(let i in emps ){
		// 	console.log(emps[i]);
		// var newEmps =	emps[i].map(emp => {
		// 		console.log(emp);
		// 		if(emp === "bhagya"){
		// 			return "rajiv"
		// 		}
		// 	 return emp;
		// 	});
		// 	finalArray.push(newEmps);
		// }
		// console.log(finalArray);
}

