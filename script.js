document.addEventListener("DOMContentLoaded", function () {
    const carta = document.querySelector(".carta");
    const frente = document.querySelector(".frente");
    const dentro = document.querySelector(".dentro");
    const selo = document.querySelector(".selo");

    let aberta = false;

    // Abrir a carta ao clicar no selo
    selo.addEventListener("click", function (event) {
        event.stopPropagation(); // Impede que o clique no selo se propague para a carta
        if (!aberta) {
            carta.style.transform = "rotateX(0deg) scale(1)";
            setTimeout(() => {
                frente.style.display = "none"; // Esconde o envelope após a animação
                dentro.style.display = "block"; // Mostra o conteúdo da carta
            }, 300); // Tempo ajustado para sincronizar a animação
            aberta = true;
        }
    });
    // Fechar a carta ao clicar duas vezes, mas ignorar se for no selo
    carta.addEventListener("dblclick", function (event) {
        if (aberta && event.target !== selo) { // Se a carta estiver aberta e não for o selo
            dentro.style.display = "none"; // Esconde o conteúdo da carta
            frente.style.display = "flex"; // Mostra o envelope novamente
            carta.style.transform = "rotateX(90deg) scale(0.9)";
            setTimeout(() => {
                carta.style.transform = "rotateX(0deg) scale(1)";
            }, 1000);
            aberta = false;
        }
    });
});