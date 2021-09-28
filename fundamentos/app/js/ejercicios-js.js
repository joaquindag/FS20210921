/*  Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado. */

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/** Adivina el Número, generar un número entre el 0 y el 100, introducir un número e
 *  informar si es igual, mayor o menor. 
 * Hay un máximo de 10 intentos para encontrar el número que sea igual. */


function adivina(){

    let aleatorio=random(0,100);
    let bandera=true;
    alert(aleatorio)
    let contador=0;

    do {
        
        var mensaje;
        var opcion = prompt("Introduzca su numero:","");
    
     
        if (opcion == null || opcion == "") {
            mensaje = "Has cancelado o introducido el numero vacío";
            } else {
                
                
                if(opcion>aleatorio){
                        alert("Tu numero es mayor que el elegido")
                }
                if(opcion<aleatorio){
                        alert("Tu numero es menor que el elegido")
                }
                if(opcion==aleatorio){
                        alert("Tu numero es igual")
                        bandera=false;
                }
                }
        
        contador++;
                
    } while (bandera==true && contador!=5);
    
    
   
}


/** Crear una función que devuelva un array con el numero de elementos indicado,
 *  inicializados al valor suministrado. */

function crearArray(longitud, dato){

    let vector=[];

    for (let index = 0; index < longitud; index++) {
        vector.push(dato)
    }
    console.log(vector)

    return vector;

}


/** Crear una función que devuelva un determinado número de números primos. */


function isPrimo(numero){
    let bandera=true;
    for (let index = 2; index < numero; index++) {
        if(numero % index==0){
            bandera=false;
        }
        
    }
    
    return bandera;
}

function primos(cuantos){

    let numerosPrimos=[];
    let contador=0;

    for (let index = 0; index < cuantos; index++) {
        let bandera=false;
        while (bandera==false) {
            if(contador!=0 && contador!=1){
                if(isPrimo(contador)){
                    numerosPrimos.push(contador);
                    bandera=true;
                }
        }
            contador++;
        }
        
    }

    console.log(numerosPrimos)
    return numerosPrimos;
}


/** Crear una función que valide un NIF */

function nif(dni) {
    let numero
    let letr
    let letra
    let expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
         alert('Dni correcto');
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }
  }


/** Definir una función que determine si la cadena de texto que se le pasa como parámetro 
 * es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
 * Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural". */


function palindromo(cadena){
    
    cadena = cadena.split(' ').join('');
    cadena=cadena.toLowerCase();

    let invertida=cadena.split("").reverse().join("");
    if(cadena==invertida){
        alert("Es palindroma")
    } else{
        alert("No es palindroma")
    }
    return invertida;
}
