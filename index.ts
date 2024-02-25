import { RandomizedSet } from "./problems/randomizedSet";

var obj = new RandomizedSet();
console.log(obj.insert(1));
console.log(obj.remove(2));
console.log(obj.insert(2));
console.log(obj.getRandom());
console.log(obj.remove(1));
console.log(obj.insert(2));
console.log(obj.getRandom());
