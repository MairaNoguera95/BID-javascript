class Ninja {
    constructor(nombre, salud){
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
    }
    sayName(){
        console.log(`Nombre del ninja ${this.nombre}`);

    }
    showStats(){
        console.log(`Nombre:${this.nombre}`,`velocidad:${this.velocidad}`, `Salud:${this.salud}`, `Fuerza: ${this.fuerza}`)
    }
    drinkSake (){
        this.salud+=10;
    }
}
const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

