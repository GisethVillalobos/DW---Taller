// Cambiar fondo y borde de elemento sobre el que se hace click
function mark(element) {
    element.style.backgroundColor = "AliceBlue";
    element.style.border = "solid";
    element.style.borderColor = "grey";
}

// Configurar un deslizado suave
let buttons = document.querySelectorAll('a');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute('href');

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//Chat de escritura 
function processForm() {

    //document.getElementById('chatForm');

    // Obtiene los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // Muestra los datos en la consola
    console.log('Nombre de Remitente:', name);
    console.log('Mensaje:', message);
}