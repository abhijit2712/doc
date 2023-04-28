/*Window DOM BOM

window->global obj,
        created by browser,
        Represent browser window,
        top level entity
        access the browser window , or control



DOM -> DOCUMENT OBJECT MODEL
        All html code converted into ->document object



BOM ->  BROWSER OBJECT MODEL
        It allows matter to communicate with browser
        rather than html like location and other things
        to communicate with browser




DOM -> DOCUMENT OBJECT MODEL
        2)TREE LIKE STRUCTURE
        3)character ->tags  ->   tokens -> nodes ->DOM
                         tokenizier

*/



/*
    getElementById('heading'); -> return element of sprecified id
    imp: 1)call on document obj
        2) return single object


    getElementsByClassName('classname') -> return array like object 
    has same class name
    returns HTMLCOLLECTION
    iterate using a for loop



    getElementsByTagName('h1')->return mutilple obj
    same as className
    1)s is more
    2)use document obj
    3)return mutilple object
    3)the list is not an array but array like htmlcollection
    4)  
    
    Acess elements:
    1)id
    2)class
    3)tag


    $0 used to get tag
    queryselector('#header') -> fetching element which has id == header
    queryselector('.header') -> fetching element which has classname == header -> 1 ele
    queryselector('header')  -> fetching element which has tag == header -> 1 ele

    return single object

    For multiple object
    queryselectorAll -> return all the all the oject

*/


/*Update the exiting content of HTML
1).innerHTML -> get/set html content
                1)get an element and its decendant
                2)set the elemnts html content
                3)decendant tag -> rendered 
                4)Hidden elements are not rendered

2).outerHTML -> not much used rarely

3).textContent  -> get/set text based content , 
                decendant tag -> not rendered 
                3)Hidden elements not rendered

4).insertText -> 


5)CreateElement() -> 
        let newChild = document.creatElement('span');
        content.appendChild(newChild);
        child is always append at the end of element
        .createElement
        .appendChild


6)How to create a text Node:
let newpara = document.createElement('p');
let textpara = docuement.createTextNode('I am the text');
newpara.appendChild(textpara);
content.appendchild(newpara);


#easy and fast
let mypara = docuement.createElement('p');
mypara.textContent = 'I am the text'
content.appendChild(mypara);

Add at starting and middele
insertAdjacentHTML -> specific location
        -> two arg location / text content
        -> location ->beforebegin
             ->afterbegin
             ->beforeend
             ->aftereend   




7) removeChild
        1)parent must know
        2)which child remove

        ->parent.removeChild()

        let childElemnts = document.querySelector('.tempetex')
        let parentEle = document.querySelector('.chakara')
        content.removeChild(childElemnts);


8)new Way of delete -> 
        parent = childElement.parent;
        parent.removeChild(parent);

                   
*/



/*Update the exiting content of CSS
.style
.cssText
.setAttribute
.className
.classList


$0
<h1>​Element: remove() method​</h1>​
content;
<main id=​"content" class=​"main-content  ">​…​</main>​flex

content.style.color = 'red'; ->fot single ele


content.style.backgroundcolor = 'red';

content.style.backgroundColor = 'white';

content.style.cssText = 'color:green; background-color:yellow';
'color:green; background-color:yellow' -> for multiple


content.setAttribute('style','color:white'); -> can set any attrinbute

content.setAttribute('style','color:green');


content.setAttribute('style','color:white; background-color:pink');

content.setAttribute('id','heading');

className
content.className; -> string which has all class
content.className.split(' '); -> array strim string


classList -> return array of classes 
method-> add
        remove
        toggele add -> remove
        contains ->exits boolena true and false
        



*/