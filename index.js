console.log("Hello")

/*HW
js vs java
what is diffrence and similarity in js and java
*/

//variable - named memory location
//let keyword -> varible
let b = 12.5

//data type is not nessecarry it will automatically decide which type

let a = 5
console.log(a);

let c = '1'
console.log(b);

//2: var 
/*diff var & let - scope
        let                             var
    let has local scope                 global scope    
    redeclaration not possible          redeclaration possible 
*/

/*3: constant
    const : cannot reassgin another value

    varible rules
    cannot be reseversed keyword
    name must be meaning full
    cannot start with a number
    contains space or -
    camelcase

    let a = 1,b = 2;
    let a = 1    best practice
    let b = 2 
*/

/*Primitive types
string
number
boolean
undefined -> not defined
null      -> pointes to null
*/

/*Dynamic typing
int a = 5;
a = "Babbar " run in js

*/
let  lastname = 'Babbar';
console.log(lastname);
lastname = 3;
console.log(lastname);

/*number string can be use at ant instance */

/*Referance type
object 
arrrays
funtions


object -> behavioar  and properties
mutiple varible are linked by any type

*/

let person = {
    firstname : 'love',
    age : 24
};

/* Access using 2 type
dot 
person['age']->bracket
why to notation?
*/

/*Arrays ->Ds which has list of similar kind of items

*/

let name = ['love','babar','babbar'];

//names[3] -> undefined
//names[3] = "ramesh " add  new value


/*js has a standard for all browsers*/

/*
Arithematic
+ -  * / 

Assignement
x = x+5 equls to x+=5
num = num/2  num /= num
comparison -> true or flase
strict equal === data & value same
loose equal ==  only value same


let num = 1
let str = '1'

num === str -> false
num == str  -> true



Ternary Operator:
cond ? val1 : val2
true val1 false val2
let status = (age > = 18) ? "i can vote " : 'i can not vote';


logical : and or not
and -> && : (cond && cnd2 && cond3) -> all condition true->true
or  -> || : any condtion true -> true
!   -> true -> false   false ->true

non booleans
concenpts of false and true
(true || false) -> true
(false || 5)  -> 5
(false || 'love') -> love


falsy                   truthy
undefined               anything that is not false
null
0
flase
'' ->string
nan


or -> short circuiting 
(false || 5 || 1) -> 5 
gets 5 then condtion cheking stops and gives -> 5



Bitwise and or
and -> &
or -> |

let a = 2
let b = 3
c = a & b  ->2  ->smaller
c = a | b  ->3  ->bigger


Operator Precendance:
bracktes  c = (a + ( b*d) / c))

*/


console.log(2>3);
console.log(5 === 3);


let age = 27
let statusval = (age >= 18) ? 'i can vote ' : 'i can not vote';
console.log(statusval);



/*Control statement
if - else 
switch

if(cond){

}else if (){

}else{

}



*/


let marks = 98;
if(marks >= 98){
    console.log("A");
}else if (marks >= 80){
    console.log("B");
}else{
    console.log("fail");
}

let num = 2

switch(num){
    case 1: console.log('A');
    break;

    case 2 : console.log('B');
    break;
    default :console.log('D');

}


/*Loops:


*/




