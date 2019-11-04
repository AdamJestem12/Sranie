let x = 2;
let y = 5;
let z = 0;

z = x + y;
z = x - y;
z = x * y;
z = x / y;
z = x % y;
z = x ** y;

z = ++x; // =  z = ++2 z = 3 x = 2
z = x++; // =  z = 2++ z = 2 x = 3


z = --x;
z = x--;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(++x);
console.log(x++);

console.log(--x);
console.log(x--);

z = 7;
z += x; // z = z + x ;
z -= x; // z = z - x ;
z *= x; // z = z * x ;
z /= x; // z = z / x ;
z %= x; // z = z % x ;

let txt = "Ala";
    txt += "ma";
    txt += "kota";

if(x == 2) {
    console.log('x = 2');
}    

if(y != 6){
    console.log('y != 6');
}

if(x === '2') {
    console.log('x === 2');
} else {
    console.log('x !=== 2');
}

if(x === 2) {
    console.log('x === 2');
}

if(x > 7) {
    console.log('x < 7');
} else if(x = 7) {
    console.log('x = 7');
} else {
    console.log('x > 7');
}