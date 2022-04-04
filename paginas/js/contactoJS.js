function precio1 (numero,categ,comple)
{
    var numero =parseInt(document.getElementById ('cantidad').value);
var categ =parseFloat(document.getElementById ('categoria').value);
 var comple = parseFloat(document.getElementById('complemento').value);
var result = (categ+comple)*numero;
var res = '$' +result;
document.getElementById('precio-primero').value =res;

}




function preciofinal  (numero,precio1,entrega)
{
    var numero =parseInt(document.getElementById ('cantidad').value);
    var categ =parseFloat(document.getElementById ('categoria').value);
    var comple = parseFloat(document.getElementById('complemento').value);
 var entrega  = parseFloat(document.getElementById('entrega').value);

 var result = (categ+comple)*numero+entrega;
var res = '$' +result;
document.getElementById('precio-envio').value =res;

}

function sumar (valor) {
    var numero = parseInt(document.getElementById('cantidad').value);
    var categ =parseFloat(document.getElementById ('categoria').value);
 var comple = parseFloat(document.getElementById('complemento').value);
	var result = (categ+comple)*numero;

    
}


function mostrar_pago(){
    document.getElementById('efectivo').style.display ='block';
    
    
 
}
function mostrar_pago2(){

    document.getElementById('transferencia').style.display ='block';
    
 
}
function mostrar_pago3(){
    
    document.getElementById('tarjeta').style.display ='block';
   
    
 
}

function mostrar_pago4(){
    
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




function mensaje (){
    
    var respuesta= confirm ("Tu pedido ha sido confirmado gracias por tu compra  "  ) ;

    if(respuesta==true){
      return true  ;
    
    }
    else{
      return false ;
    }
  }
