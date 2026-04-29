function revelar(){
    let imagem = document.querySelector(".card-img-top");

    let nome = document.getElementById("Nome");
    let rank = document.getElementById("Rank");
    let dataNas = document.getElementById("Data_Nas");
    let altura = document.getElementById("Altura");
    let posicao = document.getElementById("Posicao");

    imagem.src = "img/_vinicius_junior.png";

    nome.innerHTML = `
        Vinícius José Paixão de Oliveira Júnior
        <span id="Rank" class="badge text-bg-secondary">9,5</span>
    `;

    dataNas.textContent = "📅 Data de Nascimento: 12/07/2000 (25 anos)";
    altura.textContent = "📏 Altura: 1,76 m";
    posicao.textContent = "🏃 Posição: Ponta-esquerda / Atacante";

    nome.classList.remove("placeholder-glow");
    dataNas.classList.remove("placeholder");
    altura.classList.remove("placeholder");
    posicao.classList.remove("placeholder");

    dataNas.classList.add("card-text");
    altura.classList.add("card-text");
    posicao.classList.add("card-text");
}