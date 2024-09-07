function pesquisar() {
    /**
     * Função para exibir os resultados de uma pesquisa em uma seção HTML.
     */
  
    // Obter a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializar a string que armazenará o HTML dos resultados
    let resultados = "";
    let condicao = "";
    let sintomas = "";
    let causas = "";

    if (campoPesquisa == ""){
      section.innerHTML = "<p>Campo de busca vazio</p>";
      return;
    }
  
    // Iterar sobre os dados e construir o HTML para cada resultado
    for (let dado of dados) {

      condicao = dado.condicao.toLowerCase();
      sintomas = dado.sintomas.toLowerCase();
      causas = dado.causas.toLowerCase();

      if (condicao.includes(campoPesquisa) || (sintomas.includes(campoPesquisa)) || (causas.includes(campoPesquisa))){
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.condicao}</a>
            </h2>
            <p class="descricao-meta">${dado.sintomas}</p>
          </div>
        `;
      }
    }
  
    // Inserir os resultados na seção
    section.innerHTML = resultados;
    
}