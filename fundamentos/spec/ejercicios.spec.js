

fdescribe('Pruebas de los ejercicios', function(){
    describe('Ejercicio 3', function(){
        it('Longitud 5 datos true', function(){
            let longitud=5;
            let dato=true;
            let vector=[true,true,true,true,true];

            let resultado=crearArray(longitud,dato);

            expect(resultado).toEqual(vector)
        })
    }),
    describe('Ejercicio 4',function(){
        it('5 numeros primos',function(){
            let vector=[2,3,5,7,11];
            let cuantos=5;

            let resultado=primos(cuantos);

            expect(resultado).toEqual(vector)
        })
    })
    describe('Ejercicio 6', function(){
        it('Palindromo', function(){
            let cadenaFinal="larutanosaportootropasonatural";
            let cadena="La ruta nos aporto otro paso natural";
            
            let resultado=palindromo(cadena);

            expect(resultado).toEqual(cadenaFinal);
        })
    })
})