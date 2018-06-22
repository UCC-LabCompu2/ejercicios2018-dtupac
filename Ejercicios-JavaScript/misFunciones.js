/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

/**
 * Created by Agus on 6/5/2017.
 */

function evaluarValor(valor, id_elemento) {
    valor = valor.replace (",", '.');

    if(isNaN(valor))
        alert("el valor no es numerico");
    document.getElementById(id_elemento).value = "";
}
function mostrar_ocultar(opcion) {
    if (opcion == 'mostrarDiv'){
        document.getElementsByName("unDiv")[0].style.display = 'block';

    }
    if (opcion == 'ocultarDiv'){
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

function conversion_grados_radianes(nombre_unidad, valor_unidad){
    var varRadianes, varGrados;
    if (nombre_unidad == 'grados'){
        varGrados = valor_unidad;
        varRadianes = Math.PI/180*valor_unidad;
    }
    if (nombre_unidad == 'radianes'){
        varRadianes = valor_unidad;
        varGrados = 180/Math.PI*valor_unidad;

    }
    document.getElementsByTagName("input")[0].value = varGrados;
    document.getElementsByTagName("input")[1].value = varRadianes;

}

/**
 * Conversión de unidades
 * @method conversordeunidades
 * @param nombre_unidad
 * @param valor_unidad
 * @return Valor que retorna
 */


function conversordeunidades(nombre_unidad, valor_unidad) {
    var metro, pie, pulgada, yarda;

    valor_unidad = valor_unidad.replace(",", ".");

    if(isNaN(valor_unidad)){
        alert("El valor ingresado es invalido");
        metro = "";
        pie = pulgada = yarda = null;

    }
    else{

        if (nombre_unidad == 'metro'){
            pie = valor_unidad*3.28084;
            pulgada = valor_unidad*39.3701;
            yarda = valor_unidad*1.09361;
            metro = valor_unidad;
        }


        if (nombre_unidad == 'pie'){
            pie = valor_unidad;
            metro = valor_unidad/3.28084;
            pulgada = metro*39.3701;
            yarda = metro*1.09361;
        }
        if (nombre_unidad == 'pulgada'){
            pulgada = valor_unidad;
            metro = valor_unidad/39.3701;
            pie = metro*3.28084;
            yarda = metro*1.09361;
        }
        if (nombre_unidad == 'yarda'){
            yarda = valor_unidad;
            pie = valor_unidad*3.28084;
            pulgada = valor_unidad*39.3701;
            metro = valor_unidad/1.09361;
        }

        document.getElementById("pie").value = pie;
        document.getElementById("pulgada").value = pulgada;
        document.getElementById("yarda").value = yarda;
        document.getElementById("metro").value = metro;

    }
}

function Sumar(){
    var num1 = document.getElementById('nums1');
    var num2 = document.getElementById('nums2');

    var resultado;

    if(!isNaN(num1.value) && !isNaN(num2.value) && (typeof num1.value !== undefined && typeof num2.value !== undefined)){
        resultado = parseInt(num1.value) + parseInt(num2.value);
        document.getElementById('totalS').value = resultado;
    }else{
        alert("Los valores ingresados deben ser validos");
    }
}

function Restar(){
    var num1 = document.getElementById('numr1');
    var num2 = document.getElementById('numr2');

    var resultado;

    if(!isNaN(num1.value) && !isNaN(num2.value) && (typeof num1.value !== undefined && typeof num2.value !== undefined)){
        resultado = parseInt(num1.value) - parseInt(num2.value);
        document.getElementById('totalR').value = resultado;
    }else{
        alert("Los valores ingresados deben ser validos");
    }
}

function Multiplicar(){
    var num1 = document.getElementById('numm1');
    var num2 = document.getElementById('numm2');

    var resultado;

    if(!isNaN(num1.value) && !isNaN(num2.value) && (typeof num1.value !== undefined && typeof num2.value !== undefined)){
        resultado = parseInt(num1.value) * parseInt(num2.value);
        document.getElementById('totalM').value = resultado;
    }else{
        alert("Los valores ingresados deben ser validos");
    }
}

function Dividir(){
    var num1 = document.getElementById('numd1');
    var num2 = document.getElementById('numd2');

    var resultado;

    if(!isNaN(num1.value) && !isNaN(num2.value) && (typeof num1.value !== undefined && typeof num2.value !== undefined) && num2.value != 0){
        resultado = parseInt(num1.value) / parseInt(num2.value);
        document.getElementById('totalD').value = resultado;
    }else{
        alert("Los valores ingresados deben ser validos");
    }
}

function dibujar_circulo_cuadrado(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(100,75,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150,75,150,100);
    ctx.stroke();
}

function dibujar_cuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var w = canvas.width;
    var h = canvas.height;

    //Lineas horizontales
    ctx.beginPath();
    ctx.lineWidth = 1;
    for(var i = 0; i < h; i += 20){
        ctx.moveTo(0, 10 + i);
        ctx.lineTo(w, 10 + i);
        ctx.stroke();
    }
    ctx.closePath();

    //Lineas verticales
    ctx.beginPath();
    ctx.lineWidth = 1;
    for(var i = 0; i < w; i += 20){
        ctx.moveTo(10 + i, 0);
        ctx.lineTo(10 + i, h);
        ctx.stroke();
    }
    ctx.closePath();
}

function dibujar_auto(){
    var x = document.getElementById('posicionX').value;
    var y = document.getElementById('posicionY').value;

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var w = canvas.width;
    var h = canvas.height;

    auto = new Image();
    auto.src = 'images/auto.png';
    auto.onload = function(){
        ctx.drawImage(auto, x, y);
    }

}

