///////////// CHAPTER # 17-20  ///////////////////////

// QUESTION #01 // CONFUSION




// let rows = 3;
// let cols = 4;


// let empty2DArray = [];


// for (let i = 0; i < rows; i++) {
//     empty2DArray[i] = [];
//     for (let j = 0; j < cols; j++) {
//         empty2DArray[i][j] = 0; 
//     }
// }


// console.log(empty2DArray);




// QUESTION #02 // CONFUSION




// QUESTION #03 //
// for(i=1; i<=10; i++){
//     console.log(i);

// }


// QUESTION #04 //
// var userinput=prompt("ENTER  A NUMBER TO SHOW ITS MULTIPLICATION TABLE");
// var length=prompt("ENTER LENGTH OF MULTIPLICATION TABLE");
// console.log("Multiplication Table Of" + userinput);
// console.log("Length" + length);
// for(i=1; i<=length; i++){
//     console.log(userinput + "*" + i + "=" + userinput*i);
// }


  //QUESTION #05 // 

//   let fruits = ["apple", "banana", "mango", "orange", "strawberry"];


// console.log("Fruits:");
// for(i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
    
// }
// console.log("element at index" + fruits.indexOf("apple") + "is apple")
// console.log("element at index" + fruits.indexOf("banana") +"is banana")
// console.log("element at index" + fruits.indexOf("mango") + "is mango")
// console.log("element at index" + fruits.indexOf("orange") + "is orange")
// console.log("element at index" + fruits.indexOf("strawberry") + "is strawberry")

//QUESTION #06 //  //  confusion in part c,d and e
// var counting =[1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log( "COUNTING:" + counting);
// var revcounting=counting.reverse();
// console.log( "REVERSECOUNTING:"+ revcounting);

// QUESTION #07  //

//  var arr = ["cake", "apple pie", "cookie", "chips", "patties"];


// let userInput = prompt("Enter an item to search:");


// if (arr.includes(userInput.toLowerCase())) { 
//     alert("Yes," + userInput +"is found in the list at index" + arr.indexOf(userInput));
// } else {
//     alert("No," + userInput  + " not found in the list.");
// }

// QUESTION #08, 09 //
//   var num= Math.max(24, 53, 78, 91, 12);
  
//   console.log( "LARGEST  NUMBER:" +num);

//   var num2=Math.min(24, 53, 78, 91, 12);
  
//   console.log( "SMALLEST NUMBER:" + num2);


// QUESTION # 10
// for(i=1; i<=20; i++){
//     console.log(i*5);
// }





////////////////////// CHAPTER # 21-25  ///////////////////////////


// QUESTION # 1
// var firstName=prompt("ENTER YOUR FIRST NAME");
// var lastName=prompt("enter your last name");
// var fullName=firstName+lastName;
// document.write("WELLCOME!"+ fullName.toUpperCase());


// QUESTION # 02 //
// var userInput=prompt("WRITE YOUR FAVOURITE MOBILEPHONE  NAME");
// document.write("My Favourite phone is:" + userInput);
// document.write(" <br>Lenght is:" + userInput.length);


// QUESTION # 03 //
// var word="Pakistan"; 
// var indexOf = word.indexOf('n');
// document.write("STRING:" + word);
// document.write(" <br>INDEX OF 'n':" + indexOf);


// QUESTION # 04 //
//  var word="Hello World"; 
//  var indexOf = word.lastIndexOf('l');
//  document.write("STRING:" + word);
// document.write(" <br> LAST INDEX OF 'l' is :" + indexOf);

// QUESTION # 05 //
// var word="Pakistani"; 
// var charAt = word.charAt(3);
// document.write("STRING:" + word);
// document.write(" <br>CHARACTER AT INDEX 3:" + charAt);


// QUESTION # 06 //
// var firstName=prompt("ENTER YOUR FIRST NAME");
// var lastName=prompt("enter your last name");
// var fullName=(firstName).concat(lastName);
// document.write("WELLCOME!"+ fullName.toUpperCase());


// QUESTION # 07 //
// var originalWord="Hyderabad";
// var replaceWord=originalWord.replace("Hyder", "Islam");
// document.write("CITY:" +  originalWord);
// document.write(" <br>After Replacemant:" + replaceWord);

// QUESTION # 08 //
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace= message.replace(/and/g,"&");
// document.write(replace);

// QUESTION # 09
// var num1 = "472";
// document.write("value:" + num1)
// document.write( " <br> Type:" + typeof(num1));
// var number=Number(num1);
// document.write(" <br>value:" + number)
// document.write( " <br> Type:" + typeof(number));


// QUESTION # 10
//  var userInput=prompt("enter your word");
// document.write("userinput:" + userInput);
// var convert=   userInput.toUpperCase();
// document.write(" <br>uppercase:" + convert);

// QUESTION # 11  //////  CONFUSION  /////////
// var userInput=prompt("enter any word");
// var  user = userInput.toTitleCase();
// console.log(user);

// QUESTION # 12 //
// var num=33.56;
// document.write("Number:" + num );
// var num2 = num.toString();
// document.write(" <br>Result:" + num2.replace(".", ""));


// QUESTION //  13//

// var userName=prompt("ENTER YOUR NAME");
// var special= ["!", "@", "#", "$","%", "&", "*"];

// for(i=0; i<userName.length; i++){
// if(special.includes(userName[i])){
//   alert("please! enter a valid username");
// }
// }


// QUESTION # 14  //
//  var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter an item to search:");
// if (arr.includes(userInput.toLowerCase())) { 
//     alert("Yes," + userInput +"is found in the list at index" + arr.indexOf(userInput));
// } else {
//     alert("No," + userInput  + " not found in the list.");
// }

// QUESTION # 15 //  CONFUSION  //



// QUESTION #16 //
// var university = "University of Karachi";
// var split= university.split('');
// console.log(split);


// QUESTION #17 //
// var userInput=prompt("ENTER ANY WORD");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// document.write(lastCharacter);


// QUESTION #18 //  CONFUSION ///////////////



////////////////////// CHAPTER # 26-30  ///////////////////////////

// QUESTION # 01 //
// var userInput=prompt("enter any positive  floating point  number");
// document.write("userInput:" + userInput);
// var round=Math.round(  userInput);
// document.write( "<br> round off value:" + round)
// var floor=Math.floor(userInput);
// document.write( "<br> floor value:" + floor);
// var ceil=Math.ceil(userInput);
// document.write( "<br> ceil value:" + ceil);


// QUESTION # 02 //
// var userInput=prompt("enter any negative floating point  number");
// document.write("userInput:" + userInput);
// var round=Math.round(  userInput);
// document.write( "<br> round off value:" + round)
// var floor=Math.floor(userInput);
// document.write( "<br> floor value:" + floor);
// var ceil=Math.ceil(userInput);
// document.write( "<br> ceil value:" + ceil);

// QUESTION # 03 //
// var num1= -4;
// var num2= 5;
// document.write("absolute value of" +num1 +"is",+ Math.abs(num1));
// document.write(" <br>absolute value of" +num2 +"is",+ Math.abs(num2));



// QUESTION # 04 //
// var random=Math.random();
// var round=  Math.floor(Math.random() * 6) + 1;
// document.write(round);

// QUESTION # 05 //
// var random=Math.random();
// var round=  Math.floor(Math.random() * 2) + 1;
// document.write(round);

// QUESTION # 06 //
// var random=Math.random();
// var round=  Math.floor(Math.random() * 100) + 1;
// document.write("Random Numbers Between 1 & 100:" + round);

// QUESTION # 07 //   CONFUSION ///////////////
// var num= prompt("ENTER YOUR WEIGHT IN KILOGRAM");
// var float=parseInt(num);
// console.log("THE WEIGHT OF USER IS:" + float);

// QUESTION # 08 //
// var secretNum=5;
// var userInput=prompt("enter a number between 1 and 10");
// if(userInput==secretNum){
//   alert(" CONGRATULATIONS!")
// }else{
//   alert("TRY AGAIN!")
// }























 










































 


 





















