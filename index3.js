// /*Two type of string


// */

// let lastname = 'babbar';
// lastname

// typeof(lastname);


// // let meassage = "This is \n \` my fist \n";
// //single cquote not working / use for this worling

// let meassage = `hello love,
// Thanks for the opportiuty

// regards
// Babbar`;

// //name can be dynamic

// var love = 'ove babbar'
// let meassage2 = `hello ${love},  
// Thanks for the opportiuty

// regards
// Babbar`;
// console.log(meassage2);

// /*object literal
// template literal -> same order
// */

// let date = new Date();

// let date2 = new Date(1998,1,28,7);
// // console.log(date2);



// //Getter setter ->putting values

// /*arrays ->object refrance  
// creation let numbers = [1,3,5,7];


// // */

// // let numbers = [1,3,5,7];
// // console.log(numbers);

// // //insert :1)end 2)middle 3) end
// // numbers.push(9);            //at begin
// // numbers.unshift(8);         //at begin
// // numbers.splice(3,0,90);      //at middle loc,delet ind, value


// //searching
// // console.log(numbers.indexOf(-10)); //-1 not present

// // //check no exist or not

// // console.log(numbers.indexOf(4,2));  //2 para fromt which index

// // let courses =[
// //     {no:1,naam :'love'},
// //     {no:2,naam :'Rahul'},
// ];

// // console.log(courses); 
//  //indexOf not worling 
// //beacuse they have diffrent address

// /*Callback funtion
// jis funtion se data milega o callback funtion rahega
// def : A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// action -> depends on another action
// paneer example 
// */


// // let course = courses.find(function(course){
// //     return course.naam == 'love';
// // });


// //small more -> converted from above
// /*predecate funtion -> funtion (course){
//     return course.naame == 'love'  
// }
// 1 -> course hai isliye 1 course parameter -> 1 input para
// condtion true return that object which is in passes in paramter




// Arrow funtion:->
// 1)remove funtion name
// 2) if single para -> remove bracket
// 3) if 1 line code -> remove return
// 4) add arrow after paramter

// if no para () =>
// more than 1 () =>

// */
// let course2 = courses.find(course => course.naam == 'Rahul' );

// // console.log(course);
// // console.log(course2);


// /*Removing element -> 
// //end -> pop()
// //begining -> shift()
// //middle  -> splice(3,count->number ele want to del);
// */


// // numbers.pop();      //begin
// // numbers.shift();    //end
// // numbers.splice(2,1);    //middle

 //----------------------------------------------------------------

let numbers = [1,2,,3,4,5];
let number2 = numbers;

// numbers = [];
// numbers.splice(0,numbers.length);
// numbers.length = 0;   // most used
// console.log(numbers);
// console.log(number2); 


//combine -> conacat method use for this 

let first = [1,2,3]; 
let second = [4,5,6,];
let combined = first.concat(second);
// console.log(combined);

//slice -> para -> starting and endling index
 let marks = [10,20,30,40,50,60,70,80];
let sliced = marks.slice();
// console.log(sliced);

/*spread op*/
let combined2 = [...first,'q',...second,'b',true];
// console.log(combined2);


//itration
//for of  for each
for (let value of combined2){
    // console.log(value);
}
// console.log("_________________________________________");

combined2.forEach(function(num){
    //console.log(num);
});

//arr name foreach name of num -> funtion
// combined2.forEach( num=>  console.log(num));



//Joining arrays
let nums = [10,-20,30,-40,50];
const joined = nums.join(',');

//split
let msg ='This is my first message';
let parts = msg.split(' ');
// console.log(parts);

//sort
//reverse

/*filtering -> filter method -> callback funtion
*/

let fil = nums.filter(v => v >= 0);

console.log(fil);

//mapping  -> maps each elements to something 
//mapping with objects
let items = fil.map(function(num){
    return {value : num};   
});