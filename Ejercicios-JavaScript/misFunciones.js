/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Esta es la funcion Conversión de unidades
 * @method conversordeunidades
 * @param nombre_unidad
 * @param valor_unidad
 * @return Valor que retorna
 */
function conversordeunidades(nombre_unidad, valor_unidad) {
    var metro, pie, pulgada, yarda;
    valor_unidad = valor_unidad.replace(",", ".");

    if(isNaN(valor_unidad)){
        alert("Por favor ingresa un valor numérico, gracias!");
        document.getElementById("metro").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("yarda").value = "";
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

/**
 * Esta es la funcion Conversion de Grados a Radianes y viceversa
 * @method conversion_grados_radianes
 * @param nombre_unidad
 * @param valor_unidad
 * @return Valor que retorna
 */
function conversion_grados_radianes(nombre_unidad, valor_unidad){
    var varRadianes, varGrados;
    valor_unidad = valor_unidad.replace(",", ".");
    if(isNaN(valor_unidad)){
        alert("Por favor ingresa un valor numérico, gracias!");
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
    }
    else {
        if (nombre_unidad == 'grados') {
            varGrados = valor_unidad;
            varRadianes = Math.PI / 180 * valor_unidad;
        }
        if (nombre_unidad == 'radianes') {
            varRadianes = valor_unidad;
            varGrados = 180 / Math.PI * valor_unidad;
        }
        document.getElementsByTagName("input")[0].value = varGrados;
        document.getElementsByTagName("input")[1].value = varRadianes;
    }
}

/**
 * Esta es la funcion muestra u oculta un DIV
 * @method mostrar_ocultar
 * @param opcion
 * @return Valor que retorna
 */
function mostrar_ocultar(opcion) {
    if (opcion == 'mostrarDiv'){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }
    if (opcion == 'ocultarDiv'){
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Esta es la funcion que Suma 2 numeros reales
 * @method Sumar
 * @param nums1
 * @param nums2
 * @return Valor que retorna
 */
function Sumar(){
    var num1 = document.getElementById('nums1');
    var num2 = document.getElementById('nums2');
    var resultado;
    if(!isNaN(num1.value) && !isNaN(num2.value) && (typeof num1.value !== undefined && typeof num2.value !== undefined)){
        resultado = parseFloat(num1.value) + parseFloat(num2.value);
        document.getElementById('totalS').value = Math.round10(resultado, -2);
    }else{
        alert("Por favor ingresa un valor numérico, gracias!");
        document.getElementById('nums1').value = "";
        document.getElementById('nums2').value = "";
    }
}

/**
 * Esta es la funcion que resta 2 numeros reales
 * @method Restar
 * @param nums1
 * @param nums2
 * @return Valor que retorna
 */
function Restar(){
    var num1 = document.getElementById('numr1');
    var num2 = document.getElementById('numr2');
    var resultado;
    if(!isNaN(num1.value) && !isNaN(num2.value) && (typeof num1.value !== undefined && typeof num2.value !== undefined)){
        resultado = parseFloat(num1.value) - parseFloat(num2.value);
        document.getElementById('totalR').value = Math.round10(resultado, -2);
    }else{
        alert("Los valores ingresados deben ser validos");
        document.getElementById('numr1').value = "";
        document.getElementById('numr2').value = "";
    }
}

/**
 * Esta es la funcion que Multiplica 2 numeros reales
 * @method Multiplicar
 * @param nums1
 * @param nums2
 * @return Valor que retorna
 */
function Multiplicar(){
    var num1 = document.getElementById('numm1');
    var num2 = document.getElementById('numm2');
    var resultado;
    if(!isNaN(num1.value) && !isNaN(num2.value) && (typeof num1.value !== undefined && typeof num2.value !== undefined)){
        resultado = parseFloat(num1.value) * parseFloat(num2.value);
        document.getElementById('totalM').value = Math.round10(resultado, -2);
    }else{
        alert("Los valores ingresados deben ser validos");
        document.getElementById('numm1').value = "";
        document.getElementById('numm2').value = "";
    }
}

/**
 * Esta es la funcion que Divide 2 numeros reales
 * @method Dividir
 * @param nums1
 * @param nums2
 * @return Valor que retorna
 */
function Dividir(){
    var num1 = document.getElementById('numd1');
    var num2 = document.getElementById('numd2');
    var resultado;
    if(!isNaN(num1.value) && !isNaN(num2.value) && (typeof num1.value !== undefined && typeof num2.value !== undefined) && num2.value != 0){
        resultado = parseFloat(num1.value) / parseFloat(num2.value);
        document.getElementById('totalD').value = Math.round10(resultado, -2);
    }else {
        if(num2.value == 0 && !isNaN(num1.value)){
            document.getElementById('numd2').focus();
            alert("El segundo numero tiene que ser distinto de 0");
        }
        else {
            alert("Los valores ingresados deben ser validos");
            document.getElementById('numd1').value = "";
            document.getElementById('numd2').value = "";
        }
    }
}

function procesar() {
    var distancia=document.getElementById('distancia').value;
    var selObj = document.getElementById('idmodelo');//recuperas la lista y la guardas en un objeto
    var selIndex = selObj.options[selObj.selectedIndex].text;//del objeto lista recuperas el texto que fue elegido y lo almacenas en una variable (selIndex)
    var final = distancia+'#'+selIndex;

    document.getElementById('dist').value = final;
    document.forms.web2s.submit();
}

function recuperar() {
    var distancia =9;
    document.getElementById('dist').value = distancia;

}



/**
 * Esta es la función dibuja un Círculo y un Cuadrado en Canvas
 * @method dibujar_circulo_cuadrado
 * @return Valor que retorna
 */
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

/**
 * Esta es la función dibuja una Cuadrícula en Canvas
 * @method dibujar_cuadriculado
 * @return Valor que retorna
 */
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

/**
 * Esta es la funcion traslada una imagen a un punto determinado ingresado por el usuario
 * @method dibujar_auto
 * @param posicionX
 * @param posicionY
 * @return Valor que retorna
 */
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
        ctx.clearRect(0,0,w,h);
        ctx.drawImage(auto, x, y);

    }
}

/**
 * Esta es la función anima el auto y lo mueve de izquierda a derecha.
 * @method animar_autito
 * @return Valor que retorna
 */
function animar_autito() {
    var cnv, ctx, pos_x=0, img;
        img = new Image();
        img.src = 'images/auto.png';
        cnv = document.getElementById("myCanvas");
        ctx = cnv.getContext('2d');
        anim();
    function anim() {
        ctx.clearRect(0,100,800,500);
        ctx.drawImage(img, pos_x, 100);
        pos_x +=1;
        setTimeout(anim,25);
    }
}

