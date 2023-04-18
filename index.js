function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "er")
    .replace(/i/gi, "in")
    .replace(/a/gi,"al")
    .replace(/o/gi, "oc")
    .replace(/u/gi, "ub");

   if(texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado exitosamente";
    parrafo.textContent = "";
    muñeco.src = "./imagenes proyecto/encriptado.png.jpg";
  } else {
    muñeco.src = "./imagenes proyecto/muñecos.png.jpg";
    tituloMensaje.textContent = "No se encontro mensaje";
    parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar un texto");
  }
}

function desencriptar () {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoDesencriptado = texto
    .replace(/er/gi, "e")
    .replace(/in/gi, "i")
    .replace(/al/gi,"a")
    .replace(/oc/gi, "o")
    .replace(/ub/gi, "u");
    
    if (texto.length != 0) {
      document.getElementById("texto").value = textoDesencriptado;
      tituloMensaje.textContent = "Texto desencriptado con exito";
      parrafo.textContent = "";
      muñeco.src = "./imagenes proyecto/desencriptar.png.jpg";
    } else {
      muñeco.src = ".imagenes proyecto/muñecos.png.jpg";
      tituloMensaje.textContent = "No se encontro ningun mensaje";
      parrafo.textContent = "Ingresa el parrafo que deseas encriptar o desencriptar";
      alert("Debes ingresar un texto");
    }
}