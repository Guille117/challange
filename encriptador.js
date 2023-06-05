
let mensaje = document.getElementById("entrada")
const btnEncriptar = document.getElementById("encrip")
const btnDesencriptar = document.getElementById("des")
const mostrar = document.getElementById("salida")
const btnCopiar = document.getElementById("copiar")

btnEncriptar.addEventListener('click', encriptar)
btnDesencriptar.addEventListener('click', desencriptar)

function validarText(){
    // 0 = text area vacio, 1 = texto ingresado invalido, 2 = text valido

    let estado = 1
    let caracteres = ""    
    const entregar = ''
    
    if(mensaje.value != ""){
        caracteres = mensaje.value.match(/[a-z ñ]/g)     //almacena todos los caracteres validos
        
        try {
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

const parejas =[
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

            for(let i=0; i < 5; i++){
                mensaje.value = mensaje.value.replaceAll(parejas[i][0], parejas[i][1])
            }

            mostrar.value = mensaje.value
            mensaje.value = ""
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
            
            for(let i = 0; i < 5; i++){
                mensaje.value = mensaje.value.replaceAll(parejas[i][1], parejas[i][0])
            }

            mostrar.value = mensaje.value
            mensaje.value = ''
        }else{
            textoInvalido()
        }
    }
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