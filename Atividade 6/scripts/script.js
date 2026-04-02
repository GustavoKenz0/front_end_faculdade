const bicho = document.getElementById("bicho");
const starfield = document.getElementById("starfield");
const toggle = document.getElementById("toggleTema");
const fundoDia = "Img_bichinho/background.jpg";
const fundoNoite = "Img_bichinho/backgroundNight.jpg";
let horas = 0;
const inputNome = document.getElementById("inputNome");
const nomeBicho = document.getElementById("nomeBicho");

const estados = {
    normal: "Img_bichinho/bc_normal.jpg",
    bravo: "Img_bichinho/bc_bravo.jpg",
    chorando: "Img_bichinho/bc_chorando.jpg",
    comendo: "Img_bichinho/bc_comendo.jpg",
    dormindo: "Img_bichinho/bc_dormindo.jpg",
    feliz: "Img_bichinho/bc_feliz.jpg",
    botao: "Img_bichinho/btn_bicho.jpg"
}

let contador = 0;
let intervalo = null;
let time_out = null;
let time_click = null;

function controlador(){
    if(intervalo) clearInterval(intervalo)
        intervalo = setInterval(() =>{
            contador++;
            console.log("Tempo: ", contador);

            if(contador == 5){
                bicho.src = estados.bravo;
            }

            if(contador == 10){
                bicho.src = estados.chorando;
            }

            if(contador == 15){
                bicho.src = estados.dormindo;
            }

        }, 1000)
}

function alimentar(){
    bicho.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if(time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        bicho.src = estados.feliz;

        timeoutBack = setTimeout(()=>{
            bicho.src = estados.normal
        },2000);
    }, 1000);
}

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
        nomeBicho.style.color = "White";
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
        nomeBicho.style.color = "black";
    }
});

inputNome.addEventListener("input", () => {
    nomeBicho.textContent = inputNome.value || "Seu Bichinho";
});

controlador();
atualizarFundo();
