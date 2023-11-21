console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const representMe = {
  // TODO - add properties here
firstName: 'Ty',
lastName: 'Domben',
hasSiblings: true,
shoeCount: 12,
favThreefoods: ['Pizza', 'IceCream', 'Candy']

};
console.log('A little about me:', representMe);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = representMe.firstName + representMe.lastName;
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log(representMe.favThreefoods[0])
console.log(representMe.favThreefoods[2])


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(representMe.shoeCount)

console.log(representMe.shoeCount += 1)

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

representMe.favoriteColor = 'nuetrals'
console.log("My favorite color(s) is " + (representMe.favoriteColor))
