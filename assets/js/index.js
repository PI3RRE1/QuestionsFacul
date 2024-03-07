// Faça um programa que leia um numero e informe se ele é par ou impar.
function checkImparPar() {
    var num = document.getElementById('number').value

    var number = Number(num);

    var result = document.querySelector('#result');

    if(number % 2 === 0) {
        result.textContent = number + " é um numero Par";
    } else {
        result.textContent = number + " é um numero Ímpar";
    }
}

// Faça um programa que leia 5 números e imprima em ordem decrecente.
function ordenar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    var numero4 = parseFloat(document.getElementById("numero4").value);
    var numero5 = parseFloat(document.getElementById("numero5").value);

    var numeros = [numero1, numero2, numero3, numero4, numero5];

    numeros.sort(function(a, b) {
        return b - a;
    });

    var resultado = "Números em ordem decrescente: " + numeros.join(", ");
    
    document.getElementById("resultado").textContent = resultado;
}

// Faça um progrma que leia altura e peso e de o indice do IMC
function imc() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    var imc = peso / (altura * altura);

    var resultImc = document.querySelector("#resultImc");
    resultImc.textContent = ("O seu IMC é: " + imc.toFixed(2));
}

// Faça um programa que leia 3 numeros e informe se é um triangulo escaleno, isosceles ou equilatero
function triangulo() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);

    var resultTriangulo = document.querySelector('#resultTriangulo');

    if (num1 === num2 && num2 === num3) {
        resultTriangulo.textContent = ("Esse é um triangulo Equilatero");
    }
    else if (num1 === num2 || num1 === num3 || num2 === num3) {
        resultTriangulo.textContent = ("Esse é um triangulo Isósceles");
    }
    else{
        resultTriangulo.textContent = ("Esse é um tringulo Escaleno");
    }
} 



