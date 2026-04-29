function next() {
    document.body.innerHTML = `
        <div class="container">
        <header>
            <h1>Grupos e Fatos</h1>
        </header>

            <div class="card">
                <h2>Grupo 🅳</h2>
                <h5>Seleções</h5>
                <ul>
                    <li>Estados Unidos</li>
                    <li>Paraguai</li>
                    <li>Austrália</li>
                    <li>Turquia</li>
                </ul>
                <details>
                    <h3>Fatos:</h3><h4>Os EUA jogam em casa, vantagem histórica em Copas.
Austrália enfrenta frequentemente seleções sul-americanas em torneios.</h4>
                </details>
            </div>

            <div class="card">
                <h2>Grupo 🅴</h2>
                <h5>Seleções</h5>
                <ul>
                    <li>Alemanha</li>
                    <li>Equador</li>
                    <li>Costa do Marfin</li>
                    <li>Curaçao</li>
                </ul>
                <details>
                    <h3>Fatos:</h3><h4>Alemanha costuma dominar fases de grupos.
Equador e Costa do Marfim têm estilos físicos semelhantes.</h4>
                </details>
            </div>

            <div class="card">
                <h2>Grupo 🅵</h2>
               <h5>Seleções</h5>
               <ul>
                    <li>Holanda</li>
                    <li>Japão</li>
                    <li>Tunísia</li>
                    <li>Suécia</li>
               </ul>
               <details>
                    <h3>Fatos:</h3><h4>Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.</h4>
                </details>
            </div>
    </div>

    <div class="voltar">
        <button id="voltarPag" onclick="back()">Voltar</button>
    </div>
    `
}

function back(){
    location.reload();
}