
for (var i = 1; i <= 10; i++) {
    document.writeln(i + '<br>')
}

//.................

var tableNumber = +prompt('Enter table number')
var tableLength = +prompt('Enter table length')

for (var i = 1; i <= tableLength; i++) {
    document.writeln(tableNumber + " x " + i + " = " + tableNumber * i + "<br>")
}

// ..............


var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

for (var i = 0;  i< fruits.length; i++) {
    document.writeln(fruits[i] + '<br>')
}
//..............


// a. Counting
 
// document.writeln('<h3>Counting:</h3>')
// for (var i = 1; i <= 15; i++) {
//     document.writeln(i + "," )
// }

// document.write("<br><br>");


// b. Reverse Counting
// document.writeln('<h3>Reverse Counting:</h3>');
// for (var i = 20; i >= 1; i--) {
//     document.writeln(i + ',')
// }

// document.write("<br><br>");

// c. Even Numbers
// document.writeln('<h3>Even Number');
// for (var i = 0; i <=20; i +=2){
//     document.writeln(i + ',')
// }

// document.write("<br><br>");



// d. Odd Numbers
// document.writeln('<h3>Odd Numbers </h3>');
// for (var i = 1; i <= 20; i++){
//     document.writeln(i + ',')
// }

// document.write("<br><br>");

// e. Series (2k to 20k)
// document.write("<h3>Series:</h3>");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k" + ",");
// }