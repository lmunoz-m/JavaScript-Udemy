//pregunta al usuario el nombre
const nombre = prompt('cual es tu nombre');
//toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML= `${nombre} esta aprendiendo JavaScript Moderno`;

//ver mensaje de 'esto no esta permitido en consola'
console.time('hola'); //con esto le decimos que empieza aqui

console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');
console.warn('eso no esta permitido');

console.timeEnd('hola'); //aqui acaba