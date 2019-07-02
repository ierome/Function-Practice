// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------
var largestNumber = Math.max(...numbers)
console.log(largestNumber)
// ---------------------------
// 2. Find longest string
// ---------------------------
function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }

console.log(findLongestWord(strings));
// ---------------------------
// 3. Find even numbers
// ---------------------------
function isEven(n) {
    return n % 2 == 0;
 }
function evenNum(a) {
    newA = '';
    for (let i=0; i < a.length; i++) {
        if(isEven(a[i])){
            newA += a[i] + " "
        }else{
            //nothing
        }
} return newA;
}
console.log(evenNum(numbers));


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function isEven(n) {
    return n % 2 == 0;
 }
function oddNum(a) {
    newA = '';
    for (let i=0; i < a.length; i++) {
        if(isEven(a[i])){
            //Do nothing
        }else{
            newA += a[i] + " "
        }
} return newA;
}
console.log(oddNum(numbers));


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function containIs(a) {
    newAm = '';
    for (let i=0; i < a.length; i++) {
        if(a[i].includes("is")){
            newAm += a[i] + " "
        }else{
            //
        }
} return newAm;
}
console.log(containIs(strings))


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var bigArray = strings.concat(numbers);
console.log(bigArray);



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

function teachJava(a) {
    newAm = '';
    for (let i=0; i < a.length; i++) {
        if(a[i].teaches.includes("JavaScript")){
            newAm += a[i].firstname + " "
        }else{
            //
        }
} return newAm;
}
console.log(teachJava(instructors))