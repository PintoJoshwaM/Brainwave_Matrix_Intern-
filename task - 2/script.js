const products = [
  {
    id: 1,
    name: "Stylish Sneakers",
    price: 1999,
    img: "Images/sneakers._esJn43sKU6r9R7PTzkwyAHaJS"
  },
  {
    id: 2,
    name: "Modern Watch",
    price: 2499,
    img: "Images/smart watch.I7hO_gWkyr0qJAXyEnDTTAHaHa"
  },
  {
    id: 3,
    name: "Wired Headphones",
    price: 999,
    img: "Images/wired.jpg"
  },
  {
    id: 4,
    name: "Trendy Backpack",
    price: 1299,
    img:"Images/backpack.A0yevdbn53u7f6OZf4YbOwHaJ3"
  }
];



const cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
}

displayProducts();
