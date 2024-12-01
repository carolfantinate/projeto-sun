// Referência ao checkbox
const termsCheckbox = document.getElementById('termsCheckbox');

// Carregar o estado salvo no localStorage
const savedState = localStorage.getItem('termsChecked');
if (savedState === 'true') {
    termsCheckbox.checked = true; // Marca o checkbox se o estado salvo for "true"
}

// Salvar o estado no localStorage ao alterar o checkbox
termsCheckbox.addEventListener('change', () => {
    localStorage.setItem('termsChecked', termsCheckbox.checked);
});
