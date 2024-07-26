// Variável global para armazenar o carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para exibir itens do carrinho na página carrinho.html
function exibirCarrinho() {
  const carrinhoContainer = document.getElementById('carrinho');
  if (!carrinhoContainer) return;

  carrinhoContainer.innerHTML = '';
  carrinho.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'carrinho-item';
    itemDiv.innerHTML = `
      <h3>${item.nome}</h3>
      <p>R$ ${item.preco.toFixed(2)}</p>
      <p>Quantidade: ${item.quantidade}</p>
      <button onclick="removerDoCarrinho(${item.id})">Excluir</button>
    `;
    carrinhoContainer.appendChild(itemDiv);
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'total';
  const totalPreco = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  totalDiv.innerHTML = `<h3>Total: R$ ${totalPreco.toFixed(2)}</h3>`;
  carrinhoContainer.appendChild(totalDiv);
}

// Função para remover item do carrinho
function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarIconeCarrinho();
  exibirCarrinho();
}

// Função para atualizar o ícone do carrinho
function atualizarIconeCarrinho() {
  const iconeCarrinho = document.getElementById('iconeCarrinho');
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  iconeCarrinho.textContent = `🛒 (${totalItens})`;
}

// Carrega os itens do carrinho ao carregar a página do carrinho
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('carrinho.html')) {
    exibirCarrinho();
  }
});
