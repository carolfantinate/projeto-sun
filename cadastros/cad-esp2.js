const fileInput = document.getElementById("file-input");
const fileNameSpan = document.getElementById("file-name");

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0]; // Obtém o primeiro arquivo selecionado
    if (file) {
        fileNameSpan.textContent = file.name; // Atualiza o texto com o nome do arquivo
    } else {
        fileNameSpan.textContent = "Anexar currículo (PDF)"; // Texto padrão caso não haja arquivo
    }
});

if (sessionStorage.getItem('formularioConcluido') !== 'true') {
    alert('Você precisa preencher o formulário anterior.');
    window.location.href = 'cad-user1.html'; // Redireciona de volta ao formulário
}


const cipField = document.getElementById("cip");

// Armazena o placeholder original
const originalPlaceholder = cipField.placeholder;

// Quando o campo for clicado (focus), altera o placeholder
cipField.addEventListener("focus", function () {
    cipField.placeholder = "Digite o CIP...";
});

// Quando o campo perder o foco (blur), volta ao placeholder original
cipField.addEventListener("blur", function () {
    cipField.placeholder = originalPlaceholder;
});
