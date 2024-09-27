//-------------------charAt
let nombre = 'Elías';
// console.log(nombre.charAt(2));

let apellido = 'Hernández';
// console.log(apellido.charAt(3));

//------------charCodeAt
let fruta = 'Manzana';
// console.log(fruta.charCodeAt(0));

let color = 'Negro';
// console.log(color.charCodeAt(8));

//-----------------codePointAt

let animal = 'lobo';
// console.log(animal.codePointAt(0));

let mascota = 'Lobo';
// console.log(mascota.codePointAt(0));

let emoji = '❤';
// console.log(emoji.codePointAt(0));

//------------concat

let prenda = 'camisa';
let col = 'roja';
// console.log(prenda.concat(' ' + col));

let saludo = 'Hola';
let primerNombre = 'Neftalí';
let frase = ' ten un día maravilloso';
let resultado = saludo.concat(' ' + primerNombre + ' ' + frase);
// console.log(resultado);

//-------------endsWith

let comentario = 'dibuja la nariz';

// console.log(comentario.endsWith('dibuja', 6));

let cadena = 'Buenos dias a todos, pasare lista';
// console.log(cadena.endsWith('a', 13));

let otraCadena = 'Hoy es un dia increible y maravilloso';
// console.log(otraCadena.endsWith('Hoy', 3));

//-----------------includes

let nombreApellido = 'Neftalí Hernández';
// console.log(nombreApellido.includes('Neftalí'));

let cadenaGrande = 'La rosa tiene muchas  flores';
let frase1 = 'muchas';

// console.log(
//   `la palabra ${frase1} ${
//     cadenaGrande.includes(frase1) ? 'esta' : 'no esta'
//   } en la oracion`
// );

//--------------------indexOf
let artista = 'Zaki momentos de flaquezas';
// console.log(artista.indexOf('a'));
// console.log(artista.indexOf('a', 20));
// console.log(artista.indexOf('o'));
// console.log(artista.indexOf('o', 7));

let lugarDeNacimiento = 'Cantón San José Cortez';
// console.log(lugarDeNacimiento.indexOf('San'));

//-------------lastIndexOf
let cadenaCanción = 'Me estoy muriendo, muriendo por verte';
// console.log(cadenaCanción.lastIndexOf('muriendo'));

let frasee = 'El sol brilla y el sol calienta';
// console.log(frasee.lastIndexOf('a'));

//------------------length
let otraCadenaMás = 'el desayuno esta listo';
// console.log(otraCadenaMás.length);

let xCadena = 'Hola, mundo!';
// console.log(cadena.length);

//---------------localeCompare
let saludar = 'Hola buen día';
let otroSaludo = 'HOLA BUEN DIA';
// console.log(saludar.localeCompare(otroSaludo))
// console.log(saludar.localeCompare(otroSaludo, undefined, { sensitivity: 'base' }));

let a = 'a';
let b = 'A';

// console.log(a.localeCompare(b, undefined, { sensitivity: 'base' }));

let cadena01 = 'Las flores son bellas';
let cadena02 = 'La niña llego a casa';
// console.log(cadena01.localeCompare(cadena02))

//----------------- match

let cadena00 = 'Mis plantas han florecido';
let resultado0 = cadena00.match(/plantas/); // Buscamos la palabra "plantas"
// console.log(resultado0);

let fraseE = 'La gallina blanca incubo los Huevos ';
let buscar = /[A-Z]/g;
let obtener = fraseE.match(buscar);
// console.log(obtener)

//---------------------matchAll
let cadenA = /M(í)/g;
let cadenaA = 'Mí perro me ama';
let resultadO = [...cadenaA.matchAll(cadenA)];
// console.log(resultadO);

const regexp = /t(e)(st(\d?))/g;
const str = 'test1 test2';
const array = [...str.matchAll(regexp)];

// console.log(array[0]);

//-----------------normalize

let apellido0 = '\u0042\u0061\u0074\u0072\u0065\u0073';
// console.log(apellido0);

//------------padEnd

let masCadena = 'Mañana es jueves';
// console.log(masCadena.padEnd(25, 's'));

let caracteres = '123';
// console.log(caracteres.padEnd(5));

//------------padStart

let otrasCadenas = 'Hola';
let textoAlineado = otrasCadenas.padStart(10);
// console.log(`"${textoAlineado}"`)

let texto = 'Hola';
let otroTexto = texto.padStart(10);
// console.log(otroTexto)

//----------------repeat

let emocion = 'motivado ';
// console.log(`Me siento ${emocion.repeat(2)}`)

let frasesMotivacion = 'Todo se logra con disciplina ';
// console.log(`${frasesMotivacion.repeat(2)}`)

//-----------replace
let masCadenas = 'Voy de camino ';
// console.log(masCadenas.replace("camino", " blanco"))

let descripcion = 'El perro cafe es agresivo';
// console.log(descripcion.replace("cafe", "negro"))

//-------------search
let nombreMascota = 'sombra';
// console.log(nombreMascota.search(/mb/));

let textoO = 'programador';
// console.log(textoO.search(/gra/));// Imprime 3

function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str + midstring + re);
}
// testinput(/bar/, 'This is a test with foo.'); // Debería imprimir: "This is a test with foo. does not contain /bar/"

//---------------slice

let ave = 'gallina';
// console.log(ave.slice(2, -3));

var cadena1 = 'La mañana se nos echa encima.';
var cadena2 = cadena1.slice(3, -2);
// console.log(cadena2);

//----------------split
let cadenasTexto = 'Casate conmigo';
// console.log(cadenasTexto.split(' '));

let fraseee = 'El cielo es azul';
// console.log(fraseee.split(' '));

let otroTex = 'Mamá cocina mi comida favorita';
let resul = otroTex.split(' ');
// console.log(resul[3])

//---------startsWith

let departamento = 'San Salvador';
// console.log(departamento.startsWith("San"))

let masFrases = 'El viaje es corto, disfruta a tus seres amados';
// console.log(masFrases.startsWith("disfruta", 19))

//-----------substring
let cadenas01 = 'Only love can hurt like this';
// console.log(cadenas01.substring(1, 4))

let cadenas001 = 'Only love can hurt like this';
// console.log(cadenas001.substring(5))

//-----------toLocaleLower

let texto01 = 'Pietà';
// console.log(`IT: ${texto01.toLocaleLowerCase("it")}`)

const textPl = 'Łódź';
// console.log(`PL: ${textPl.toLocaleLowerCase('pl')}`);

const textSv = 'San Salvador';
// console.log(`SV: ${textSv.toLocaleLowerCase('es-SV')}`);

//-------------toLocaleUpperCase
let ciudad = 'soyapango';
// console.log(ciudad.toLocaleUpperCase("es-SV"))

let city = 'toronto';
// console.log(city.toLocaleUpperCase("en-CA"))

//-------------toLowerCase
let cadeNa = 'La casa esta cuesta arriba';
// console.log(cadeNa.toLowerCase())

let cadeNaa = 'LA CASA ESTA CUESTA ARRIBA';
// console.log(cadeNaa.toLowerCase())

//---------toString
let textooo = 'Hola Mundo';
let textoComoCadena = textooo.toString();
// console.log(textoComoCadena);

let nombree = 'Ana';
let saludoo = `Hola, ${nombree}`;
let saludoComoCadena = saludoo.toString();
// console.log(saludoComoCadena);

//-------toUpperCase

let letras = 'Hoy es un día maravilloso';
// console.log(letras.toUpperCase())

let texTo = 'hola mundo';
let textoMayusculas = texTo.toUpperCase();
// console.log(textoMayusculas);

//--------------trim

let mensaje = '   Buenos días ';
// console.log(mensaje)
// console.log(mensaje.trim())

let tex = '   Hola Mundo   ';
let textoLimpio = tex.trim();
// console.log(`'${textoLimpio}'`);

//-----------trimEnd
// let teexto = '';
// teexto.trimEnd;

let saludooo = 'La clase es divertida    ';
let saludoLimpio = saludooo.trimEnd();
// console.log(saludoLimpio);

let lenguaje = 'JavaScript';
let resultado1 = lenguaje.trimEnd();
// console.log(resultado1);

//----------trimStart
let texxTo = '   Hola mundo';
let saludoLimpioo = texxTo.trimStart();
// console.log(saludoLimpioo);

let t3xto = 'El niño llora';
console.log(t3xto.trimStart());

//----------valueOf
let cadenaa = 'Hola mundo';
let valorPrimitivo = cadenaa.valueOf();
// console.log(valorPrimitivo);

let cadenaObjeto = new String('JavaScript');
let valorPrimitivoo = cadenaObjeto.valueOf();
// console.log(valorPrimitivoo);
