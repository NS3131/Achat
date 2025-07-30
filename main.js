
const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const quantitySpans = document.querySelectorAll(".quantity");
const totalDisplay = document.querySelector(".total");
const priceSpans = document.querySelectorAll(".unit-price");
const productCards = document.querySelectorAll(".product-card");
const hearts = document.querySelectorAll(".fa-heart");


// ❤️ Toggle Heart
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
    heart.style.color = heart.classList.contains("liked") ? "red" : "black";
  });
});

// ➕ Increase Quantity
plusButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    quantitySpans[i].innerHTML++;
    updateTotal();
  });
});

// ➖ Decrease Quantity
minusButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (quantitySpans[i].innerHTML > 1) {
      quantitySpans[i].innerHTML--;
      updateTotal();
    }
  });
});

// 🗑️ Delete Product
deleteButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    productCards[i].remove();
    updateTotal();
  });
});

// 💰 Update Total Price
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".product-card").forEach((card, i) => {
    const price = parseFloat(card.querySelector(".unit-price").innerHTML.replace("$", ""));
    const quantity = parseInt(card.querySelector(".quantity").innerHTML);
    total += price * quantity;
  });
  totalDisplay.innerHTML = total + " $";
}