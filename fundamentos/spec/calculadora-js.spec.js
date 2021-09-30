fdescribe('Prueba de la calculadora', function () {
    describe('Añadir' ,function () {
        it('Añadir numero', () => {
            let numero=5;
            let actual=0;

            let resultado=anadir(numero,actual);
    
            expect(resultado).toBe(5)
        });
        
        it('Añadir decimal', () => {
            let numero=".";
            let actual=5;

            let resultado=anadir(numero,actual);

            expect(resultado).toBe('5.')
            numero="9"
            resultado=anadir(numero,resultado);

            expect(resultado).toBe('5.9')
        });
    })

    describe('Añadir Operador',function () {
        it('Añadir un operador', () => {
            let operacion="+"
            let actual=5

            let resultado=anadirOp(operacion,actual);

            expect(resultado).toBe('5+')
        });
    })

    describe('Calcular', function () {
        it('Suma', () => {
            let operacion='5+';
            let actual=8;

            let resultado=calcular(operacion,actual);

            expect(resultado).toBe(13);
        });

        it('Resta', () => {
            let operacion='5-';
            let actual=8;

            let resultado=calcular(operacion,actual);

            expect(resultado).toBe(-3);
        });

        it('Multiplicacion', () => {
            let operacion='5*';
            let actual=8;

            let resultado=calcular(operacion,actual);

            expect(resultado).toBe(40);
        });
        
        it('Division', () => {
            let operacion='21/';
            let actual=7;

            let resultado=calcular(operacion,actual);

            expect(resultado).toBe(3);
        });

        it('Division con decimal', () => {
            let operacion='5/';
            let actual=2;

            let resultado=calcular(operacion,actual);

            expect(resultado).toBe(2.5);
        });
    })
})