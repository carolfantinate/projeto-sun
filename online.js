// Seleciona todos os especialistas e a aba de detalhes
const container = document.getElementById("item-3")
const especialistas = document.querySelectorAll(".especialista");
const details = document.querySelector(".details");
const detailsTitle = details.querySelector("h4");
const detailsContent = details.querySelector("p.exp");
const detailsAvaliacao = details.querySelector("#avaliacao-imagem");
const closeButton = details.querySelector("button");

// Informações fictícias para exibição dinâmica
const especialistasData = [
    {
        nome: "Especialista 1",
        descricao: "Informações sobre o Especialista 1, habilidades e experiência.",
        avaliacao: "notas/esp1-nota.png"
    },
    {
        nome: "Especialista 2",
        descricao: "Detalhes do Especialista 2, área de atuação e avaliações.",
        avaliacao: "notas/esp2-nota.png"
    },
    {
        nome: "Especialista 3",
        descricao: "Perfil do Especialista 3 com especialidades e horários disponíveis.",
        avaliacao: "notas/esp3-nota.png"
    },
];

// Adiciona evento de clique para cada especialista
especialistas.forEach((especialista, index) => {
    especialista.addEventListener("click", () => {
        detailsTitle.textContent = especialistasData[index].nome;
        detailsContent.textContent = especialistasData[index].descricao;
        detailsAvaliacao.src = especialistasData[index].avaliacao;

        // Mostra a aba de detalhes
        details.classList.add("show");

        container.style.marginRight = "300px"
    });
});

// Fecha a aba de detalhes ao clicar no botão
closeButton.addEventListener("click", () => {
    details.classList.remove("show");
    container.style.marginRight = ""
});