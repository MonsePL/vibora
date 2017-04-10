window.onload=function(){document.onkeydown=desplazar};
    function desplazar(objeto){
    var tecla = objeto.which;



    var teclas = {
      left:37;
      right:39;
      up:38;
      down:40;
    }

        var situacionY = document.getElementById("cabecita").offsetLeft;
         var situacionX = document.getElementById("cabecita").offsetTop;
        switch (tecla){
            case 37 :
            if () {


                cabecita.style.left = situacionY-220+"px" ; break;}
            case 38 :
                cabecita.style.top = situacionX-220+"px" ;break;
            case 39 :
               cabecita.style.left = situacionY-180+"px" ;break;
            case 40 :
                cabecita.style.top = situacionX-180+"px" ;break;
        default :alert("Se ha equivocado, debe pulsar las flechas del teclado");
        }
    }
