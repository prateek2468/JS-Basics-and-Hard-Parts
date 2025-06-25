// Closures, Scope, and Execution Context - 9 left

// function createFunction() {

//     const func = function sayHello(){
//         console.log("Hello") ; 
//     }

//     return func ; 
// }


// const function1 = createFunction();
// function1(); // => should console.log('hello');

// function createFunctionPrinter(input) {

//     function printer(){
//         console.log(input) ; 
//     }

//     return printer ; 

// }

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// //CHALLENGE 3
// function outer() {
//   let counter = 0; // this variable is outside incrementCounter's scope
//   function incrementCounter () {
//     counter ++;
//     console.log('counter', counter);
//   }
//   return incrementCounter;
// }

// const willCounter = outer();
// const jasCounter = outer();

// // Uncomment each of these lines one by one.
// // Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter(); 
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


// function addByX(x) {

//     function add(num){  
//         console.log(x+num) ; 
//         return x+num ; 
//     }

//     return add ; 

// }
// console.log("Second Part")
// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9



// // Challenge 4 
// function addByX(x) {

//     function add(num){  
        
//         return x+num ; 
//     }

//     return add ; 

// }
// const addByTwo = addByX(2);

// function once(func) {
//     let oneAns   ;
//     function oneTime(num1){
//         if(oneAns >0){
            //     return oneAns ; 
            // }else{
            //     oneAns = func(num1) ; 
            //     return oneAns ; 
            // }

//     }

//     return oneTime ; 

// }

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// // CHALLENGE 5
// function after(count, func) {

//     function delayCall(){
//         if(count >1){
//             count-- ; 
//             console.log("-") ; 
//         }else{
//             func() ; 
//         }
//         return  ; 
//     }
//     return delayCall ; 

// }

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// // CHALLENGE 6
// function delay(func, wait , ...params) {
//     let x = "First" ; 
//     setTimeout(() => func(...params) , wait ) ; 
// }


// delay((name) => {console.log(`Hello ${name}`)} , 1000 ) ; 

// // CHALLENGE 7
// function rollCall(names) {
//     let arr = names ; 
//     function iterate(){
//         if(arr.length >0){
//             console.log(arr.shift()) ; 
//         }else{
//             console.log("Done") ; 
//         }
//     }

//     return iterate ; 

// }

// // /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

// // CHALLENGE 8
// function saveOutput(func, magicWord) {
//     let obj = {}  ; 
//     function strangeBehave(input){
//         let result ; 
         
//         if(input === magicWord){
//             return obj ; 
//         }else{
//             obj[input] = func(input) ; 
//             return obj[input] ;
//         }
//     }

//     return strangeBehave ; 

// }

// // /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog(10)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// // CHALLENGE 9
// function cycleIterator(array) {
//     let i=0 ; 
//     function iterate(){
//         let output = array[i % array.length] ; 
//         i++ ; 
//         return output ;  
        
//     }

//     return iterate ; 

// }

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
// function defineFirstArg(func, arg) {

//     function brandNewReturn(...params){
//         return func(arg , ...params) ; 
//     }

//     return brandNewReturn ; 

// }

// // /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
// function dateStamp(func) {

//     function ret(...params){
//         const ans2 = func(...params) ; 
//         const ans1 = new Date() ; 
//         const output = {
//             date: ans1.toDateString() , 
//             output : ans2 , 
//         } ; 

//         return output ; 

//     }

//     return ret ; 


// }

// // /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
// function censor() {

//     let tobeSaved = {} ;
//     const stringSave = (input1 , input2 ) =>{
//         if(input2 === undefined){
//             for (const key in tobeSaved){
//                 input1 = input1.replace(key , tobeSaved[key] ) ; 
//             }
//             return input1 ; 

//         }else{
//             tobeSaved[input1] = input2 ; 
//         }
//     }

//     return stringSave ;

// }

// // /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {

}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2
