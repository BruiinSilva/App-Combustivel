
function combustivel() {
    // declaração de variáveis
    
    var gasolina    = document.getElementById("gasolina").value;
    var etanol      = document.getElementById("etanol").value;
    var result      = document.getElementById("result");
  
    gasolina        = gasolina.replace(",", ".");
    etanol          = etanol.replace(",", ".");
  
    var maisBarato  = etanol/gasolina;
  
    // algoritmo
    if(gasolina != "" && etanol != "") {
      if (maisBarato >= 0.7) {
        result.innerHTML = "Melhor abastecer com Gasolina.";
        result.style = 'color: #000; text-shadow: 2px 2px 2px #ff0';
      } else {
        result.innerHTML = "Melhor abastecer com Etanol.";
        result.style = 'color: #000; text-shadow: 2px 2px 2px rgb(221, 25, 25)';
      }
    } else {
      alert("Preencha todos os campos!")
    }
  }
  
  function verificarInput(event) {
    var num = event.key
  
    if (num != 0 && num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9 && num != ',' && num != '.' && num != 'Tab' && num != 'Enter' && num != 'Backspace' && num != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
      alert("Caractere inválido!")
      document.getElementById("gasolina").value = "";
      document.getElementById("etanol").value = "";
    }
  }

