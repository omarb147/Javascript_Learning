/* Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/
// Your code here.

function reverseArray(array){
    let newArray = []
    for (let el of array ){
        newArray.unshift(el)
    }
    return newArray
}

function reverseArrayInPlace(array){
    arrayLength = Math.floor(array.length/2)
    for(let i = 0; i < arrayLength; i++){

        let first = array[i]
        let second = array[(array.length-1)-i]
        array[i] = second
        array[(array.length-1)-i] = first
     }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]