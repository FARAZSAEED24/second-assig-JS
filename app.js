// Q-1
// var input = prompt("Enter A Word")
// var uppercase = input.toUpperCase();
// alert(uppercase)

// Q-2
// function toTittleCase(a) {
//     var words = a.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }

//     return words.join('  ');
// }

// var a = prompt("Enter A Sentence")
// alert(toTittleCase(a))

// Q-3
// var input = prompt("PLEASE ENTER YOUR FAVOURITE MOBILE MODEL: ")
// alert(input.length)
// Q-4
// var a = prompt("Enter A Word")
// alert(a.slice(-1))
// Q-5
// var a = "PAKISTANI"
// alert(a.slice(-2,-1))\
// Q-6
// function checkValidUserName(a) {
//     var b = a.split("")
//     b.forEach(e => {
//         if (e === "@" || e === "." || e=== "," || e === "!") {
//             alert("enter a valid user name")
//         }
//     });
// }
// var input = prompt("Enter username")
// checkValidUserName(input)
// Q-7
// function howManyThe(a) {

//     var b = a.split(" ")
//     var count = 0

//     for (let i = 0; i < b.length; i++) {

//         if (b[i].toLowerCase() === "the") {
//             count += 1;
//         }

//     }

//     alert(`NUMBER OF THE ARE : ${count}`)

// }
// var sentence = "The quick brown fox jumps over the lazy dog"
// howManyThe(sentence)
// Q-8
// var a = "PAKISTANI";
// alert(a.slice(3, 4));

// Generating random numbers
// Q-3
// var secret = 6;

// var userInput = parseInt(prompt("Guess A Number"));

// if (secret === userInput) {
//   alert("congratulation");
// } else {
//   alert("Try Again");
// }

// Converting strings to integers and decimals
// Q-1
// var weight = parseFloat(prompt("Enter Your Weight"));
// alert(weight)

// Converting strings to numbers, numbers to strings
// Q-1
// var input = parseInt(prompt("PLEASE ENTER A NUMBER"))
// alert("DATA TYPE: " + typeof(input) + " NUMBER: " + input )

// Q-2
// var input = prompt("PLEASE ENTER A NUMBER: ")
// alert(input.replace('.',''))

// Controlling the length of decimals
// Q-1
// var percentage = 30 / 45 * 100;
// alert(percentage.toFixed(2))
// DATE METHODS - Assignment # 31-34 - Chapters 31 -34 - Saylani Web and Mobile Hybrid App Development Assignment

// Task 01
// var current_date = new Date;
// document.write(`${current_date} <br>`);

// // Task 02
// var date_ = new Date;
// var month_names = {
//     0:'January',
//     1:'February',
//     2:'March',
//     3:'April',
//     4:'May',
//     5:'June',
//     6:'July',
//     7:'August',
//     8:'September',
//     9:'October',
//     10:'November',
//     11:'December'
// }
// var current_month = month_names[date_.getMonth()];
// document.write(`Current Month: ${current_month} <br>`);

// // Task 03
// var date_ = new Date;
// var day_names = {
//     0:'Sun',
//     1:'Mon',
//     2:'Tue',
//     3:'Wed',
//     4:'Thu',
//     5:'Fri',
//     6:'Sat'
// }
// var current_day = day_names[date_.getDay()];
// document.write(`Today is ${current_day} <br>`);

// // Task 04
// var date_ = new Date;
// var day_names = {
//     0:'Sun',
//     1:'Mon',
//     2:'Tue',
//     3:'Wed',
//     4:'Thu',
//     5:'Fri',
//     6:'Sat'
// }
// var current_day = day_names[date_.getDay()];
// var fun_or_not = current_day == 'Sun' || current_day == 'Sat' ? 'It’s Fun day':'';
// document.write(`${fun_or_not} <br>`);

// // Task 05
// var date_ = new Date;
// var current_date = date_.getDate();
// var first_last_days = current_date < 16 ? 'First fifteen days of the month':'Last days of the month';
// document.write(`${first_last_days} <br>`);

// // Task 06
// var date_ = new Date;
// var elapsed_milliseconds = date_.getTime();
// var elapsed_minutes = (date_.getTime() / 1000) / 60;
// document.write(`
//     Current Date: ${date_} <br>
//     Elapsed Milliseconds since January 1, 1970: ${elapsed_milliseconds} <br>
//     Elapsed Minutes since January 1, 1970: ${elapsed_minutes} <br>
// `);

// // Task 07
// var date_ = new Date;
// var time = date_.getHours();
// document.write(`${time > 11 ? 'Its PM':'Its AM'} <br>`);

// // Task 08
// var current_date = new Date();
// var lastMonthOfYear = new Date(current_date.setMonth(11));
// var laterDate = new Date(current_date.getFullYear(), current_date.getMonth()+1, 0);
// document.write(`${laterDate} <br>`);

// // Task 09
// var current_date = new Date();
// var ramadan_date = new Date(2020,3,24);
// var diffrence_in_time = current_date.getTime() - ramadan_date.getTime();
// var diffrence_in_days = Math.round(diffrence_in_time / (1000 * 3600 * 24));
// alert(`${diffrence_in_days} days have passed since 1st Ramadan, 2020 `);

// // Task 10
// var beginning_date = new Date(2020,0,1);
// var current_date = new Date();
// var diffrence_in_time = Math.round((current_date.getTime() - beginning_date.getTime()) / 1000);
// document.write(`On reference date ${current_date} , ${diffrence_in_time} Seconds had passed since beginning of 2020 <br>`)

// // Task 11
// var current_date = new Date();
// document.write(`Current Date ${current_date} <br>`);
// current_date.setHours(current_date.getHours() - 1);
// document.write(`1 Hour ago, it was ${current_date} <br>`);

// // Task 12
// var current_date = new Date();
// alert(`Current Date ${current_date}`);
// current_date.setFullYear(current_date.getFullYear() - 100);
// alert(`100 Years ago, it was ${current_date}`);

// // Task 13
// var usr_age = parseInt(prompt('Please Enter Your Age: '));
// var today = new Date();
// var usr_dob = today.getFullYear() - usr_age;
// document.write(`Your age is ${usr_age} <br> Your birth year is ${usr_dob}`)

// // Task 14
// var date_ = new Date();
// var no_of_units = 410;
// var charges_per_charges = 16;
// var late_charges = 350;
// var net_amount = no_of_units * charges_per_charges;

// var month_names = {
//     0:'January',
//     1:'February',
//     2:'March',
//     3:'April',
//     4:'May',
//     5:'June',
//     6:'July',
//     7:'August',
//     8:'September',
//     9:'October',
//     10:'November',
//     11:'December'
// }
// document.write(`
//     <h2>K-Electric Bill</h2>
//     <h4>Customer Name: ABC Customer</h4>
//     <h4>Month: ${month_names[date_.getMonth()]}</h4>
//     <h4>No of Units: ${no_of_units}</h4>
//     <h4>Charges per units: ${charges_per_charges}</h4>
//     <h4>Net Amount Payable (within due date): ${net_amount}</h4>
//     <h4>Late Payment Charges: ${late_charges}</h4>
//     <h4>Gross Amount Payable(After Due Date): ${net_amount + late_charges}</h4>
// `)
// FUNCTION - Assignment # 35-38 - Chapters 35 - 38 - Saylani Web and Mobile Hybrid App Development Assignment

// Task 01
// function date_time(){
//     current_date = new Date;
//     document.write(`${current_date} <br>`);
// }
// date_time();

// // Task 02
// function greet(){
//     f_name = prompt('Enter Your First Name: ');
//     l_name = prompt('Enter Your Last Name: ');
//     document.write(`Hello ${f_name} ${l_name} <br>`);
// }
// greet();

// // Task 03
// function sum() {
//     num_1 = parseInt(prompt('Enter First Number: '));
//     num_2 = parseInt(prompt('Enter Second Number: '));
//     return num_1 + num_2;
// }
// sum();

// // Task 04
// function calculator(number_1,number_2,opr) {
//     if(opr == '+'){
//         result = number_1 + number_2;
//     }
//     else if(opr == '-'){
//         result = number_1 - number_2;
//     }
//     else if(opr == '*'){
//         result = number_1 * number_2;
//     }
//     else if(opr == '/'){
//         result = number_1 / number_2;
//     }
//     document.write(`${number_1} ${opr} ${number_2} = ${result}`);
//     return result;
// }
// calculator(4,2,'*');

// // Task 05
// function squares(number) {
//     return number**2;
// }
// console.log(squares(4));

// // Task 06
// function factorial(n) {
//     if (n === 0) {  
//         return 1;  
//     } 
//     else {  
//         return n * factorial( n - 1 );  
//     } 
// }
// console.log(factorial(5));

// // Task 07
// function count(start,end) {
//     for(let i = start; i < end + 1;i++){
//         document.write(`${i} <br>`);
//     }
// }
// count(1,100);

// // Task 08
// function  calculateHypotenuse(base,perp) {
//     function calculateSquare(num) {
//         return num**2;
//     }
//     return calculateSquare(base) +  calculateSquare(perp);
// }
// console.log(calculateHypotenuse(4,4));

// // Task 09
// function AreaOfTriangle(width,height) {
//     return width * height;
// }
// console.log(AreaOfTriangle(5,height = 4));

// // Task 10
// function palindrome(text) {
//     var reverse_text_array = [];
//     for(let i=0; i < text.length+1;i++){
//         reverse_text_array.unshift(text.charAt(i));
//     }
//     let reverse_text = reverse_text_array.toString().replace(/,/g,'');
//     if(text === reverse_text){
//         document.write(`${text} is a palindrome`);
//     }
//     else{
//         document.write(`" ${text} " is not a palindrome <br>`);
//     }
// }
// palindrome('madam');

// // Task 11
// function capitalizeLetters(text) {
//     document.write(`<br> EXAMPLE STRING : ${text}`);
//     text = text.split(" ");
//     for (var i = 0, x = text.length; i < x; i++) {
//         text[i] = text[i][0].toUpperCase() + text[i].substr(1);
//     }
//     capitalized_text = text.join(" ");
//     document.write(`<br> EXPECTED OUTPUT :  ${capitalized_text} <br>`);
// }
// capitalizeLetters('the quick brown fox');

// // Task 12
// function longest_word(text) {
//     document.write(`EXAMPLE STRING : ${text} <br>`);
//     var split_text = text.split(' ');
//     var longest_word = 0;
//     for(var i = 0; i < split_text.length; i++){
//         if(split_text[i].length > longest_word){
// 	        longest_word = split_text[i].length;
//         }
//     }
//     document.write(`EXPECTED OUTPUT : ${split_text.filter((long) =>long.length == longest_word)} <br>`);
// }
// longest_word('Web Development Tutorial');

// // Task 13
// function count_repeat(text,letter) {
//     document.write(`" ${letter} " is repeated ${text.toLowerCase().split(letter).length - 1} times in " ${text} " <br>`);
// }
// count_repeat('JSResourceS.com','o');

// // Task 14
// function calcCircumference(radius) {
//     document.write(`The circumference is: ${2 * Math.PI * radius} <br>`);
// }
// calcCircumference(45);
// function calcArea(radius) {
//     document.write(`The area is: ${Math.PI * Math.pow(radius,2)} <br>`);
// }
// calcArea(45);