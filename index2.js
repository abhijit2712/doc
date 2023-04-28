/*object 
radius = 1;
draw ()


const rectangle = {

    length : 1,
    breadth : 2,

};


let  a = {} -> empty object ->key value pair


*/

console.log("yes");

//Object create
let rectangle = {
    length : 1,
    breadth : 2,

    draw: function(){
        console.log('draw');
        console.log(3);
    }
};

/*
when funtion in object -> method
when rectangle.draw -> print draw
when rectangle.draw() -> execute the funtion
*/


/*
How to create mutiple object:
object creation :
1) Factory funtion
2) Constructor funtion

2 object ->loop -> no sense of creating loop


1)Factory funtion -> 
funtion createRectangle()
has same data
*/

//Factory funtion
function createRectangle(){
    let rectangle = {
        length : 1,
        breadth : 2,
    
        // draw: function(){
        //     console.log('draw');
        //     console.log(3);
        // }

        draw2(){
            console.log('draw');
            console.log(3);
        }
    };

    return rectangle;
}


function createRectangle2(len ,bre){
    return rectangle = {        // directly return
        length : len,
        breadth : bre,
    
        draw: function(){
            console.log(this.length);
            console.log(this.breadth);
                }
    };
}



function createRectangle3(length ,breadth){
    return rectangle = {        // directly return
        length,
        breadth,
    
        draw: function(){
            console.log('draw');
            console.log(3);
        }
    };
}


/*Construtor funtion -> 
Pascal Notation->first letter of every word is capital
*/

function Rectangle(len,bre){
    this.length  = len;
    this.breadth = bre;
    this.area = function(){
        console.log('drawing');
    }            //no object empty obj refer 
}

let rec = new Rectangle(4,9);


let obj1 = createRectangle2(5,4);
let rectangleobj2 = createRectangle2(3,9);
// console.log(rectangleobj1.draw);



/*Dynamic nature object -> add any property 
a.c = 4  -> add
a.c = 5  -> remove
*/

rec.color = 'yellow'; //add
delete rec.length;   // delete


/* Contructor property it is difficult 
actual behind the scene working of above contrcutor method->

let Rectagle1 = new Funtion('lenght','breadth',`this.length  = len;
    this.breadth = bre;
    this.area = function(){
        console.log('drawing');
    }`);
*/

/*
    rectangle -> has funtion like bind  & call
    hence ractangle which is funtion is objec also
    hence funtion can be a object
*/


/*Type in JS
    referancee -> funtion object array -> all are object
    primitive vs referance 
    a = 10
    b = a;
    a++;
    log(a) -> 11
    log(b) -> 10

    referance
    a = {value :10}
    let  b = a;         ->here passing the address of a to b
    a.value++;             this is reason of getting value 11 11
    log(a.value); -> 11
    log(b.value); -> 11   //b points to a



    let a = 10
    funtion inc(a)
        a++

        inc(a) a++
        console(a);

    local scope in funtion hence the value is 
    pass by value concept

*/


    let a = 10
    function inc(a){
        a++
    }

    inc(a);         
    console.log(a);


    let b= {value :10};
    function inc2(b){
        b.value++;
    }

    inc2(b);
    console.log(b);




/*loops
    for-of iterable on only ->arrays maps
    not on object
*/

let square = {
    length : 2,
    breadth : 4
}

for(let key in square){
    //keys are reflected through key variable
    //values are reflected through rectangle[key]
    //console.log(key,square[key]);
}

 /*
 for-of iterable on only ->arrays maps
    not on object
    */


for(let key of Object.entries(square)){
    //console.log(key);
}

/*how to find property exits in object or not?

*/

if('color' in square){
    //console.log('Present');
}
else{
    //console.log('Absent');
}


/* Object Cloning
    let a = {cvalue : 10}
    let b = a
    -> not a clonning 

    how to cloning

    for(let key in rect){
        console(key,rec[key]);
    }

    let obj2 = {}; ->c copy and paste the vlaue to obj2 from a
    let src = {vake : 20};
    let dest = {}   
    for (let key in src){
        det[key] = src[key];
    }


    Assign
    let des - object.assign({},src);


    spread
    let dat = {...src}; 

*/


/*Garbage collecion -> autotically delete the unsed obj
de-allocate
we have no control on garbage collector


*/

let src={
    a:10,
    b:20,
    c:30
};
// let dest = {};

// for(let key in src){
//     dest[key] = src[key]; 
// }
// src.a++;
// console.log(dest);
// let src2 = {value :25}
// let dest = Object.assign({},src,src2); // combine 2 object
// console.log(dest);

let dest = {...src};
console.log(dest);



 
