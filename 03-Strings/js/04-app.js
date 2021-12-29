const producto = '           Monitor 20 pulgadas                       ';

console.log(producto);
console.log(producto.length);


//eliminar del inicio los espacios en blanco
console.log(producto.trimStart());
console.log(producto.trimEnd());

//para eliminar espacios de ambos lados
console.log(producto.trimStart().trimEnd()); 
// lo mismo que 
console.log(producto.trim());

