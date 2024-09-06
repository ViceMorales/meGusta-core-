let meGusta = document.querySelector('.boton')

meGusta.addEventListener('click', function(){
    let botonLike = document.querySelector('.btn');
    let numeroLike = document.querySelector('.likes');
    let aumentaLike = Number(numeroLike.innerText);
    aumentaLike ++;
    numeroLike.innerText = aumentaLike
    })

let meGusta2 = document.querySelector('.boton2')

meGusta2.addEventListener('click', function(){
    let botonLike2 = document.querySelector('.btn2');
    let numeroLike2 = document.querySelector('.likes2');
    let aumentaLike2 = Number(numeroLike2.innerText);
    aumentaLike2 ++;
    numeroLike2.innerText = aumentaLike2
        })

let meGusta3 = document.querySelector('.boton3')

meGusta3.addEventListener('click', function(){
    let botonLike3 = document.querySelector('.btn3');
    let numeroLike = document.querySelector('.likes3');
    let aumentaLike = Number(numeroLike.innerText);
    aumentaLike ++;
    numeroLike.innerText = aumentaLike
        })
