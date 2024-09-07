function pesquisar() {let section = document.getElementById
    ("resultados-pesquisa")

let campoPesquisa = document.getElementById
("campo-pesquisa").value
// se campoPesquisa for uma string sem nada
if (!campoPesquisa) {
    section.innerHTML = "<p>Você tem que pesquisar a pessoa antes burrão<p>"
return
}
    

    let resultado = "";
    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        //se titulo includes Pesquisa
        if (dado.titulo.includes(campoPesquisa) ||
        dado.descrição.includes(campoPesquisa)) {
            //cria um novo elemento
            resultado += `
            <div class="item-resultado">
                            <h2>
                                <a href="https://www.youtube.com/watch?v=MKJzqD92VMU" target="_blank" >${dado.titulo} </a>;
                            </h2>
                            <p class="descricao-meta">${dado.descrição}</p>
                        <a href= ${dado.link} target="_blank">Mais informações</a>
                        </div>
            `
        }
    }
if (!resultado) {
 resultado = "<p>Esse velocista não é rapido o suficiente para estar aqui<p>"
}

    section.innerHTML = resultado
}

 

 