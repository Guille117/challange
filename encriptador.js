
let mensaje = document.getElementById("entrada")
const btnEncriptar = document.getElementById("encrip")
const btnDesencriptar = document.getElementById("des")
let mostrar = document.getElementById("salida")
let btnCopiar = document.getElementById("copiar")

btnEncriptar.addEventListener('click', encriptar)
btnDesencriptar.addEventListener('click', desencriptar)
btnCopiar.addEventListener('click', copiar)

function validarText(){
    // 0 = text area vacio, 1 = texto ingresado invalido, 2 = text valido

    let estado = 1      // por defecto tendra el valor de 1
    let caracteres = ""   
    
    if(mensaje.value != ""){
        caracteres = mensaje.value.match(/[a-z ñ]/g)     //le pasamos todos los caracteres validos que coincidan
        
        try {
            /* si el tamaño del mensaje ingresado es igual a el tamaño de caracteres validos que tiene el mensaje y
            que almacenamos en la variable "caracteres" quiere decir que el usuario ingreso un texto 
            valido -> sin mayusculas, tildes o caracteres especiales */
            if(mensaje.value.length == caracteres.length){ 
                estado = 2
            }
        } catch (error) {
            estado = 1
        }
        
    }else{
        estado = 0
    }

    return estado
}

const parejas =[        // arreglo de parejas
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['a', 'ai'],
    ['u', 'ufat']
] 



function encriptar(){
    const estado = validarText()
    if(estado == 0){
        sinTexto()
        
    }else{
        if(estado == 2){
            textoValido()

            for(let i=0; i < 5; i++){       // encriptamos
                mensaje.value = mensaje.value.replaceAll(parejas[i][0], parejas[i][1])
            }

            mostrar.value = mensaje.value       // mostramos mensaje encriptado
            mensaje.value = ""      // limpiamos area del mensaje
        }else{
            textoInvalido()
        }
    }
}

function desencriptar(){
    const estado = validarText()
    if(estado == 0){
        sinTexto()
    }else{
        if(estado == 2){
            textoValido()
            
            for(let i = 0; i < 5; i++){     // desencriptamos
                mensaje.value = mensaje.value.replaceAll(parejas[i][1], parejas[i][0])
            }

            mostrar.value = mensaje.value       // mostramos mensaje desencriptado
            mensaje.value = ''      // limpiamos area del mensaje
        }else{
            textoInvalido()
        }
    }
}

function copiar(){
    mostrar.select()
    document.execCommand('copy')
}

function sinTexto(){
    if(mostrar.value.length == 0){
        document.getElementById("mensaje1").style.textShadow = "4px 5px 7px red"
    }else{
        window.alert("Ningún mensaje fue encontrado")
    }
}

function textoValido(){
    document.getElementById("noEncontrado").style.visibility = "collapse"      // ocultar imagen de texto no encontrado
    mostrar.style.backgroundImage = "none"
    btnCopiar.style.visibility = "visible"

    //mensaje.value = ""      //resetear textarea
    mostrar.value = ""      // resetear textarea de mostrar

}

function textoInvalido(){
    window.alert("No son permitidos: mayusculas, tildes o caracteres especiales")
    mensaje.value = ""
}