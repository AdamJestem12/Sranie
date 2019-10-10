alert('afassa') ;

function wyswAlert() {
    alert('Ala Ma Kota');
}

var but10 = document.getElementById('but1') ;
but10.addEventListener('click', wyswAlert );
but10.addEventListener('mouseover', function() {   
    but10.textContent = 'Sierotka bez domu' ;
});

var but11 = document.querySelector('#but2');
but11.addEventListener('click' , function() {
 document.getElementById('div1').innerHTML = 'Lubisz sok?'
});

var but22 = document.querySelector('#but3');
but22.addEventListener('click' , function(){
 console.log('Jestem w konsoli') ;
})