// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  var priceVal = price.innerHTML;
  var quantityVal = quantity.value;
  var subtotalPrice = priceVal * quantityVal;
  var subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const singleProduct = products[i];
    updateSubtotal(singleProduct);
  }
  // ITERATION 3
  //... your code goes here
  TotalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const singleProduct2 = products[i];
    updateSubtotal(singleProduct2);
    const subtotal = singleProduct2.querySelector('.subtotal span');
    TotalPrice += parseFloat(subtotal.innerHTML);
  }

  let totalVal = document.getElementById('total-value');
  totalVal.innerHTML = TotalPrice.toFixed(3);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
