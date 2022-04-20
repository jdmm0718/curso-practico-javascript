function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diamtroCirculo(radio) {
    return radio * 2;
}

const Pi = Math.PI;

function perimetroCirculo(radio) {
    const diamtro = diamtroCirculo(radio);
    return diamtro * Pi;
}

function areaCirculo(radio) {
    return (radio * radio) * Pi
}

function calcularPerimetroCuadrado() {
   const input = document.getElementById("InputCuadrado");
   const value = input.value;
   const perimetro = perimetroCuadrado(value);
   alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}