"use strict";

function calculateOrder(event) {
  event.preventDefault();

  var productSelect = document.getElementById("product");
  var quantityInput = document.getElementById("quantity");
  var errorBlock = document.getElementById("error");
  var resultBlock = document.getElementById("result");

  var quantityValue = quantityInput.value;
  var pattern = /^\d+$/;

  if (!pattern.test(quantityValue)) {
    errorBlock.textContent = "Введите целое положительное число";
    resultBlock.textContent = "";
    return;
  }

  var quantity = parseInt(quantityValue, 10);
  if (quantity <= 0) {
    errorBlock.textContent = "Количество должно быть больше нуля";
    resultBlock.textContent = "";
    return;
  }

  errorBlock.textContent = "";

  var price = parseInt(productSelect.value, 10);
  var total = price * quantity;

  resultBlock.textContent = "Итого: " + total + " ₽";
}

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("order-form");
  form.addEventListener("submit", calculateOrder);
});