
let formato = localStorage.getItem('itemList');
formato = formato ? JSON.parse(formato) : [];

showformato();

function addItem() {
  let pedido = document.getElementById('pedido').value;
  let cantidad = document.getElementById('cantidad').value;
  let producto = document.getElementById('producto').value;
  let valor = document.getElementById('valor').value;

  if (pedido && cantidad && producto && valor) {
    formato.push({
      'pedido': pedido,
      'cantidad': cantidad,
      'producto': producto,
      'valor': valor
    });
    showformato();
  }
}

function showformato() {
  document.getElementById('pedido').value = '';
  document.getElementById('cantidad').value = '';
  document.getElementById('producto').value = '';
  document.getElementById('valor').value = '';

  let html = '';
  formato.forEach((item, index) => {
    html += `<div class="col-3 mb-2"> Pedido: ${item.pedido} </div>`;
    html += `<div class="col-3 mb-2"> Cantidad: ${item.cantidad} </div>`;
    html += `<div class="col-3 mb-2"> Producto: ${item.producto} </div>`;
    html += `<div class="col-3 mb-2"> Valor: ${item.valor} </div>`;
    html += `<div class="col-12 text-center mb-2"><button class="btn btn-danger" onclick="deleteItem(${index})">Eliminar</button></div>`;
  });

  localStorage.setItem('itemList', JSON.stringify(formato));
  document.getElementById('formato').innerHTML = html;
}

function deleteItem(index) {
  formato.splice(index, 1);
  showformato();
}