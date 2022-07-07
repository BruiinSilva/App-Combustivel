function combustivel() {
  // declaração de variáveis
  var gasolina    = document.getElementById('gasolina').value;
  var etanol      = document.getElementById('etanol').value;
  var result      = document.getElementById('result');

  // substituir virgula por ponto
  gasolina        = gasolina.replace(',', '.');
  etanol          = etanol.replace(',', '.');

  if(gasolina != '' && etanol != '') {
      // calcular o melhor combustível
      var maisBarato  = etanol/gasolina;

      //algoritmo
    if (maisBarato >= 0.7) {
      result.innerHTML = 'Melhor abastecer com Gasolina.';
      result.style = 'color: #000; text-shadow: 2px 2px 2px #ff0';
    } 
    
    else {
      result.innerHTML = 'Melhor abastecer com Etanol.';
      result.style = 'color: rgb(221, 25, 25); text-shadow: 2px 2px 2px rgb(221, 25, 25)';
    }
  } 
  else {
    alert('Preencha todos os campos!');
  }
}

function verificarInput(event) {
  var letra = event.key;

  if (letra != 0 && letra != 1 && letra != 2 && letra != 3 && letra != 4 && letra != 5 && letra != 6 && letra != 7 && letra != 8 && letra != 9 && letra != ',' && letra != '.' && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
    alert('Caractere inválido!');
    document.getElementById('gasolina').value = '';
    document.getElementById('etanol').value = '';
  }
}

