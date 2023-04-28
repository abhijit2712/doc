/*
Browser Announcent -> events
    ->events
    ->respond to event
    ->data store in event
    ->stop event
    ->life cycle of event

    events => are invisible
    monitorEvent() -> used to see events
    turnoff->unmonitorEvents
    form->submit ->Action



    EventListner -> classes -> blueprint
    object -> reality
    js -> has-> interface ->blueprint


    EventTarget -> interface -> implemented by object that
    can recive & may have listeners for them
    listenrer -> how to respond
    addEventListener()
    removeEventListener()
    dispatchEvent()

    event target <- node <- element
    <- = inherit


*/


/*
1) Take a event target 
2) 

psudo code:
<event targe.> .addEventListner (<event to list for>,<funtion to run when event happed>)
need :
1)Event target
2)Event type
3)Funtion -> what to do when event happned




*/



document.addEventListener('click',function(){
    console.log('i have clicked on document');
});

let heading = document.querySelector('#hi');
console.log(heading);

let bt1 = document.querySelectorAll('button');
console.log(bt1);

  bt1[0].addEventListener('click',function(){
     heading.innerHTML = 'This is new heading which is generate when you clicked on the button';
 });


 bt1[1].addEventListener('click',function(){
    heading.style.background = 'red';
});



/*Remove event listner
    best way
    funtion print(){
        console.log('hi');
    }

    document.addEventListener('click',print);
    document.removeEventListener('click',print);

    remove only work in
    1)same event target
    2)same event type
    3)same function
    */




/* Phases of event
1)Capturing -> capturing all travense until target not found
2)At target phase -> event 
3)Bubbling phase ->reverse of capturing ->by defult execute in this phase





The event object:
when event occurs ,addevent lisntern function->

*/

const content = document.querySelector('#wr');

content.addEventListener('click',function(event){
     console.log(event);
});



/*Default Action
prevent the default action

*/

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maza aaya, accha laga');
});



/*Avoid to many events

*/
let myDiv =document.createElement('div');
function paraStatus(event){
    console.log('prar' + event.target.textContent);
};
myDiv.addEventListener('click',paraStatus);

for(let i=1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is a para  ' + i;

    
    myDiv.append(newElement);
}

document.body.appendChild(myDiv);


let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});