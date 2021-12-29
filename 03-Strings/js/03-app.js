const producto = 'Monitor ';
const precio = 20;

//concatenamos dos variables
console.log(producto.concat(precio));
console.log(producto.concat('en descuento'));

//otra forma de concatenar dos variables, indiferente si es ' ' o " "
console.log(producto + "con un precio de " + precio);
console.log(producto , "con un precio de" , precio);

//otra sintaxis
console.log(`El producto ${producto} tiene un precio de ${precio}`);