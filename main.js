// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
    img_imgTag = new Image(); // Definindo uma variável com uma nova imagem
    img_imgTag.onload = uploadimg; // Ajustando uma função, ao carregar essa variável
    img_imgTag.src = img_image;   // Carregar uma imagem
}

function uploadimg() {
    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

// Escreva um código para obter o evento key-pressed
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    // Escreva um código para verificar o tipo de tecla pressionada
    if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
        alphabetkey();
    } else if (keyPressed >= 48 && keyPressed <= 57) {
        numberkey();
    } else if (keyPressed >= 37 && keyPressed <= 40) {
        arrowkey();
    } else if (keyPressed == 17 || keyPressed == 18 || keyPressed == 27) {
        specialkey();
    } else {
        otherkey();
        document.getElementById("d1").innerHTML = "Você pressionou um símbolo ou outra tecla";
    }
}

function alphabetkey() {
    // Envie as imagens com suas respectivas mensagens.
    img_image = "alfabeto.png";
    add();
}

function numberkey() {
    // Envie as imagens com suas respectivas mensagens.
    img_image = "número.png";
    add();
}

function arrowkey() {
    // Envie as imagens com suas respectivas mensagens.
    img_image = "direcional.png";
    add();
}

function specialkey() {
    // Envie as imagens com suas respectivas mensagens.
    img_image = "especial.png";
    add();
}

function otherkey() {
    img_image = "outras.png";
    add();
}
