// function gohome(){
//     document.write("fuckoff");
// }

// gohome();
// gohome();
// gohome();gohome();gohome();
// function alrt(){
//     alert(1);
// }
// alrt();
// gohome();gohome();
// gohome();


// var name = "Ahsan Khan"; s
// var gender = "male";


// var age = "below18";
// //                                                       if else statement
// if (gender == "male") {
//     document.write("MR." + name);
// }
// else if (age == "below18") {
//     document.write("Watch POGO");
// }

// else {
//     document.write("Welcome" + name)
// }


// function stop(){
//     document.write("stoop")
// }
// var name = "ahsan"
// var password = 1234;

//// function iinside if else
function stop() {
    document.write("heyyy nooo more shitt plzz");
}
var quest = (prompt("Enter the Number "));
if (quest > 30) {
    stop();
}
else document.write('bye bye')

//        funcc end

// //                                                                      function inside if else state
// if(password === 1234){
//     stop();
//     document.write("Sucessfully Login")
// }

// else if(name = "ahsan"){
//     document.write(" ahsan")
// }
// else{
//     document.write("Try Again")
// }


//                                                                         else if state
// var number = (prompt("Enter your Marks"));

// if (number >= 0 && number <= 32) {
//     document.write("you are fail but failure is the first step toward success")
// }
// else if (number >= 33 && number <= 50) {
//     document.write("you are pass")
// }
// else if (number >= 50 && number <= 80) {
//     document.write("you had s Grade well done!")
// }
// else if (number >= 80 && number <= 100) {
//     document.write("You are awesome!!! I LOVE YOUUU")
// }
// else {
//     document.write("Sikeee!!! Its the Wrooooonggg Number")
// }
// if (number >= 80 && number <= 100) {
//     document.write("Congratulation you got A Grade")
//     if (number > 90 && number < 100) {
//         document.write(" Reward 10 Dollars")
//     }                                              //   NEsted if else state
//     else {
//         document.write("Reward 5 Dollars")
//     }
// }
// else if (number >= 70 && number < 79) {
//     document.write("Congratulation you got B Grade")
// }
// else if (number >= 50 && number < 70) {
//     document.write("Well Try you got C Grade")
// }
// else if (number >= 30 && number < 50) {
//     document.write("Nver Giveup you got D Grade")
// }
// else if (number < 30) {
//     document.write("You Are Fail But Failue is the first step toward Sucess")
// }
// else {
//     document.write("Please Enter Valid Information")
// }

// //                                                                    TERNARY OPERATOR
// var a = 20;
// var b;
// b = (a >= 20 ? "true" : "false");
// document.write(b);

// var a = 10;
// var b = 20;
// var c = (a > 5 ? "true" : "false");
// document.write(c);


//                                                             increment and decrement


//   diff b/w Prefix n Postfix decrement

// var a = 5;
// var b = 2;
// var c = a++ + b;    //     prefix increment , it changes 'a' variable value in above statement
// console.log(c);     //     but changes for calculation of c 
// console.log(a);

// var a = 2;
// var b = 4;
// var c = a-- + b;   //      postfix decrement , it doesn't changes 'a' variable value in above statement
// console.log(c);   //       but changes for calculation of c 
// console.log(a);

// prompt - box
// var bonus = 2;
// var badge = prompt("Enter your Number!", ("+92"));
// console.log(badge);
// var newnumber = Number(badge);   //    Convert string into number by using "Number" i.e there must be a number
// var result = newnumber + bonus;
// console.log(result);

//   logical operators

//   && Operator      it uses boolean values    - if single value is false the whole statement is false
//                      - if stops checking condition when the it detects false codition.

// var a = 5;
// var b = 2;
// var c = a > 2 && b < 1 && a > 3;
// console.log(c);

//  or operator      it also uses boolean values   - if the single value is true the whole statement is true

// var a = 5;
// var b = 2;
// var d = "its good";
// var c = a > 2 || b < 5;
// console.log(d);

// Not operator      it also uses boolean values n numerical   - it convert true to false and false to true

// var a = 5;
// var b = 2;
// var c = !(a > 2);
// console.log(c);

// double not operator
// var a = 5;
// var b = !2;
// var c = !!3;
// console.log(a);
// console.log(b);
// console.log(c);