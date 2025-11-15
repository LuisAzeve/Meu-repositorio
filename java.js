// variável que guarda o número
let conta = 0;

// função chamada ao clicar no botão
function clique() {
    conta++; // soma 1
    document.querySelector(".Contador").textContent = conta;
}
