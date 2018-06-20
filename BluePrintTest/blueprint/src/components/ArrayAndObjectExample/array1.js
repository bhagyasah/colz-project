import React from 'react';

export var ArrayExample1 = () => {
	let arry1= new Array(5);
	var i;
	arry1=[0,1,2,3,4,];
	//console.log(arry1);
	      arry1=[1,2,4,5];
	for( i=0; i<10; i++){
	console.log(arry1[i]);
	}
	var i=0;
	console.log(i);

	var associativeArray = [];
	associativeArray ["name"] ="bhagya";
	associativeArray["age"] = 26;
	associativeArray["address"]="sarlahi khutauna";
	for(i in associativeArray){
		console.log(i);
		console.log(associativeArray[i]);
	}
}
var ArrayExample1;


//console.log(j);

