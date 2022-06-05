/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { multiplication } from "./modules/math/multiplication.js";
import { composition } from "./modules/math/composition.js";
import { division } from "./modules/math/division.js";
import { substraction } from "./modules/math/subtraction.js";

export let a = composition(one, four);
export let b = division(four, two);
export let c = substraction(three, two);
export let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
