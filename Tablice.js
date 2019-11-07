// var lub let nazwa = [] lub new Array();

// tablica[0] = 1;
// tablica.push(2); Dodaje na końcu
// tablica.unshift(3); Dodaje na początku
// tablica.pop(); Usuwa z końca tablicy
// tablica.shift(); Usuwa z początku 
// tablica.length; Długośc tablicy

let tablica = [];
tablica[0] =  1; // [1]
tablica.push(2, "Ala"); //[1,2,"Ala"]
tablica.unshift(3); // [3,1,2,"Ala"]
tablica.pop(); //[3,1,2]
tablica.shift(); //[1,2]

console.log(tablica[1]); // 2
console.log(tablica.join('...'));

//tablica.reverse(); Odwrócenie tablicy
for(let i = tablica.length; i < 0; i--) {
     console.log(tablica[i-1]);
}