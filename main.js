const botoes = document.querySelectorAll("button");

    botoes.forEach(function (botoa) {
        let curtiu = false;
        botao.addEventListener("click", botaoClicado);
        function botaoClicado () {
            conslole.log("fui clicado");
            let texto = botao.querySelector("span");
            if (curtiu === false) {
                texto.textContend++;
                curtiu = true;
            } else {
                texto.textContend--;
                curtiu = false;
            }
        }
    })