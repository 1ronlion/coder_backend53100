const orders = document.querySelector("#orders");

const orderCards = (arr) => {
  let html;
  for (const order of arr) {
    const { number, totalPrice, status } = order;
    html = `<div class="card">
              <h3>Orden: ${number}</h3>
              <p>Precio: $${totalPrice}</p>
              <p>Estado: ${status}</p>
            </div>`;
    orders.innerHTML += html;
  }
};

fetch("http://localhost:4500/api/orders")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.result);
    orderCards(data.result);
  });
