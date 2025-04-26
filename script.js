let itensPedido = [];

function addItem(item) {
  itensPedido.push(item);
  atualizarPedido();
}

function atualizarPedido() {
  const lista = document.getElementById('pedido');
  lista.innerHTML = '';
  itensPedido.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
  });
}

function enviarPedido() {
  if (itensPedido.length === 0) {
    alert('Seu pedido está vazio!');
    return;
  }
  
  const mensagem = encodeURIComponent('Olá, quero fazer o seguinte pedido:\n\n' + itensPedido.join('\n'));
  const telefone = 'SEU_NUMERO_AQUI'; // Coloque seu número aqui no formato 55+DDD+numero. Ex: 5599999999999
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

function mostrarPix() {
    const areaPix = document.getElementById('pixArea');
    areaPix.style.display = 'block';
  }

  function atualizarPedido() {
    const lista = document.getElementById('pedido');
    lista.innerHTML = '';
    itensPedido.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = item;
  
      // Criar botão de remover
      const btnRemover = document.createElement('button');
      btnRemover.textContent = 'Remover';
      btnRemover.style.marginLeft = '10px';
      btnRemover.style.backgroundColor = '#ff3333';
      btnRemover.style.border = 'none';
      btnRemover.style.color = 'white';
      btnRemover.style.padding = '5px';
      btnRemover.style.borderRadius = '5px';
      btnRemover.style.cursor = 'pointer';
  
      // Quando clicar, remove o item
      btnRemover.onclick = () => {
        removerItem(index);
      };
  
      li.appendChild(btnRemover);
      lista.appendChild(li);
    });
  }
  
  function removerItem(index) {
    itensPedido.splice(index, 1);
    atualizarPedido();
  }

  function mostrarPix() {
    const areaPix = document.getElementById('pixArea');
    const botaoPix = document.getElementById('pixButton');
  
    if (areaPix.style.display === 'none' || areaPix.style.display === '') {
      areaPix.style.display = 'block';
      botaoPix.textContent = 'Fechar QR Code';
    } else {
      areaPix.style.display = 'none';
      botaoPix.textContent = 'Ver QR Code do Pix';
    }
  }
  
  
