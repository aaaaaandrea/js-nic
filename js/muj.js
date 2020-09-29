let idk = document.getElementById ('click');
let bottom1 = document.getElementById ('bottom1');

idk.addEventListener('click', function(){
    idk.style .color = 'red';
    idk.innerHTML = 'ŘEKLA JSEM NEVŠÍMEJ SI TOHO!';
    idk.style.fontWeight = 'bold';
    bottom1.innerHTML = 'HEJ... PSssT... KLIKNI NA TO..';
})

let tlacitko = document.getElementById ('tlacitko')

let nadpis = document.getElementById ('nadpis')

tlacitko.addEventListener('click', function(){
    nadpis.style.color = 'red';
})


