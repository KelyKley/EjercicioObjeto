//Ejercicio1
var arr = [4,4,5,12];
var cambia = 9;

var multiplicacion = arr.reduce(function(op1,op2){
  var multi =  op1 * op2 ;
return multi;
});
console.log(multiplicacion*cambia);




//Ejercicio2


//Ejercicio3
var numeros = [7,21,44,80, 77, 35];
var numeritoX = 7;
    var arr = [];

  numeros.forEach(function(multi){
    if(multi%numeritoX ==0)
      {
      arr.push(multi)
  }
  });

  document.write(arr);



//Ejercicio4
var numeros = [2, 5,7,2,3,8,10 ];

var casa =numeros.map(function(i){
  return ((i*2) +1);
});

console.log (casa);



//Ejercicio5
var celcius = 36;
var convertir =function (celcius){
  var paso = (celcius*9)/5 + 32;
  return paso;
}

console.log (convertir(celcius));



//Ejercicio6
var arr = [1,2,3,4];

var multiplicacion = arr.reduce(function(op1,op2){
  var multi =  op1 * op2 ;
return multi;
});
console.log(multiplicacion);




//Ejercicio7