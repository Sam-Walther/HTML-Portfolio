

//BEGINNER STUFF
let luckyNum = 8;
let whatsAnObject;
const BrickWall = "i am made of very sturdy bricks";
var bruh = "poo poo test version of let ig";
//this is automatically undefined but can be defined as null for intentionally blank
luckyNum = 'not twenty three twink bitch';
whatsAnObject = new Object();





///FUNCTION LAND
function fun(numOne, numTwo) { //apparently functions are also objects so u can do some weird stuff with that
    let a = 'im FUNctionally exclusive to this function';
    let value = numOne + numTwo;

    if (true) {// this is how a if statement works
        let a = 'exclusive to this block';
        var b = 'heeoisted up to local scope which is weird';

    }
    return value;
}




//const fun = function (a, b) { // can somehow change the function i think
//uh this just popped an error uh oh
//  return a - b;
//}



function higherOrder(fun) {
    fun();// runs it like a bitch boy ig
    return function () {

    }
}

function giveMeClosure() {
    let a = 10;
    return function () {
        a++;
        return a;
    }
}

function boiiiWhatIsThis() {
    console.log(this); // references an object based on how a function is called?
    //when referenced globally its referencing the window object in the browser
    //however if attached to an object (like a let or idk another function) and is called by it

    //it will refer to the object its in ohhh ok so it just references "this" like whatever its in
    //thats pretty goofy
}

const person = {
    boiiiWhatIsThis: function () {
        console.log(this);
    }
}

const guy = {};
//also u can bind a function to an object? by using the bind method

const personFun = boiiiWhatIsThis.bind(guy);
// or just use a funky arrow to define functions

/// also when functions pass arguments if its a primitive it makes a copy but if its an object it changes the object so be careful


//OBJECTS

let obj = new Object();//this make an object

let coolerObj = {// objects contain collections of key values known as properties and values  
    dna: 'AACTG',
    name: 'John',
    born: Date.now(),
    walk() {
        console.log('hello i am john and i like to walk')
    }
}; // but this do too 


//and apparantley objects can inherit properties from each other with the prototype chain
coolerObj.__proto__.__proto__;
//every object has a private property that links to ONE prototype


Object.getPrototypeOf(coolerObj);//recommended way to get the prototype

class Human {// and apparently u can do object oriented stuff to but its just different type of the prototype shit

    constructor(name) {// i think this is basically just __init__ but js version
        this.dna = 'TRALALERO TRALALA';
        this.name = name;
    }

    //u can also have some getters and setters for stuff
    get gender() {
        return this.gender;
    }

    set gender(val) {
        this.gender = val;

    }

    static isHuman(human) {// this is global to the class cus it got the static attribute
        if (human.dna == 'TRALALERO TRALALA') {
            return false;
        }
    }
}
//data types

const list = ['classic', 'changeable', 'list', 'shenanagins']

const uniq = new Set(list) // allows for collections of unique itmes

const dict = new Map([
    ['uh i think im in', 1],
    ['a dictionary bro', 2],
    ['shut up idk how these work :(', 3]

])
//JS APPARENTLY DEALLOCATES OBJECTS FROM MEMORY WHEN THEY ARENT BEING REFERENCED IN CODE
//but with a map they alwasy will be referenced but u can make WeakMap to allow them to be sent to the dump


//ASYNCRONOUS CODE RUNNING
//apparently asyncronous stuff allows for multiple things to be loaded at once
//timeout allows stuff to be cued in the event loop but called well... later 

// however too many and u go to timeout hell so dont nest them to far
setTimeout(() => {

    console.log('boiii gotta wait 5 seconds to see this');

}, 5000)

let promise = new Promise( //i pinkie promise this unknown value will become known in the future on god
    (resolve, reject) => {
        if (iGetMyWorkDone) {
            resolve('how tf u do that')
        } else {
            reject('FUCK FUCK FUCK FUCK I DIDNT GET MY WORK DONEEEE');
        }
    })

promise
    //these handle the two possible outcomes
    .then(gotIt => {
        console.log('yeahhh baby i got my work done')
    })

    .catch(boi => {
        console.log('boiiii get ur work done')
    })

async function asyncFun() {
    try {
        const restult = await promise;
    }
    catch (error) {//ok so this is basically just try except

    }
}

//exporting to other files cus u got too bloated and fat in one
//ok apparently exports gotta be at the top level of this beeeotch
//export default function helper() { // goes to another thing if u do import it by doing "import funcName from './filename.js'""
console.log('help me, help you or sum buuulllshit');
//}

//how it interacts with html stuff WOOOOOOO

const btnClass = window.document.querySelector('.button')//i just caught this wild class
console.log(btnClass)
const allBtns = document.querySelectorAll('.button') // and i used this big evil net to catch all of them

btnClass.addEventListener('click', () => {//this can assign a function that can be called when u do the action
    console.log('i saw yo bitch ass dun clicked a button')

    document.body.style.backgroundColor = 'red';
}) //this returns an instance of the element class which u can get stuff frm\om