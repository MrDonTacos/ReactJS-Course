
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';





ReactDOM.render(<IndecisionApp />, document.getElementById("app"))








// import squarePer, { helloWorld, triangle, square } from '../src/utils.js';
// import { isAdult, carDrink} from '../src/person';
// import validator from 'validator';


// console.log('app.js is running!');
// helloWorld();
// console.log(isAdult(18));
// console.log(carDrink(20));
// console.log(triangle(4,4));
// console.log(square(4,4));
// console.log(squarePer(8));

// console.log(validator.isEmail('saul.canedocast@hotmail.com'));

// Stateless functiona component






// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// } //Stateless Funcional Component


// class OldSyntax {
//     constructor(){
//         this.name = "Mike";
//         this.getGreeding = this.getGreeding.bind(this);
//     }
//     getGreeding() {
//         return "Hello Mike"
//     }
// }

// const oldSintaxd = new OldSyntax();
// const getGreeding = oldSintaxd.getGreeding;
// console.log(getGreeding())

// class NewSintax {
//     name = 'Jean';
//     state = {
//         error: undefined
//     }
//     getGreeding = () => 'Hello '
// }

// const newSyntax = new NewSintax();
// console.log(newSyntax);
// const newGeetGreeding = newSyntax.getGreeding;
// console.log(newGeetGreeding());





