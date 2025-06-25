// Asynchronous  - 3 left 

// /* CHALLENGE 1 */

// function sayHowdy() {
//   console.log('Howdy');
// }

// function testMe() {
//   setTimeout(sayHowdy, 0);
//   console.log('Partnah');
// }
// // After thinking it through, uncomment the following line to check your guess!
//  testMe(); // what order should these log out? Howdy or Partnah first?
// // Partnah Howdy 


/* CHALLENGE 2 */

// function delayedGreet() {
//   // ADD CODE HERE
//   setTimeout(()=> console.log("Welcome") , 1000) ; 
// }
// // Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

// function helloGoodbye() {
//   // ADD CODE HERE
//   console.log("Hello") ; 
//   setTimeout(() =>{
//     console.log("Goodbye") ; 
//   } , 2000) ; 

// }
// // Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

// function brokenRecord() {
//   // ADD CODE HERE
//   setInterval(() => {
//     console.log("hi again") ; 
//   }, 1000);
// }
// // Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

// function limitedRepeat() {
//   // ADD CODE HERE
//   const repeat = setInterval( ()=>{
//     console.log("every Second")
//   } , 1000 ) ; 

//   setTimeout( () =>{
//     clearInterval(repeat) ; 
//   } , 5001) ; 

// }

// function limitedRepeat() {
//   // ADD CODE HERE
//   let count =0 ; 
//   const id = setInterval( ()=>{
//     console.log("hi for now") ; 
//     count++ ; 
//     if(count == 5){
//         clearInterval(id) ; 
//     }

//   } , 1000 ) ;  

// }
// // Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

// function everyXsecsForYsecs(func , interval , duration) {
//   // ADD CODE HERE
//   let count = duration / interval  ; 
  
//   const id = setInterval( () =>{
//     if(count>0){
//         func() ; 
//         count-- ; 
//     }else{
//         clearInterval(id) ; 
//     }

//   } , interval*1000 ) ; 
// }
// // Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

// function delayCounter(target, wait) {
//     let x = 1 ; 
//     function toBeReturned(){
//         const id = setInterval(() => {
//             console.log(x) ; 
//             x++ ; 
//             if(x > target){
//                 clearInterval(id) ; 
//             }
//         }, wait);
//     }

//     return toBeReturned ; 
// }

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3


/* CHALLENGE 8 */

// function promised (val) {
//   // ADD CODE HERE

//     return new Promise((resolve , reject) =>{
//          setInterval(() => {
//             resolve(val) ; 
//          }, 2000);  
//     })
// }

// // UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val)); 
// // will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
  }
  // ADD METHODS HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);