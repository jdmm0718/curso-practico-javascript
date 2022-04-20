// codigo del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("area del cuadrado miden: " + areaCuadrado  + "cm´2");
console.groupEnd();

// codigo del cuadrado
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "los lados del triangulo miden: "
     + ladoTriangulo1 
     + "cm, " 
     + ladoTriangulo2 
     + "cm, " 
     + baseTriangulo 
     + "cm"
     );

     const alturaTriangulo = 5.5;
     console.log("la altura del triangulo es de: " + alturaTriangulo + "cm");

     const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
     console.log("perimetro del triangulo miden: " + perimetroTriangulo + "cm");

     const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
     console.log("area del triangulo miden: " + areaTriangulo  + "cm´2");

     console.groupEnd();

     // codigo circulo
     console.group("Circulo");
     
     // Radio
     const radioCirculo = 4;
     console.log("El radio del circulo es de: " + radioCirculo + "cm");

     // Diametro
     const diamtroCirculo = radioCirculo * 2;
     console.log("El diametro del circulo es de: " + diamtroCirculo + "cm");

     // Pi
     const Pi = Math.PI;
     console.log("PI es de: " + Pi + "cm");

     // Circunferencia
     const circunferenciaCirculo = diamtroCirculo * Pi;
     console.log("El circunferencia del circulo es de: " + circunferenciaCirculo + "cm");

     // Area
     const areaCirculo = (radioCirculo * radioCirculo) * Pi;
     console.log("El area del circulo es de: " + areaCirculo + "cm");

     console.groupEnd();