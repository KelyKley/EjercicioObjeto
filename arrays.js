var assert = require("assert");

//Ejercicio 1
function multiplicarNumeros(arr , num)
{

  var res = arr.reduce(function(total,actual){
    return total*actual;
  });
  if(!isNaN(num)){
    res = res * num;
  }
  return res;
}
//*Prueba Unitaria*
describe("Ejercicio 1", function(){
  it("Prueba de [4,4,5,12] y 9", function(){
    assert.equal (8640, multiplicarNumeros([4,4,5,12], 9));

});


//Ejercicio 2

function ejercicio2(telefonos, filtro)
{
  return telefonos.filter(function(a){
    var primeras = a.toString().substr(0,3);
    var ultimas = a.toString().substr(-3);
    return (primeras == filtro || ultimas==filtro);
  });
}
//*Prueba Unitaria*
describe("Ejercicio 2", function(){
  it("cuando es [784123123, 355676784, 3423543554 ], 784", function(){
    assert.deepEqual([784123123, 355676784], ejercicio2([784123123, 355676784, 3423543554],784));
  });
});


//Ejercicio 3
  function multiplos(numeros,numerito){
    var arr=[];
    numeros.forEach(function(multi) {
        resultado= multi % numerito;
    if(resultado==0){
          arreglo.push(multi);
        }
    });
    return arr;
  }
//*Prueba Unitaria*
  describe("Ejercicio 3", function(){
    it("Multiplos", function(){
        assert.deepEqual([7,21,77,35],multiplos([7,21,44,80,77,35],7));
    });
  });


//Ejercicio4

function numeros(arr){
   var dobles = arr.map(function(x) {
   return (i * 2)+1;
  });
  return dobles;
}
//*Prueba Unitaria*
describe("Ejercicio 4", function(){
  it("Operaciones con  números", function(){
      assert.deepEqual([5,11,15,5,7,17,21],numeros([2,5,7,2,3,8,10]));
  });
});


//Ejercicio 5
function convertir(arr) {
    var arreglo = [];
    var conversion = arr.map(function(grados){
        resultado.push(grados * 9 / 5 + 32);
    });
    return resultado;
}
//*Prueba Unitaria*
describe("Ejercicio 5", function(){
  it("Grados Celcius a Farenheit", function(){
      assert.deepEqual([212, 113, 167],convertir([100,45,75]));
  });
});


//Ejercicio 6
function multiplicar (arr){
    var multiplicacion = arr.reduce(function(op1, op2){
      return op1 * op2;
    });
    return multiplicacion;
}
//*Prueba Unitaria*
describe("Ejercicio 6", function(){
  it("Multiplicar ", function(){
      assert.equal(24,multiplicar([1,2,3,4]));
  });
});



//Ejercicio 7
