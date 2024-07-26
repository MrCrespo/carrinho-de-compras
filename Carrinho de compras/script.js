// Variável global para armazenar o carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para buscar produtos e exibi-los
function buscarProdutos() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      const produtosFiltrados = data.filter(produto =>
        produto.title.toLowerCase().includes(searchTerm)
      );
      exibirProdutos(produtosFiltrados);
    });
}

// Função para exibir produtos na página
function exibirProdutos(produtos) {
  const produtosContainer = document.getElementById('produtos');
  produtosContainer.innerHTML = ''; // Limpa produtos existentes

  produtos.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'produto';
    produtoDiv.innerHTML = `
      <h3>${produto.title}</h3>
      <p>${produto.description}</p>
      <p>R$ ${produto.price.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${produto.id}, '${produto.title}', ${produto.price})">Adicionar ao carrinho</button>
    `;
    produtosContainer.appendChild(produtoDiv);
  });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(id, nome, preco) {
  const produtoExistente = carrinho.find(item => item.id === id);

  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    carrinho.push({ id, nome, preco, quantidade: 1 });
  }
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarIconeCarrinho();
}

// Função para atualizar o ícone do carrinho
function atualizarIconeCarrinho() {
  const iconeCarrinho = document.getElementById('iconeCarrinho');
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  iconeCarrinho.textContent = `🛒 (${totalItens})`;
}

// Função para carregar produtos no catálogo na inicialização da página
document.addEventListener('DOMContentLoaded', () => {
  buscarProdutos();
  atualizarIconeCarrinho();
});
