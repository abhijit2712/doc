//Funtions -> block of code that fulfil a specific task
/*

syntax ->
function name(para){
    //body
};

why funtions -> Reusabilty,not buggy,
call or invoke
funtions treated as as first
hoisting -> move all funtion at top of file



funtion assignment
*/

//named funtion assignment
let stand = function walk(){
    // console.log("wlaking");
}

stand();
//wall cannot be use here wal;, not hoisting

let jump = stand;
jump();



//Anonymous funtion assignment
let stand2 = function (){
    // console.log("wlaking");
}

// funtion ass : 1)named 2)anonymous
/*Hoisting : process of moving funtion declaration 
top of file automatically
*/

/*Any number of paramter can be send to js funtions:
    object -> 0 ->1
             1 -> 2
             all passed number which are send to arument


    how to access all number from argument -> uisng loop
*/

function sum(a,b){
    let total = 0;
    for(let value of arguments){
        total = total +  value;
    }
    return total;
}

let ans = sum(1,2,3,4,5,6);
// console.log(ans);

/*Rest opertor -> ...
    funtion sum(...arg) -> arg is a arrray 
*/

function sum2(a,...args){ // only forward 
    console.log(args);  //rest all so after this no para add 
}

sum2(1,2,3,4,5,6);

//deafault para
//r is default value
function inst(p,r=5,y) {
    return p*r*y/100;
}



let person = {
    firstname : 'love',
    lastname : 'babbar',

    get  fullname(){
        return `${person.firstname}      ${person.lastname}`;
    },
    set fullname(value){
        if(typeof value !==  'string'){
            throw new Error("You have not send a string");
        }
        let parts = value.split(' ');
        this.firstname = parts[0];  //current obj's first name
        this.lastname  = parts[1];
    }
};



person.fullname = 'Rahul kumar';
console.log(person.fullname);


//getter -> access the properties
//setter -> set the properties

/*use case -> 
    inside obj -> create getter and setter

*/

/*Exception Handling
Try and catch block

  
*/

try{
    person.fullname = 1;
}catch(e){
    alert(e);
}



/* scope -> lifetime
{
    let a -> scope 2 bracket

}


let -> nearrest bracket
var -> funtion in which var declared

for(var i=0;i++)-> access i outside the for
2 const  in 2 diff funtion -> no error
 


Reducing an array
reduce -> 
let a = [1,2,3,4]; ->addition -> loop


*/

let a = [1,2,3,4];
let totalSum = a.reduce((accumulator,cuurentValue) => accumulator + cuurentValue,0);

console.log("");
console.log(totalSum);