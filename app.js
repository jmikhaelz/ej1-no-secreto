
 
    let intentos = 1;
    let lim = 5;
    let listaSorteado = [];
    let nomax = 10;

    function text_elemnt(elemnt, txt) {
        let elemntHTML = document.querySelector(elemnt);
        elemntHTML.innerHTML = txt;
        return;
    }

    function verificarIntento () {
        if(intentos <= lim){
            let noDeUsuario = parseInt( document.getElementById('ingreso').value );
            if( noDeUsuario === secreto ){
                text_elemnt('p',`!Le atinaste, ganaste! En el intento ${intentos}/${lim}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }else{
                if( noDeUsuario > secreto ){
                    text_elemnt('p',`!El numero es menor!, Intento ${intentos}/${lim}`);
                }else{
                    text_elemnt('p',`!El numero es mayor!, Intento ${intentos}/${lim}`);
                }
                intentos++;
                document.querySelector('#ingreso').value = '';
            }
        }else{
            text_elemnt('p','GAME OVER');
        }
        return;
    }

    function nsecreto(){
        let num = Math.floor(Math.random()*nomax+1);
        if(listaSorteado.length === nomax){
            text_elemnt('p','Ya se sortearon todos los números posibles');
        }else{
            if(listaSorteado.includes(num)){
                return nsecreto();
            }else{
                listaSorteado.push(num);
                return num;
            }
        }
    }

    function reiniciar() {
        secreto = nsecreto();
        intentos = 1;
        document.querySelector('#ingreso').value = '';
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }

    text_elemnt('h1','Juego del Número Secreto');
    text_elemnt('p','Ingresa número del 1 al '+nomax+' para adivinar');
    let secreto = nsecreto();
/*
    Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

    function sumarListas(lista1, lista2) {
        return lista1.map((num, index) => num + lista2[index]);
    }

    const lista1 = [1, 2, 3];
    const lista2 = [4, 5, 6];
    const resultado = sumarListas(lista1, lista2);
    console.log(resultado); 
    */