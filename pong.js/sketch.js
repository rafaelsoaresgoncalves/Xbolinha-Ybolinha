let xBolinha = 300;
let yBolinha = 200;
let diametro = 50;
let vXbolinha = 6;
let vybolinha = -6;
let raio = diametro / 2;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    criarBolinha();
    movimentarBolinha();
    bateraltura();


    circle(xBolinha, yBolinha, diametro);


    xBolinha += vXbolinha;


    if (xBolinha + raio > width || xBolinha - raio < 0) {
        vXbolinha *= -1;
    }

    yBolinha += vybolinha;
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        vybolinha *= -1;
    }


    function criarBolinha() {
        circle(xBolinha, yBolinha, diametro);
    }

    function movimentarBolinha() {
        xBolinha += vXbolinha
    }

function bateraltura(){
    yBolinha += vybolinha;
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        vybolinha *= -1;
    }
}

function baterlargura(){
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        vXbolinha *= -1;
    }
}





    console.log(xBolinha)
    console.log(vybolinha)
}