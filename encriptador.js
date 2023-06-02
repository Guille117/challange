
let mensaje = document.getElementById("entrada")
const btnEncriptar = document.getElementById("encrip")
const btnDesencriptar = document.getElementById("des")
const mostrar = document.getElementById("salida")
const btnCopiar = document.getElementById("copiar")

btnEncriptar.addEventListener('click', encriptar)

function validarText(){
    // 0 = text area vacio, 1 = texto ingresado invalido, 2 = text valido

    let estado = 1
    let caracteres = ""    
    
    if(mensaje.value != ""){
        caracteres = mensaje.value.match(/[a-z ñ]/g)     //almacena todos los caracteres validos
        
        if(mensaje.value.length == caracteres.length){
            estado = 2
        }
        
    }else{
        estado = 0
    }

    return estado
}

const pareja1 = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}



function encriptar(){
    const estado = validarText()
    if(estado == 0){
        sinTexto()
        
    }else{
        if(estado == 2){
            try {
                let mensa
                textoValido()
                let mensajeFinal = ""

                for(let i=0; i<mensaje.value.length; i++){
                    mensajeFinal += pareja1[mensaje.value[i]] ?? mensaje.value[i]
                }
                mostrar.value = mensajeFinal
                mensaje.value = ""
                console.log(mensajeFinal)

            } catch (error) {
                textoInvalido()
            }
        }else{
            textoInvalido()
        }
    }
}

function sinTexto(){
    if(mostrar.value.length == 0){
        document.getElementById("mensaje1").style.textShadow = "4px 5px 7px red"
    }else{
        window.alert("Ningún mensaje encontrado")
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