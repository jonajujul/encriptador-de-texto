function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "ere")
    .replace(/i/gi, "inca")
    .replace(/a/gi,"alo")
    .replace(/o/gi, "octa")
    .replace(/u/gi, "ubre");

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

  let textoCifrado = texto
    .replace(/ere/gi, "e")
    .replace(/inca/gi, "i")
    .replace(/alo/gi,"a")
    .replace(/octa/gi, "o")
    .replace(/ubre/gi, "u");
    
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
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