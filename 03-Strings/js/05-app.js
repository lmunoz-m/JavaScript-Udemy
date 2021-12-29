const producto = 'Monitor 20 pulgadas';

//remplazar una parte de la cadena por otra
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// cortar partes de la cadena, hay que indicar posicion inicial y final de que cortar
console.log(producto.slice(0,10));
//si indicamos solo un valor empieza a cortar desde el inicio
console.log(producto.slice(8)); 
//no podemos introducir un numero mayor y luego uno menor
console.log(producto.slice(2,1));


//Alternativa a slice, se comporta igual excepto de
console.log(producto.substring(0,10)); 
// en este si entiende si le pasas un numero mayor y uno menor
console.log(producto.substring(2,1));

const usuario = 'Juan';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));



