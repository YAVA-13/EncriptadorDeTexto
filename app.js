
function clicEncriptar() {
      const textereaInput = document.getElementById("texto-input");
      const textoIngresado = textereaInput.value;

    
    const textoModificado = textoIngresado.replace(/[aeiou]/g, function(letra) {
      switch(letra) {
        case 'a': return 'ai';
        case 'e': return 'enter';
        case 'i': return 'imes';
        case 'o': return 'ober';
        case 'u': return 'ufat';
  }
});



const textoOutput = document.getElementById("texto-output");
textoOutput.value = textoModificado;

      
      if (textoModificado.trim() !== "") {
        textoOutput.classList.add('sin-fondo');
      } else {
        textoOutput.classList.remove('sin-fondo');
}



const mensaje = document.getElementById('mensaje_no_encontrado');


const boton_copiar = document.createElement('button');
boton_copiar.textContent = 'Copiar';


mensaje.parentNode.replaceChild(boton_copiar, mensaje);


function copiarAlPortapapeles() {
        navigator.clipboard.writeText(textoModificado).then(() => {
        
        }).catch(err => {
          console.error('Error al copiar el texto: ', err);
        });
      }


boton_copiar.addEventListener('click', copiarAlPortapapeles);
}

function clicDesEncriptar() {
const textereaOutput = document.getElementById("texto-output");
const textoSalida = textereaOutput.value;



 const textoDesencriptado = textoSalida
          .replace(/ai/g, 'a')
          .replace(/enter/g, 'e')
          .replace(/imes/g, 'i')
          .replace(/ober/g, 'o')
          .replace(/ufat/g, 'u');


  textereaOutput.value = textoDesencriptado;

 
}







