const listaExercicios = document.getElementById("lista-exercicios");
const tituloExercicios = document.getElementById("titulo-exercicios");
const textoContainer = document.getElementById("texto-container");

const exercicios = {
  "Introdução ao Cloud Foundation": {
    "1 - Introdução ao Amazon S3": "Cloud/10.txt",
    "2 - Introdução à computação em nuvem": "Cloud/2.txt",
    "3 - O que é computação em nuvem?": "Cloud/5.txt",
    "4 - O que é a Amazon Web Services?": "Cloud/6.txt"

  },
  "Introdução à segurança": {
    "1 - Introdução à segurança": "Seguranca/282.txt",
    "2 - Ciclo de vida da segurança: Prevenção": "Seguranca/283.txt",
    "3 - Reforço da rede": "Seguranca/284.txt"
  }
};

// Função para carregar a lista de exercícios
function carregarConteudo(topico) {
  listaExercicios.innerHTML = ""; // Limpar a lista anterior
  //textoContainer.innerHTML = ""; // Limpar o conteúdo do container de texto

  tituloExercicios.textContent = topico; // Atualizar o título
  

  const listaTopico = exercicios[topico];

  if (listaTopico) {
    Object.keys(listaTopico).forEach((item) => {
      let button = document.createElement("button");
      button.className = "list-group-item list-group-item-action";
      button.textContent = item;
      button.onclick = () => carregarConteudoExterno(listaTopico[item]);
      listaExercicios.appendChild(button);
    });
  }
}

// Função para carregar arquivos .txt
function carregarConteudoExterno(arquivo) {
  fetch(arquivo)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o arquivo.");
      }
      return response.text();
    })
    .then(texto => {
      textoContainer.textContent = texto;
    })
    .catch(error => {
      textoContainer.textContent = "Erro ao carregar o conteúdo.";
      console.error(error);
    });
}

// Chamamos a função automaticamente ao carregar a página
window.onload = () => {
  carregarConteudo("Introdução ao Cloud Foundation");// Define o primeiro tópico como padrão
};
