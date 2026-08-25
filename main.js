const botoes = document.querySelectorAll("button);

    botoes.forEach(function (botoa) {
        let curtiu = false;
        botao.addEventListener("click", botaoClicado);
        function botaoClicado () {
            conslole.log("fui clicado");
            let texto = botao.querySelector("span");
            if (curtiu === false) {
                texto.textContent++;
                curtiu = true;
            } else {
                texto.textContent--;
                curtiu = false;
            }
        }
    })