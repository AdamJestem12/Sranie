//1
var a = prompt("Liczba 1");
var b = prompt("Liczba 2");


var c = a + b;
document.writeln(c);
if((a + b) === c) {
    console.log("Taki sam typ danych");
}  
if((a + b) !== c) {
    console.log("Błąd");
}
var d = a - b;
document.writeln(d);
if((a - b) === d) {
    console.log("Taki sam typ danych");
}  
if((a - b) !== d) {
    console.log("Błąd");
}
var e = a * b;
document.writeln(e);
if((a * b) === e) {
    console.log("Taki sam typ danych");
}  
if((a * b) !== e) {
    console.log("Błąd");
}
var f = a / b;
document.writeln(f);
if((a / b) === f) {
    console.log("Taki sam typ danych");
}  
if((a / b) !== f) {
    console.log("Błąd");
}
var g = a % b;
document.writeln(g);
if((a % b) === g) {
    console.log("Taki sam typ danych");
}  
if((a % b) !== g) {
    console.log("Błąd");
}

if(c > d){
    console.log("c > d");
}

if(c > e){
    console.log("c > e");
}

if(c > f){
    console.log("c > f");
}

if(d > c){
    console.log("d > c");
}

if(d > e){
    console.log("d > e");
}

if(d > f){
    console.log("d > f");
}

if(e > c){
    console.log("e > c");
}

if(e > d){
    console.log("e > d");
}

if(e > f){
    console.log("e > f");
}

if(e > g){
    console.log("e > g");
}