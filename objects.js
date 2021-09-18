// const files = {
//     filename: "COD",
//     content: ["images", "Videos", "films"],
// };

// function detail({
//     filename,
//     content
// }) {
//     console.log(
//         ` hey ${filename} is very useful file it had following content, ${content} `
//     );
// }
// detail(files);

// function ahn(b = 2){
//     c = a + b;
//     console.log(c)
// }
// ahn();

// for (var a = 10 ; a <= 20 ; a++ ){
//     console.log(a);
// }

// var num = prompt(" Enter any Number ");

// for (var i = 1; i < 20; i++) {
// 	console.log(num + " x " + i + " = " + i * num);
// }

//     Task prime Number

// var num = Number(prompt("Enter any Number"));
// var isprime = true;

// for (var i = 2; i < num; i++) {

//     var result = num % i;
//     if (result == 0) {
//         console.log("This is not a prime number = " + num + " I =" + i);
//         isprime = false;
//         break;

//     }
// }
// if (isprime) {
//     console.log("This is a prime number = " + num)
// }



var y = parseInt(prompt("Please enter a number"));
var x = "*";

for (var a = 1; a <= y; a++) {
    console.log(x);
    x += " *";
}

// var date = new Date();
// document.write(date);