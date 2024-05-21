//Q.1: Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".

let fruits: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruits);
//Q.2: Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.

let numbers: number[] = [10, 20, 30, 40];
console.log(numbers);

//Q.3: Access the third element of the fruits array and assign it to a variable named thirdFruit.

let thirdFruit = fruits[2];
console.log(thirdFruit);
//Q.4: Change the second element of the numbers array to 25.

numbers[1] = 25;
console.log(numbers);
//Q.5: Add the element "grape" to the end of the fruits array using the method.

fruits.push("grape");
console.log(fruits);
//Q.6: Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.

let lastFruit = fruits.pop();
console.log(lastFruit);
//Q.7: Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.

let firstFruit = fruits.shift();
console.log(firstFruit);
//Q.8: Add the element "kiwi" to the beginning of the fruits array using the method.

fruits.unshift("kiwi");
console.log(fruits);
//Q.9: Remove 2 elements from the fruits array starting from index 1 using the method.

fruits.splice(0, 2);
console.log(fruits);
//Q.10: Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.

fruits.unshift("pineapple", "pear");
console.log(fruits);
//Q.11: Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.

let citrusFruits: string[] = ["orange", "lemons", "limes", "grapefruits"];
console.log(citrusFruits.splice(0, 2));
//Q.12: Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.

let lastTwoFruits: string[] = ["orange", "banana", "mango", "apple"];
console.log(lastTwoFruits.splice(2, 4));
