//------------------------metodo exponencial
let num1 = 2222197;
console.log( num1.toExponential(3)); //2.222e+6
console.log(typeof num1);

//el codigo nos da la informacion que el decimal fue movido 
//dos veces a la izquierda
let num5 = 234.56789;
console.log(num5.toExponential()); //

//aca no se ha movido ningun punto decimal
//por lo tanto el resultado sera 3.3457e+0 
let num6 = 3.3456789;
console.log(num6.toExponential(4));

//aca movemos un punto a la izquierda para la notación cientifica
//3.46789e+1 aca indica que se ha movido a la izquierda una vez
//pedimos a la funcion toExponential   que convierta un exponente con 3 numeros despues del punto
//3.468e+1
let num7 = 34.6789;
console.log(num7.toExponential(3));

//-------------------------metodo toFixed
//indicamos la cantidad de decimales que necesitamos
let num2 = 44567234;
console.log(num2.toFixed(2));
// console.log(typeof num2);

//notacion de punto fijo 
let num3 = 4.4567234;
console.log(num3.toFixed(2))


//--------------------------tolocaleSting
//recibe un parametro y accedemos con el metodo
//ar-EG las letras minusculas representan la escritura y las mayusculas el país
function eArabic(x) {
  return x.toLocaleString('ar-EG');
}

console.log(eArabic(123456.789));

function eRusia(x) {
  return x.toLocaleString('ru-RU');
}

console.log(eRusia(123456.789));


//------------------------
let numeros = 568795068;
console.log(numeros.toPrecision(3))

function precise(x) {
  return x.toPrecision(5);
}

console.log(precise(0.004));
