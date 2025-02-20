const listaExercicios = document.getElementById("lista-exercicios");
const tituloExercicios = document.getElementById("titulo-exercicios");
const textoContainer = document.getElementById("texto-container");

const exercicios = {
  "Introdução ao Cloud Foundation": {
    "1 - Fundamentos da AWS":
      "📌 Fundamentos da AWS\n\nAqui você aprenderá sobre os conceitos básicos da AWS, seus serviços e como utilizá-los.",
    "2 - Regiões e Zonas de Disponibilidade":
      "📌 Regiões e Zonas de Disponibilidade\n\nEntenda como a AWS organiza sua infraestrutura globalmente.",
    "3 - Introdução à computação em nuvem": "Carregando conteúdo...", // Colocamos uma mensagem de carregamento
  }
};

async function carregarConteudoExterno(topico, nomeArquivo) {
  try {
    // Usando fetch para carregar o arquivo de conteúdo externo
    const resposta = await fetch(nomeArquivo);
    if (!resposta.ok) {
      throw new Error("Falha ao carregar o conteúdo.");
    }
    const conteudo = await resposta.text();
    
    // Atualiza o conteúdo do tópico com o conteúdo do arquivo
    exercicios[topico]["3 - Introdução à computação em nuvem"] = conteudo;

    // Agora, chamamos a função para carregar o conteúdo na página
    carregarConteudo(topico);
  } catch (erro) {
    console.error("Erro ao carregar o conteúdo: ", erro);
  }
}

function carregarConteudo(topico) {
  listaExercicios.innerHTML = ""; // Limpar os exercícios anteriores
  tituloExercicios.textContent = "";

  const listaTopico = exercicios[topico];

  if (listaTopico) {
    let primeiroExercicio = Object.keys(listaTopico)[0]; // Pegamos o primeiro exercício da lista
    textoContainer.innerHTML = listaTopico[primeiroExercicio]; // Exibe o primeiro exercício no início

    Object.keys(listaTopico).forEach((item) => {
      let button = document.createElement("button");
      button.className = "list-group-item list-group-item-action";
      button.textContent = item;
      button.onclick = () => (textoContainer.innerHTML = listaTopico[item]);
      listaExercicios.appendChild(button);
    });
  }
}

// ⬇️ Chamamos essa função automaticamente ao carregar a página
window.onload = () => {
  carregarConteudo("Introdução ao Cloud Foundation"); // Define a primeira categoria como padrão

  // Carregar o conteúdo do arquivo externo para o tópico "Modelos de Implantação"
  carregarConteudoExterno("Introdução ao Cloud Foundation", "02.txt");
};
