let sumar = require('./sumar')
let restar = require('./restar')
let multiplicar = require('./multiplicar')
let dividir = require('./dividir')

console.log(sumar(10,10))
console.log(restar(13,3))
console.log(multiplicar(5,5))
console.log(dividir(10,2))
console.log(dividir(0,10))

//a) funcionaria de igual manera, por que no se ve afectado al codigo, 
//pero si al nombre de las funciones y esto se vuelve "desrpolijo".

//b) es mas eficiente y eficaz de esta forma, ya que a la hora de 
//corregir un error que se pueda presentar, 
//sabemos mas rapido mediente terminal en que archivo se origina el problema.

//c) seria lo indicado.