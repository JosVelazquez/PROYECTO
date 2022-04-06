function precio1 (numero,categ,comple)
{
    var numero =parseInt(document.getElementById ('cantidad').value);
var categ =parseFloat(document.getElementById ('categoria').value);
 var comple = parseFloat(document.getElementById('complemento').value);
 var  entre= parseInt(document.getElementById('entrega').value);


 if (isNaN(numero)){

     numero= 0;

 }
 if (isNaN(categ)){

    categ=0;
    
}
if (isNaN(comple)){

    comple=0;
    
}
if (isNaN(entre)){

    entre=0;
}

var result = (categ+comple)*numero;
var res = '$' +result;
document.getElementById('precio-primero').value =res;

var result = (categ+comple)*numero;
var res = '$' +result;
document.getElementById('precio-envio').value =res;

var result = (categ+comple)*numero;
var res = '$' +result;
document.getElementById('entrega').value =res;

var result = (categ+comple)*numero ;
var res = '$' +result;
document.getElementById('precio-primero').value =res;

}

function preciofinal  (numero,precio1,entrega)
{
    var numero =parseInt(document.getElementById ('cantidad').value);
    var categ =parseFloat(document.getElementById ('categoria').value);
    var comple = parseFloat(document.getElementById('complemento').value);
 var entrega  = parseFloat(document.getElementById('entrega').value);

 if (isNaN(numero)){

    numero= 0;

}
if (isNaN(categ)){

   categ=0;
   
}
if (isNaN(comple)){

   comple=0;
   
}
if (isNaN(entrega)){

   entrega=0;
   
}
 var result = (categ+comple)*numero+entrega;
var res = '$' +result;
document.getElementById('precio-envio').value = res;

 var result = (categ+comple)*numero-entrega;
var res = '$' +result;
document.getElementById('precio-primero').value =res;

var result = (categ+comple)*numero;
var res = '$' +result;
document.getElementById('precio-primero').value =res;

}




function sumar (valor) {
    var numero = parseInt(document.getElementById('cantidad').value);
    var categ =parseFloat(document.getElementById ('categoria').value);
 var comple = parseFloat(document.getElementById('complemento').value);
    var result = (categ+comple)*numero;
    var result = (categ-comple)*numero;


    
}


function mostrar_pago(){
    document.getElementById('efectivo').style.display ='block';
    document.getElementById('transferencia').style.display ='none';
      document.getElementById('tarjeta').style.display ='none';
       document.getElementById('paypal').style.display ='none';
    
    
 
}
function mostrar_pago2(){
    document.getElementById('efectivo').style.display ='none';
    document.getElementById('transferencia').style.display ='block';
    document.getElementById('tarjeta').style.display ='none';
       document.getElementById('paypal').style.display ='none';
 
}
function mostrar_pago3(){
     document.getElementById('efectivo').style.display ='none';
     document.getElementById('transferencia').style.display ='none';
    document.getElementById('tarjeta').style.display ='block';
    document.getElementById('paypal').style.display ='none';
    
 
}

function mostrar_pago4(){
    document.getElementById('efectivo').style.display ='none';
    document.getElementById('transferencia').style.display ='none';
    document.getElementById('tarjeta').style.display ='none';
    document.getElementById('paypal').style.display ='block';
   
    
 
}


function redireccionar(){
    window.location = "index.html"
}

$("#compra").on("submit",function(event){
    event.preventDefault();
    nombre = $("#nombre").val();
    apPat = $("#apellidoPat").val();
    apMat = $("#apellidoMat").val();
    $("#nom-ap").text(nombre+" "+apPat+" "+apMat);
    $("#verificacion").removeClass("d-none");
});


function entrega(){
    var entrega = parseFloat(document.getElementById('entrega'.value));
    document.getElementById('entrega').value ;
}

function mensaje (){
    
    var respuesta= confirm ("Tu pedido ha sido confirmado gracias por tu compra  "  ) ;

    if(respuesta==true){
      return formulario  ;
      
    
    }
    else{
      return false ;
    }
  }


 
  function limpiar () {
    var respuesta= confirm ("El formulario sera limpiado  "  ) ;
document.getElementById("boton-enviar2").reset();
  }
