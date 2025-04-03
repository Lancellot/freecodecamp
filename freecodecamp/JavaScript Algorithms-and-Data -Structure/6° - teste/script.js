document.addEventListener('DOMContentLoaded', function() {
    const botaoVerificar = document.getElementById('botao-verificar');
    const entradaTexto = document.getElementById('entrada-texto');
    const resultadoDiv = document.getElementById('resultado');
    
    botaoVerificar.addEventListener('click', function() {
        const valorInput = entradaTexto.value.trim();
        
        if (!valorInput) {
            alert('Por favor, digite um valor');
            return;
        }
        
        const ehPalindromo = verificarPalindromo(valorInput);
        mostrarResultado(valorInput, ehPalindromo);
    });
    
    function verificarPalindromo(str) {
        // Remove todos os caracteres não alfanuméricos e converte para minúsculas
        const textoLimpo = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // Inverte o texto limpo
        const textoInvertido = textoLimpo.split('').reverse().join('');
        // Verifica se o texto limpo é igual ao seu inverso
        return textoLimpo === textoInvertido;
    }
    
    function mostrarResultado(input, ehPalindromo) {
        resultadoDiv.textContent = `"${input}" ${ehPalindromo ? 'é um' : 'não é um'} palíndromo`;
        resultadoDiv.className = ehPalindromo ? 'palindromo' : 'nao-palindromo';
    }
});
