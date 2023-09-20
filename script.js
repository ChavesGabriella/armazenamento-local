//adiciona um evento de clique ao botão de salvar
const btnSalvarLocalmente = document.getElementById('salvarLocalmente');
btnSalvarLocalmente.addEventListener('click', salvarTextoLocalmente);

//função para salvar o texto no local storage
function salvarTextoLocalmente(){

    //obtém o valor do campo de entrada de texto
    const variavelSalva = document.getElementById('inputTexto').value;

    //salva o texto no local storage com uma chave especifica
    localStorage.setItem('textoSalvo', variavelSalva);

    //exibe uma mensagem de sucesso
    alert(`Texto "${variavelSalva}" salvo localmente com sucesso!`);

    //limpa o cmapo de entrada de texto
    document.getElementById('inputTexto').value = '';
}
