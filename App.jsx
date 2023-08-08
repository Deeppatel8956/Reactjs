import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  console.log("hello");
  //The length property returns the length of a string:
  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(text.length);

//slice() extracts a part of a string and returns the extracted part in a new string.
let text2="apple,kiwi, banana"
console.log(text2.slice(7,13));

//The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, orange";
console.log(str.substring(6,9));

//The replace() method replaces a specified value with another value in a string:
//The replace() method replaces only the first match
//The replace() method returns a new string.
let g="i am superhero"
console.log(g.replace("superhero","beginner"));

//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// let text4 = "I love cats. Cats are very easy to love. Cats are very popular."
// console.log(text4.replaceALL("cats","dogs"));
// console.log(text4.replaceALL("Cats","dogs"));

//A string is converted to upper case with toUpperCase():
let fh="hello world"
console.log(fh.toUpperCase());
//A string is converted to upper case with toLowerCase():
console.log(fh.toLowerCase());

//The trim() method removes whitespace from both sides of a string:
let text1 = "      Deep      ";
// console.log(text1.trim());
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// console.log(text1.trimStart());
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(text1.trimEnd());

//The padStart() method is a string method.
//To pad a number, convert the number to a string first.
//See the example below.
let text6 = "5";
let padded = text6.padStart(4,"x");
console.log(padded);

//The charAt() method returns the character at a specified index (position) in a string:
let text20 = "HELLO WORLD";
console.log(text20.charAt(0));

//A string can be converted to an array with the split() method:
console.log(text20.split(1));

//he indexOf() method returns the index (position) the first occurrence of a string in a string:
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
console.log(str.indexOf("apple"));
console.log(str.lastIndexOf());
console.log(str.search("orange"));
console.log(str.includes("good"));
  return (
    <><h1>Monstar</h1></>

   
  )
}

export default App
