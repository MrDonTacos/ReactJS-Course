import squarePer, { helloWorld, triangle, square } from '../src/utils.js'
import { isAdult, carDrink} from '../src/person'

console.log('app.js is running!');
helloWorld();
console.log(isAdult(18));
console.log(carDrink(20));
console.log(triangle(4,4));
console.log(square(4,4));
console.log(squarePer(8));