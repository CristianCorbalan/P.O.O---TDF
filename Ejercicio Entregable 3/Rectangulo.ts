class Rectangulo {
    base:number;
    altura:number;
    cuadrado:boolean;
    rect_Vertical:boolean;


    constructor(base:number, altura:number){
        this.base = base
        this.altura = altura;
        this.cuadrado = false;
        this.rect_Vertical = false;
     }


    calcularArea(){
    
        this.base * this.altura
    }
     comparacionDeRectangulo(base1:number, altura1:number):number{
    if(base1 === this.base && altura1 ===this.altura){
        return 0
    }
    if (base1 > this.base && altura1 > this.altura){
    return 1
    }
    else{
        return -1
    }
     }
     cuandoEsCuadrado():boolean { 
    if (this.base === this.altura){
         this.cuadrado = true
    }
    return this.cuadrado
     }
    estadoVertical():boolean{
        if ( this.altura>this.base){
           this.rect_Vertical = true
            
       }
    return this.rect_Vertical;
    }
    
    }
    
    let rectangulo = new Rectangulo (6, 9);

    console.log(rectangulo.comparacionDeRectangulo(10,10));  
    console.log(rectangulo.cuandoEsCuadrado());      
    console.log(rectangulo.estadoVertical()); 