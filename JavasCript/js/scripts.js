/*var nombre = prompt('Como te llamas?');
var pais = prompt('De donde eres?');
alert("Bienvenido "+ nombre + " de " + pais );*/

/** variables **/

var nombre = "Alesander"
var edad = 26;

var nombre2, edad2;

nombre2 = "AlesanderDos";
edad2 = 26;

/** Objetos **/

console.log(nombre);
alert(nombre);

var auto = {
  nombre: "Mustang"
}

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  hablar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const juan = new Persona('Juan', 25);

console.log(juan.nombre); // Juan
console.log(juan.edad); // 25

juan.hablar(); // Hola, mi nombre es Juan y tengo 25 años.

/*interface IAnimal {
  nombre: string;
  edad: number;

  hablar(): void;
}

class Perro implements IAnimal {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  hablar(): void {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const fido = new Perro('Fido', 5);

console.log(fido.nombre); // Fido
console.log(fido.edad); // 5*/


//fido.hablar(); // Hola, mi nombre es Fido y tengo 5 años.



/** Manipulando 0bjetos **/


class PersonaDos {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  hablar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const j = new PersonaDos('Juan', 25);


j.nombre = "Alesander";

delete j.nombre2;


/** Array **/

var premierleague = ["chelse,manchester united","liverpool","arsenal"];
console.log(premierleague);
premierleague.push("Manchester City");
console.log(premierleague);


var la_liga = new Array("Barcelona","Real Nadrid","Real Sociedad");

console.log(la_liga[1]);
console.log(la_liga.toString());

la_liga.pop();
console.log(la_liga.toString());
la_liga.splice(0,1);
console.log(la_liga.toString());


<h2>Modificando Arreglos</h2>
  <pre class="language-js">
    <code>
      var premierLeague = ['Chelsea',"Manchester United", "Liverpool", "Arsenal", "Tottenham" ];
      console.log(premierLeague);

      premierLeague.push("Manchester City");
      console.log(premierLeague);

      // buscar elemento en un array;

      console.log(premierLeague.indexOf("Manchester United"));

      premierLeague[2] = 'Leicester';
      console.log(premierLeague);

      //quitar ultimo elemento
      premierLeague.pop();
      console.log(premierLeague)

      //quitar algun elemento
      premierLeague.splice(2,1)
      console.log("quitar alguno de a medias");
      console.log(premierLeague);

      // CON FILTER
      console.log("Filter");
      var premierLeague = ['Chelsea',"Manchester United", "Liverpool", "Arsenal", "Tottenham" ];

      var nuevoArreglo = premierLeague.filter(function(equipo) {
          return (equipo !== 'Chelsea');
      });

      console.log(nuevoArreglo);
    </code>
</pre>



    <h2>Comentarios</h2>
    <pre class="language-js">
      <code>
// Comentario de una linea

/*
Crea un Objeto
*/
var auto = {
 nombre: "Mustang",
 anio: 1965,
 motor: 5.5,
 color: "azul", // color del objeto
 clasico: true,
 es_real: false
}
      </code>
  </pre>


  <h2>Espacios en blanco</h2>
  <pre class="language-js">
    <code>

 var nombre =                     "juan";
console.log("mi nombre es: " + nombre);

var auto = {
  nombre:  "Mustang",

  anio:    1965,

  motor:   5.5,

  color:   "azul", // color del objeto

  clasico: true,

  es_real: false
}

    </code>
</pre>


<h2>Números en JavaScript</h2>
<pre class="language-js">
  <code>
var numero1 =  "15";
var numero2 = -20;
var numero3 = 21.5;
var numero4 = "12.41513";
var numero5 = -30.144


console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));
console.log(typeof(numero5));


var numero6 = parseFloat(numero4);
console.log(typeof(numero6));

var numero7 = parseInt(numero1);
console.log(typeof(numero7));

var numero8 = Number(numero1);
console.log(typeof(numero8));


console.log(parseFloat(numero4).toFixed(2));

  </code>
</pre>



<h2>Números en JavaScript</h2>
<pre class="language-js">
<code>
  /** Fechas **/

  var fecha = new Date();
  console.log(fecha);

  console.log("El año actual es: "+fecha.getFullYear());
  console.log("El día actual es: "+fecha.getDate());
  console.log("El día de la semana es: "+fecha.getDay());
  console.log("La hora es: "+fecha.getHours());
  console.log("Con: "+fecha.getMinutes());
</code>
</pre>

<h2>Strings en JavaScript</h2>
<pre class="language-js">
<code>
  /* Strings **/
  var texto = "esta es una cadena de texto";
  console.log(texto);
  console.log(typeof(texto));

  console.log(texto.toUpperCase());

  console.log(texto.length);

  console.log(texto.split(" "));

  console.log(texto.indexOf("cadena"));

  console.log(texto.slice(0,11));

  var texto2 = "Hola Mundo";
  console.log(texto2.toLowerCase());

</code>
</pre>


<h2>Condicionales IF - ELSE IF - ELSE</h2>
<pre class="language-js">
<code>
  /* IF */
  var cantidadAPagar = 100;
  var saldo = 500;

  if(saldo < cantidadAPagar) {
    console.log("no hay recursos")
  }

  // if else //
  var cantidadAPagar = 100;
  var saldo = 500;

  if(saldo < cantidadAPagar) {
    console.log("no hay recursos")
  } else {
    console.log("el pago se ha realizado");
  }

  // if, if else, else //

  var edad1 = 20;
  var edad2 = 20;

  if(edad1 > edad2) {
    console.log("la edad1 es mayor");
  } else if(edad1==edad2) {
    console.log("son iguales");
  } else {
    console.log("la edad2 es mayor");
  }

  var edad3 = "20";
  var edad4 = 20;
  // forma estricta de comparar
  if(edad3 === edad4) {
    console.log("es la misma edad");
  } else {
    console.log("no es la misma edad");
  }

  // Comparando cadenas
  var texto1 = "hola mundo";
  var texto2 = "Hola Mundo";

  if(texto1.toLowerCase() == texto2.toLowerCase()) {
    console.log("son iguales");
  } else {
    console.log("son diferentes");
  }

  // es diferente
  var texto3 = "hola";
  var texto4 = "hola";
  if(texto3 != texto4){
    console.log("son iguales");
  } else {
    console.log("no son iguales");
  }
</code>
</pre>

<h2>Operadores && y || </h2>
<pre class="language-js">
<code>
  /* IF */
  var cantidadAPagar = 100;
  var saldo = 101;
  var recargaTel = 10;
  var usuarioValido = false;

  if (saldo > cantidadAPagar && usuarioValido){
    console.log("ha pagaod y es un usuario valido")
  } else {
    console.log("no se pudo pagar");
  }


  var cantidadAPagar = 1000;
  var efectivo = 500;
  var tarjetaCredito = true
  if(efectivo > cantidadAPagar || tarjetaCredito) {
    console.log("el pago se ha realizado");
  } else {
    console.log("El pago no se pudo realizar");
  }
</code>
</pre>


<h2>Switch</h2>
<pre class="language-js">
<code>
  /** switch **/

  var metodoDePago = 'PayPal';
  switch (metodoDePago) {
    case 'TC':
      console.log("Ha pagado con tarjeta de credito");
      break;
    case 'Efectivo':
      console.log("Ha pagado con efectivo");
      break;
    case 'PayPal':
      console.log("Ha pagado con PayPal");
      break;
    default:
      console.log("Método de pago no valido");
      break;
  }

</code>
</pre>


<h2>Operadores</h2>
<pre class="language-js">
<code>
  /** Operadores **/
  var numero1 = 20;
  var numero2 = 10;

  // Suma
  console.log(numero1 + numero2);
  // Resta
  console.log(numero1 - numero2);
  // Multiplicacin
  console.log(numero1 * numero2);
  // division
  console.log(numero1 / numero2);

  //numero1++;
  numero2--;
  //incrementos
  console.log(numero1++);
  console.log(numero2);

  // Sumar sobre la misma variable;

  var numero3 = 20;
  console.log("el numero3 es: "+  numero3);
  numero3 +=20;
  console.log("el numero3 es: "+  numero3);
  numero3 -=20;
  console.log("el numero3 es: "+  numero3);
  numero3 *=20;
  console.log("el numero3 es: "+  numero3);
  numero3 /=20;
  console.log("el numero3 es: "+  numero3);

  /** Ejemplo Avanzado **/
  var cantidadAPagar = 100;
  var saldo = 101;
  var recargaTel = 10;

  if (saldo > cantidadAPagar){
    console.log("pago realizado");
    saldo -= cantidadAPagar;
    console.log(saldo);
    if(recargaTel < saldo) {
      console.log("recarga telefono realizada");
    } else {
      console.log("No alcanzo para la recarga");
    }
  } else {
    console.log("no se pudo pagar");
  }
</code>
</pre>

<h2>Loops - FOR</h2>
<pre class="language-js">
<code>
  var i;

  for (var i = 0; i <= 20; i++) {
    console.log(i);
  }

  for (var i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log("Cinco");
        continue;
    }
    console.log(i);
  }

  for (var i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log("Cinco");
        break;
    }
    console.log(i);
  }


  for (var i = 20; i >= 0; i--) {
    console.log(i);
  }

  var premierLeague = ['Chelsea',"Manchester United", "Liverpool", "Arsenal", "Tottenham" ];
  console.log(premierLeague);

  for(var i = 0; i&lt;premierLeague.length; i++) {
    console.log(premierLeague[i]);
  }

</code>
</pre>

<h2>Loops - WHILE y DO WHILE</h2>
<pre class="language-js">
<code>
  var i = 0;

  while (i <= 10) {
    console.log(i);
    i++;
  }


  var contar = 0;
  do {
      console.log(contar + " veces 7 es igual a "+ contar * 7);
  } while (contar++ < 0)

</code>
</pre>





<h2>Funciones</h2>
<pre class="language-js">
<code>
  /** Funciones **/
  //alert("funciona");

  function suma() {
    console.log(2+1);
  }

  suma();
  suma();
  suma();

  function suma2() {
    console.log(2+2);
  }
  suma2();

  function array_frutas(){
    var frutas = ['fresa', 'naranja', 'durazno', 'melon'];
    console.log(frutas);
  }

  array_frutas();

  var mi_funcion = function() {
    var frutas = ['fresa', 'naranja', 'durazno', 'melon'];
    console.log(frutas);
  }
  mi_funcion();



  var auto = {
    nombre: "Mustang",
    anio: 1965,
    motor: 5.5,
    color: "azul",
    clasico: true,
    es_real: false
  }


  function recorrer_objeto(automovil) {
    console.log(this.nombre);
    console.log(this.anio);
    console.log(this.motor);
    console.log(this.color);
    console.log(this.clasico);
    console.log(this.es_real);
  }
  auto.mostrarAuto = recorrer_objeto;
  auto.mostrarAuto();

</code>
</pre>


<h2>Funciones con Argumentos</h2>
<pre class="language-js">
<code>
  // funciones con argumentos **/
  function suma(n1, n2) {
    console.log(n1 + n2);
  }
  suma(10,20);
  suma(20,30);

  function multiplicar(n1,n2) {
    console.log(n1*n2);
  }
  multiplicar(3,3);

  var frutas = [];
  function array_frutas(fruta){
    frutas.push(fruta);
    console.log(frutas);
  }
  array_frutas('durazno');
  array_frutas('fresa');
  array_frutas('melon');

  /** Carrito **/
  const IMPUESTO = 0.16;
  var total = 0;
  function carrito(articulo, precio) {
    console.log("Articulo "+ articulo +" Precio $"+precio);
    total += precio + (IMPUESTO*precio);
    console.log("Impuesto:" + precio * IMPUESTO);
    console.log("Total: $"+ total.toFixed(2) );
  }

</code>
</pre>




<h2>Funciones que retornan valores</h2>
<pre class="language-js">
<code>
  // Funciones que retornan valores **/

  var numero1;

  function multiplicarx20(numero){
    numero = numero *20;
    return numero;
  }


  var resultado = multiplicarx20(10);
  resultado *= 10;

  console.log(resultado);


  // otro ejemplo:


  const IMPUESTO =.16;
  var cantidad;
  function totalPagar(numero){
     numero = numero + (numero * .16);
     return numero;
  }
  var resultado = totalPagar(1200);
  console.log(resultado);

</code>
</pre>

<h2>Scope</h2>
<pre class="language-js">
<code>
//
var a = 20;
function scope1() {
var a = 1;
console.log( a );
}
function scope2() {
var a=2;
console.log( a );
}
scope1();
scope2();
</code>
</pre>


<h2>InnerHTML</h2>
<pre class="language-js">
<code>
  var total, numero1, numero2;
  function totalaPagar(numero1, numero2) {
    total = numero1 * numero2;
    return total;
  }

  var granTotal = totalaPagar(10,20);

  var calculadora = document.getElementById("resultado").innerHTML = granTotal + " Dolares";

</code>
</pre>

</div>

  <style>
    body {
      background-color:#358ccb;
    }
    h2 {
      color:white;
      text-align: center;
      font-family: 'Prociono', serif;
    }
    div.contenedor {
      max-width: 1100px;
      width:100%;
      margin: 0 auto;
    }
  </style>


  <script src="archivos/prism.js"></script>
</body>
</html>
