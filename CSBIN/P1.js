/* ========== *
* Basic JavaScript *
*.  Challenge 1 *
* =========== */

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number")
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === "undefined")

// myVar = "name"
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished

/* ========== *
* Challenge 2 *
* =========== */


// function buildSentence(word1, word2, word3) {
//   //your code goes here...
//   console.log(word1.charAt(0).toUpperCase() + word1.slice(1) + " "+ word2 + " "+ word3 + "." ); 

// }

// buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// buildSentence("we're", "number", "1") //=> "We're number 1."

/* ========== *
* Challenge 3 *
* =========== */


// function lastLetter(word) {
//   //your code goes here...
//   console.log(word.slice(-1)) ; 
// }

//Uncomment the lines below to test your code
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"


/* ========== *
* Challenge 4 *
* =========== */


// function buildGreeting(time, name) {
//   //your code goes here...
//     if(time>=0 && time<= 11 ){
//         console.log(`Good Morning, ${name}!`) ; 
//     }else if(time>=12 && time<= 16 ){
//         console.log(`"Good Afternoon, ${name}!`) ; 
//     }else if (time>=17  && time<= 23 ){
//         console.log(`"Good Evening, ${name}!`) ; 
//     }else{
//         console.log(`That's not a real time, ${name}. Maybe you need some sleep!`)
//     }


// }


// buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// buildGreeting(12, "John") //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/* ========== *
* Challenge 5 *
* =========== */


// console.log("CodeSmith".indexOf("o") === 1);
// console.log("hello".indexOf("ll") === 2);
// console.log("zebra".indexOf("z") === 0);
// console.log("banana".indexOf("B") === -1);


// function letterExists(word, letter) {
//   //your code goes here...

//   console.log(word.indexOf(letter) === -1  ? false : true) ; 

// }

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true


/* =========== *
* Challenge 7 *
* ============ */


// function isPrime(number) {
//   // your code here...

//     if(number <=1 ){
//         return false ;
//     }
//     for(let i=2 ; i<= Math.sqrt(number) ; i++){
//         if(number%i === 0  ) return false ; 
//     }
//     return true ; 

// }

// console.log(isPrime(-7)); // => false
// console.log(isPrime(2)); // => true
// console.log(isPrime(11)); // => true
// console.log(isPrime(15)); // => false

/* ========== *
* Challenge 8 *
* =========== */


// function range(start, end) {
//   //your code goes here...
//     for( let i = start ; i<=end ; i++ ){
//         process.stdout.write(`${i} `) ; 
//     }
// }

// //Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>


/* =========== *
* Challenge 9 *
* ============ */


// function myIndexOf(array, ele){
//   // your code here...

//   console.log(array.indexOf(ele)) ; 

// }

// myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
// myIndexOf(["a", "b", "c"], "a") //=> 0
// myIndexOf(["a", "b", "c"], "d") //=> -1    

/* =========== *
* Challenge 10 *
* ============ */

// function unique(array) {
//   //your code goes here...

//   const unique = array.filter((item , index) => array.indexOf(item) === index) ; 
  
//   console.log(unique) ; 

// }

// unique([1, 1, 2, 3, 3])//=> [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) //=> ["a", "c", "aa", "b"]

/* =========== *
* Challenge 11 *
* ============ */

// function longestWord(sentence) {
//   // your code here...
//   return sentence.split(" ")
//   .reduce((longest , word) => {
//     return word.length > longest.length ? word :  longest ; 
//   } , "") ; 
  
// }

// //Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''


/* =========== *
* Challenge 12 *
* ============ */

// function disemvowel(string) {
//   // your code here...
//   return string.replaceAll(/[aeiou]/gi , "") ; 
  
// }


// //Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

// /* =========== *
// * Challenge 13 *
// * ============ */

// function divisibleByFivePairSum(array){
//   // your code here...

//   let answer = [] ; 
//   array.forEach((element1 , i) => {
//     array.forEach((element2 , j) =>{
//         if(j>i && (element1+element2)%5 === 0 ) answer.push([i, j]) ; 
//     })  
//   });
//   return answer ; 
// }


// //Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]

/* =========== *
* Challenge 14 *
* ============ */

// function highestScore(students) {
//   // your code here...

//   const s = students.reduce((bestSoFar , currentOne) => 
//     bestSoFar.score > currentOne.score ? bestSoFar : currentOne 
//   ) ; 

     
//     let ans = s.name
//     .split(" ")
//     .map(word => word.slice(0 , 1))
//     .join("")
//     ans+= s.id ; 
//     return ans ; 


// }

// //Uncomment the lines below to test your function:

// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];

// console.log(highestScore(students)); //=> 'LS2'


/* =========== *
* Challenge 15 *
* ============ */

// function leastCommonMultiple(num1, num2) {
//   // your code here...

//   let min = Math.min(num1 , num2) ; 
//   let max = Math.max(num1 , num2) ; 

//   for(let i =max ; i<(num1*num2) ; i+= max){
//     if(i%min == 0  ){
//         return i ; 
//     }
//   }
//   return num1*num2  ; 

// }


// //Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312

