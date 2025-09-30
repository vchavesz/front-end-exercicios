const inputItem = document.getElementById('novo-item');
const inputNome = document.getElementById('nome-pessoa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaItens = document.getElementById('lista-itens');
const contador = document.getElementById('contador');

let totalItens = 0;

// Função para atualizar contador
function atualizarContador() {
  contador.textContent = totalItens;
}

// Função para adicionar item
function adicionarItem() {
  const textoItem = inputItem.value.trim();
  if (textoItem === "") {
    alert("Digite um item válido!");
    return;
  }

  const novoItem = document.createElement('div');
  novoItem.className = 'item disponivel';

  novoItem.innerHTML = `
    <strong>${textoItem}</strong><br>
    <button class="btn-trazer">Eu trago!</button>
    <button class="btn-cancelar" style="display:none;">Cancelar</button>
    <p class="responsavel"></p>
  `;

  listaItens.appendChild(novoItem);
  totalItens++;
  atualizarContador();

  inputItem.value = "";
}

// Evento de clique no botão "Adicionar"
btnAdicionar.addEventListener('click', adicionarItem);

// Evento de tecla Enter no campo de item
inputItem.addEventListener('keypress', function(e) {
  if (e.key === "Enter") {
    adicionarItem();
  }
});

// Delegação de eventos para botões dentro dos itens
listaItens.addEventListener('click', function(e) {
  const item = e.target.closest('.item');
  if (!item) return; // Garante que o clique foi dentro de um item

  const nome = inputNome.value.trim();
  const responsavel = item.querySelector('.responsavel');
  const btnTrago = item.querySelector('.btn-trazer');
  const btnCancelar = item.querySelector('.btn-cancelar');

  if (e.target.classList.contains('btn-trazer')) {
    if (nome === "") {
      alert("Digite seu nome para se voluntariar!");
      return;
    }
    responsavel.textContent = `Quem vai trazer: ${nome}`;
    item.classList.add('reservado');
    btnTrago.style.display = "none";
    btnCancelar.style.display = "inline";
  }

  if (e.target.classList.contains('btn-cancelar')) {
    responsavel.textContent = "";
    item.classList.remove('reservado');
    btnTrago.style.display = "inline";
    btnCancelar.style.display = "none";
  }
});
