var assert = require("assert");
//Ejercicio 1 VIERNES
function Persona(nombre, edad, pasatiempo){
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.habla = function(){
    return ("Hola soy " + this.nombre+ " tengo " + this.edad + " años y me gusta " + this.pasatiempo);
    }

  }
 var Respuesta = new Persona ("Kely", 18, "cantar");

describe("Ejercicio1", function(){
  it("Prueba de 10 y 20", function(){
    assert.equal ("Hola soy Kely tengo 18 años y me gusta cantar", Persona("Kely", 18, "cantar"));
      });



//Ejercicio 2 VIERNES
//var rectangulo = new Object();
function Area (base, altura){
  this.base = base;
  this.altura = altura;
  this.resolver = function (){
  return this.base*this.altura;
  }
}
var Respuesta = new Area(10,20);

  describe("Ejercicio2", function(){
    it("Prueba de Kely", function(){
      assert.equal (200, Area(10, 20));
        });
  });



//Ejercicio 3 VIERNES
function datos(nombre, dia, mes, anio, anioActual) {
  this.anioActual = anioActual;
  this.nombre = nombre;
  this.dia = dia
  this.mes = mes;
  this.anio = anio;
  this.edadActual = function(){
   return ("La edad actual de "+this.nombre+" es "+((this.anioActual) - (this.anio)) +".");
    }
  };
 var Respuesta = new datos("kely", 3, "setiembre", 1998, 2017);

 describe("Ejercicio3", function(){
   it("Prueba de Kely edad", function(){
     assert.equal ("La edad actual de Kely es 19.", datos("kely", 3, "setiembre", 1998, 2017));
       });
