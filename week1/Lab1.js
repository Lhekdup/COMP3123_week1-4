// 1. Write a JavaScript program to capitalize the first letter of each word of a given string "the quick brown fox".

const str = "the quick brown fox";

const title = str
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(title);

// 2. Write a JavaScript program to find the largest of three given integers.

function largestOfThree(a, b, c) {
  return Math.max(a, b, c);
}

console.log(largestOfThree(12, -1, 3));

// 3. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

function moveLastThreeToFront(str) {
  if (str.length < 3) {
    return "String must be at least 3 characters long.";
  }
  const lastThree = str.slice(-3);  
  const rest = str.slice(0, -3);     
  return lastThree + rest;
}

console.log(moveLastThreeToFront("javascript"))

// 4. Write a JavaScript program to find the types of a given angle.

function angleType(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else if (angle === 360) {
    return "Full rotation";
  } else {
    return "Invalid angle";
  }
}

console.log(angleType(90));  
console.log(angleType(33));   
console.log(angleType(146));  
console.log(angleType(270));  
console.log(angleType(360));  
console.log(angleType(180));  