// Crie uma função chamada calculaAreaRetangulo que recebe dois parâmetros: largura e altura. A função deve calcular a área do retângulo e retornar o resultado.

function calculaAreaRetangulo() {

    var largura = parseFloat(prompt("Digite a largura do retângulo:"));
    var altura = parseFloat(prompt("Digite a altura do retângulo:"));

 
    if (isNaN(largura) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos.");
        return; 
    }

    var area = largura * altura;


    alert("A área do retângulo com largura " + largura + " e altura " + altura + " é " + area + ".");
}


calculaAreaRetangulo();