function add(){
    let imagem = document.querySelector(".card-img-top");

    let nome = document.getElementById("Nome");
    let rank = document.getElementById("Rank");
    let dataNas = document.getElementById("Data_Nas");
    let altura = document.getElementById("Altura");
    let posicao = document.getElementById("Posição");

    imagem.src = "img/Lucas_Paqueta.webp";

    nome.innerHTML = `
        Lucas Tolentino Coelho de Lima
        <span id="Rank" class="badge text-bg-secondary">8,8</span>
    `;

    dataNas.textContent = "Data de Nascimento: 27/08/1997 (28 anos)";
    altura.textContent = "Altura: 1,80 m";
    posicao.textContent = "Posição: Meio-campista";

    nome.classList.remove("placeholder-glow");
    dataNas.classList.remove("placeholder");
    altura.classList.remove("placeholder");
    posicao.classList.remove("placeholder");

    dataNas.classList.add("card-text");
    altura.classList.add("card-text");
    posicao.classList.add("card-text");

}