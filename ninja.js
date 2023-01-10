class Ninja{
    constructor(nombre, salud){
        this.nombre= nombre;
        this.salud= salud;
        this.velocidad=3;
        this.fuerza=3;

    }
    sayName(){
        console.log(`El nombre del ninja es ${this.nombre}`);
    }
    showStats (){
        console.log(`Nombre: ${this.nombre}`, `Velocidad: ${this.velocidad}`,  `Fuerza: ${this.fuerza}`,  `Salud: ${this.salud}`);
    }
    drinkSake (){
        this.salud+=10; 
    }
}
const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
    


