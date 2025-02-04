let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo"); 
  let nome = input.value.trim(); 
  let lista = document.getElementById("listaAmigos"); 

  // Verifica se o campo está vazio
  if (nome === "") {
    alert("Digite um nome antes de adicionar!");
    return;
  }

  // Verifica se o nome já está na lista
  let itensLista = lista.getElementsByTagName("li");
  for (let item of itensLista) {
    if (item.textContent === nome) {
      alert("Esse nome já foi adicionado!");
      return;
    }
  }

  // Criar um novo item na lista
  let novoItem = document.createElement("li");
  novoItem.textContent = nome;

  // Adiciona o nome na <ul>
  lista.appendChild(novoItem);

  // Adiciona o nome na lista de amigos
  amigos.push(nome);

  
  input.value = "";
}

function sortearAmigo() {
  if (amigos.length < 2) {  
    alert("Adicione no mínimo 2 amigos!");
    return;
  }

  let sorteio = [...amigos];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o resultado anterior

  // Embaralha os amigos com o algoritmo de Fisher-Yates
  for (let i = sorteio.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
  }

  // Se alguém pegar a si mesmo, refaz o sorteio
  for (let i = 0; i < amigos.length; i++) {
    if (sorteio[i] === amigos[i]) {
      sortearAmigo();
      return;
    }
  }

  // Exibe os pares sorteados
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = `${amigos[i]} → ${sorteio[i]}`;
    resultado.appendChild(item);
  }
}
