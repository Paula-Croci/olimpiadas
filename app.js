function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Loga o elemento HTML no console para verificação
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa.trim()) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte.</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    console.log(campoPesquisa);


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        // se titulo includes campoPesquisa
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // igual a true entao faça .....
            // Cria uma nova div para cada resultado, formatando-a como HTML
            resultados += `<div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a> </h2>
            <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais informações</a> </div>`;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }
  // console.log(dados); // Este comentário indica que há um log para a variável 'dados' (possivelmente removido)