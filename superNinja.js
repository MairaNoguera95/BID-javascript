class Ninja {
    constructor(nombre, salud, fuerza, velocidad){
this.nombre=nombre;
this.salud=salud;
this.velocidad=3;
this.fuerza=3;
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
//la clase sensei hereda de la clase Ninja
class Sensei extends Ninja{
    constructor(nombre, salud, velocidad, fuerza, sabiduria){
        super(nombre, salud, velocidad, fuerza, sabiduria);
        this.sabiduria=10;
        this.salud=200;
        this.velocidad= 10;
        this.fuerza=10;
    }
    speakWisdom(){
        this.drinkSake();// se llama al metodo de la clase ninja
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();


