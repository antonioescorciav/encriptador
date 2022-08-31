

var desencriptar = document.querySelector(".boton-desc")
var encriptar = document.querySelector(".boton-enc"); 
var mun = document.querySelector(".imagen-mun");
var tiSecundario = document.querySelector(".titulo-secundario");
var entrada = document.querySelector(".texto-entrada");



function encriptacion (){
    ocultarT();
    var area = texto();  
    resultado.textContent = encTexto(area);
    
}

function des(){
    ocultarT();
    var area = texto();  
    resultado.textContent = desTexto(area);
} 

function texto (){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarT (){
    mun.classList.add("ocultar");
    tiSecundario.classList.add("ocultar");
    entrada.classList.add("ocultar");
}

function encTexto (mensaje){

    var texto = mensaje; 
    var txtF =""; 

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            txtF += "ai"; 
        }
        else if (texto[i] == "e"){
            txtF += "enter"; 
        }
        else if (texto[i] == "i"){
            txtF += "imes"; 
        }
        else if (texto[i] == "o"){
            txtF += "ober"; 
        }
        else if (texto[i] == "u"){
            txtF += "ufat"; 
        } 
        else {
            txtF += texto[i]; 
        }       
    }
    return txtF; 
}
 
function desTexto (mensaje){
    var texto = mensaje; 
    var txtF =""; 

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            txtF += "a"; 
            i = i + 1; 
        }
        else if (texto[i] == "e"){
            txtF += "e";
            i = i + 4;  
        }
        else if (texto[i] == "i"){
            txtF += "i";
            i = i + 3;  
        }
        else if (texto[i] == "o"){
            txtF += "o";
            i = i + 3;  
        }
        else if (texto[i] == "u"){
            txtF += "u";
            i = i + 3;  
        } 
        else {
            txtF += texto[i];
            
        }       
    }
    return txtF; 
} 


var copiar = document.querySelector(".boton-copiar"); 
var resultado = document.querySelector(".texto-resultado"); 

function copiarTexto (){
    
    //primera forma de copiado, usando "execCommand"
    resultado.select(); 
    document.execCommand("copy");
    
    /* segunda forma usando "navigator"
    "navigator" no hay que poner ".select()"
    navigator.clipboard.writeText(resultado.value)*/
    
    alert ("Texto fue copiado"); 
    var area = document.querySelector(".area"); 
    area.value = ""; 

   }


encriptar.onclick = encriptacion; 
desencriptar.onclick = des; 
copiar.onclick = copiarTexto; 

