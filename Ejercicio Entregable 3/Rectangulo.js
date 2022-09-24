var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
        this.cuadrado = false;
        this.rect_Vertical = false;
    }
    Rectangulo.prototype.calcularArea = function () {
        this.base * this.altura;
    };
    Rectangulo.prototype.comparacionDeRectangulo = function (base1, altura1) {
        if (base1 === this.base && altura1 === this.altura) {
            return 0;
        }
        if (base1 > this.base && altura1 > this.altura) {
            return 1;
        }
        else {
            return -1;
        }
    };
    Rectangulo.prototype.cuandoEsCuadrado = function () {
        if (this.base === this.altura) {
            this.cuadrado = true;
        }
        return this.cuadrado;
    };
    Rectangulo.prototype.estadoVertical = function () {
        if (this.altura > this.base) {
            this.rect_Vertical = true;
        }
        return this.rect_Vertical;
    };
    return Rectangulo;
}());
var rectangulo = new Rectangulo(6, 9);
console.log(rectangulo.comparacionDeRectangulo(10, 10));
console.log(rectangulo.cuandoEsCuadrado());
console.log(rectangulo.estadoVertical());
