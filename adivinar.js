/* ************************************ */
/*          variables globales          */
/*        (no se pueden crear más)      */
/* ************************************ */
var intentos; //total de intentos de adivinar.
var MAXINTENTOS = 10; //máximo número de intentos.
var numeroOculto; //número que hay que adivinar.
var numeroPrueba; //número que se está probando ahora.
var partidaFinalizada; //indica si se ha acabado la partida.
var partidaGanada; //indica si se ha ganado la partida.



/* ************************************ */
/*        Funciones implementadas       */
/*             (no tocar)               */
/* ************************************ */

/* función que inicia las variables globales para
una nueva partida */
function nuevaPartida(){
    intentos = 0;
    partidaFinalizada = false;
    partidaGanada = false;
    //generar número aleatorio entre 1 y 100
    numeroOculto = parseInt(Math.random()*100)+1;
    // al pulsar nueva partidad deja al caja estado el blanco 
    var r = document.getElementById("estado");
     r.innerHTML ="";
}

/* función que comprueba si se ha adivinado el número y
actualiza el estado de la partida. */
function probar(){
    if(!partidaFinalizada){
        obtenerNumeroPrueba(); //implementar - carga la variable numeroPrueba
        actualizarEstado(); //implementar - actualiza las variables de estado (intentos, partidaFinalizada, partidaGanada)
        mostrarEstado(); //implementar - visualiza el estado de la partida en el elemento output.
    }
}


/* ************************************ */
/*  Funciones que tienes que implentar  */
/*   (A más de las tres obligatorias,   */
/*       puedes crear más.)             */
/*              Ánimo!!!                */
/* ************************************ */

function obtenerNumeroPrueba()
{
    // Guardamos el numero que entra el usuario 
    numeroPrueba = document.getElementById("posible");
     numeroPrueba = parseInt(numeroPrueba.value);
    
   
}

function actualizarEstado ()
{
    intentos++;
    
    if(intentos<MAXINTENTOS)
        {
            
            
    
            if(numeroOculto===numeroPrueba)
            {

                partidaGanada=true;
                partidaFinalizada=true;

            }
            else
             {
                    partidaGanada=false;
            }
        }
    else
        {
            partidaFinalizada=true;
            partidaGanada=false;
            
        }
          
                
        }
        
   

function mostrarEstado()
{     
    if(partidaGanada===true)
        {
                    partidaGanada="Has accertado";
        }
    else
        {
              if(numeroOculto>numeroPrueba)
                {
                    
                    partidaGanada="El numero buscado es mayor";
                }
                if (numeroOculto<numeroPrueba)
                {
                   partidaGanada="El numero buscado es menor"; 
                }
            
        }
    
              
     var r = document.getElementById("estado");
    var cad = "intento "+intentos +" "+partidaGanada;
    r.innerHTML += cad+"<br>";
   
}