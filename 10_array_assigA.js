

const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Array Elements = ${arrayFruits}`);
console.log(``);

console.log(`1. Log the first and last element on console`);
console.log(`First Element :  ${arrayFruits[0]}`);
console.log(`Last Element : ${arrayFruits[arrayFruits.length-1]}`);
console.log(``);

console.log(`2. Add element -> "Papaya" before 'Banana' and then log array on console`);
arrayFruits.unshift("Papaya");
console.log(`Updated Array : ${arrayFruits}`);
console.log(``);

console.log(`3. Remove 'Mango' from the array`);
arrayFruits.splice(4, 1);
console.log(`Updated Array : ${arrayFruits}`);
console.log(``);

console.log(`4. Add element or insert an element 'Pineapple' at the last position`);
arrayFruits.push("Pineapple");
console.log(`Updated Array : ${arrayFruits}`);
console.log(``);

console.log(`5. Insert an element - 'Dragon Fruit' before "Water Melon" `);
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(`Updated Array : ${arrayFruits}`);
console.log(``);

console.log(`6. Replace an element 'Orange' with 'Kiwi' `);
arrayFruits.splice(2, 1, "Kiwi");
console.log(`Updated Array : ${arrayFruits}`);
console.log(``);

console.log(`7. Log the elements starting from index 1 to 4`);
console.log(`Elements from index 1 to 4 : ${arrayFruits.slice(1, 5)}`);
console.log(``);

console.log(`8. Only select last 3 element and log on console using length property`);
console.log(`Last 3 elements : ${arrayFruits.slice(arrayFruits.length-3)}`);
console.log(``);