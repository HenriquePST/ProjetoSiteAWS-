
function carregarConteudo(topico) {
    let exercicios = {
        "Introdução ao Cloud Foundation": ["Fundamentos da AWS", "Regiões e Zonas de Disponibilidade", "Modelos de Implantação"],
        "Introdução à segurança": ["Princípios de Segurança AWS", "IAM e Controle de Acesso", "Criptografia e Proteção de Dados"],
        "Introdução à rede": ["VPC e Sub-redes", "Roteamento e Peering", "Segurança de Rede"],
        "Banco de Dados": ["Amazon RDS", "DynamoDB", "Estratégias de Backup"],
        "Simulados": ["Prova Simulada 1", "Prova Simulada 2", "Prova Simulada 3"],
        "Provas Antigas": ["Exame 2023", "Exame 2022", "Exame 2021"]
    };

    let conteudo = exercicios[topico] || [];
    let listaExercicios = document.getElementById("lista-exercicios");
    let textoContainer = document.getElementById("texto-container");
    
    listaExercicios.innerHTML = "";
    textoContainer.innerHTML = "📢 Selecione um exercício para ver o conteúdo.";
    
    conteudo.forEach((item, index) => {
        let button = document.createElement("button");
        button.className = "list-group-item list-group-item-action";
        button.textContent = `${index + 1} - ${item}`;
        button.onclick = () => textoContainer.innerHTML = `📌 ${item}\n\nDescrição do tópico selecionado.`;
        listaExercicios.appendChild(button);
    });
}
