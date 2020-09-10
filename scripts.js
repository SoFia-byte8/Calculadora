/** Condiciones nos permiten Validar Si, Sí algo es Cierto
 * 
 * if (true){
 * console.log ('es cierto')}
 * 
 * if (true){
 * console.log ('es cierto')
 * }else {
 * console.log ('No es cierto')
 * }
 * 
 * if (true){
 * console.log ('es cierto')
 * }else if('true){
 * console.log('no es cierto y se pumlpe la segunda Opción')}
 * }else{
 * console.log ('No es cierto')
 * }
 */

function pintarNumero(numero) {
    //document.getElementById('data').value = numero
    pintarDatos(numero)
}

function pintarOperador(operador) {
    //document.getElementById('data').value = operador
    pintarDatos(` ${operador} `)
}
function pintarDatos(dato) {
    let valorInput = document.getElementById('data')
    //valorInput.value = valorInput.value + " " + dato
    valorInput.value = `${valorInput.value}${dato}`
}

function limpiar() {
    document.getElementById('data').value = ' '
}

function mostrarResultado(Resultado) {
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split (' ')

    let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
    document.getElementById('data').value = suma
}
/**
if (arreglo[1] == '+') {
    let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
    document.getElementById('data').value = suma
}else if (arreglo[1] =='-') {
    let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
    document.getElementById('data').value = resta
}else if (arreglo[1] == '*') {
    let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
    document.getElementById('data').value = multiplicar
}else if(arreglo[1] == '/') {
    let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
    document.getElementById('data').value = dividir
}
*/
switch(arreglo[1]){
    case '+':
        let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById('data').value = suma
        break;
    case '-':
        let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
        document.getElementById('data').value = resta
        break;
    case '*':
        let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
        document.getElementById('data').value = multiplicar
        break;
    case '/':
        let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
        document.getElementById('data').value = dividir
        break;
    default:
        alert("Este Proceso No en Acceso:")("")
}

function preguntarDia() {
    let dias = prompt('Ingrese Un Día De La Semana')  
}
    switch(dias){
        case 'lunes':   
            alert("Día 1: ¡Vamos a Empezar!")
            break
        case 'martes':
            alert("Día 2: ¡Tiempo Para Calentar! ")
            break
        case 'miercoles':
            alert("Día 3: No ha de Gustar!")
            break;
        case 'jueves':
            alert("Día 4:¡Aún Sigues Aquí! Vamos A Dormir")
            break;
        case 'viernes':
            alert("Día 5: Fin del Sufrimiento")
            break;
        case 'sabado':
            alert("Día 6: SIN COMENTARIOS")  
            break; 
        case 'domingo':
            alert("Día 7: Vamos a Descanzar")
            break;
            
        default:
            alert("Esto No corresponde a Un Día De La Semana:")
}
