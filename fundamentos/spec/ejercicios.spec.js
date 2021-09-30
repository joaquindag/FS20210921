

xdescribe('Pruebas de los ejercicios', function(){

    describe('Ejercicio 2', function () {
        it('Mayor', function() {
            let numeroAleatorio=50;
            let numeroEscrito=5;
            let resultadoPreHecho="Es mayor";

            let resultado=adivinaSinPrompt(numeroAleatorio, numeroEscrito);

            expect(resultado).toEqual(resultadoPreHecho)
        });

        it('Menor', function() {
            let numeroAleatorio=50;
            let numeroEscrito=99;
            let resultadoPreHecho="Es menor";

            let resultado=adivinaSinPrompt(numeroAleatorio, numeroEscrito);

            expect(resultado).toEqual(resultadoPreHecho)
        });

        it('Igual', function() {
            let numeroAleatorio=50;
            let numeroEscrito=50;
            let resultadoPreHecho="Es igual";

            let resultado=adivinaSinPrompt(numeroAleatorio, numeroEscrito);

            expect(resultado).toEqual(resultadoPreHecho)
        });
    })
    describe('Ejercicio 3', function(){
        it('Longitud 5 datos true', function(){
            let longitud=5;
            let dato=true;
            let vector=[true,true,true,true,true];

            let resultado=crearArray(longitud,dato);

            expect(resultado).toEqual(vector)
        })

        it('Longitud y datos mal', function() {
            let longitud=5;
            let dato=true;
            let vector=[true,true,false,true,false];

            let resultado=crearArray(longitud,dato);

            expect(resultado).not.toEqual(vector)
        });
    }),
    describe('Ejercicio 4',function(){
        it('5 numeros primos',function(){
            let vector=[2,3,5,7,11];
            let cuantos=5;

            let resultado=primos(cuantos);

            expect(resultado).toEqual(vector)
        })

        it('Numeros primos no validos', function() {
            let vector=[2,3,3,12,16];
            let cuantos=5;

            let resultado=primos(cuantos);

            expect(resultado).not.toEqual(vector)
        });
    })
    describe('Ejercicio 5', function(){
        it('DNI valido', function(){
            let dni="65004204V"

            expect(nif(dni)).toBeTruthy();
        })

        it('DNI no valido formato', function() {
            let dni="65004204678VQ"

            expect(nif(dni)).toBeFalse();
        });

        it('DNI no valido letra', function(){
            let dni="65004205V"

            expect(nif(dni)).toBeFalse();
        })
    })

    describe('Ejercicio 6', function(){
        it('Es valido', function(){
            let cadenaFinal="larutanosaportootropasonatural";
            let cadena="La ruta nos aporto otro paso natural";
            
            let resultado=palindromo(cadena);

            expect(resultado).toEqual(cadenaFinal);
        })

        it('No es valido', function(){
            let cadenaFinal="larutanosaportootropasonatural";
            let cadena="La ruta nos aporto otro paso naturalaaa";
            
            let resultado=palindromo(cadena);

            expect(resultado).not.toEqual(cadenaFinal);
        })
    })
})