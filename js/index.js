// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const subtotal = (price.innerHTML * quantity.value).toFixed(2)

  product.querySelector(".subtotal span").innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  const products = Array.from(document.getElementsByClassName('product'));
  const total = products.reduce((acc, product) => {
    return acc + Number(updateSubtotal(product));
  }, 0)

  document.querySelector("#total-value span").innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const product = target.parentNode.parentNode
  const productList = product.parentNode

  productList.removeChild(product)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const createProductRow = document.querySelector('.create-product')

  const name = createProductRow.querySelector('td:first-child input')
  const price = createProductRow.querySelector('td:nth-child(2) input')

  if (name.value && Number(price.value)) {
    const productNode = document.createElement("tr")
    productNode.classList.add('product')
    document.querySelector('tbody').appendChild(productNode)
  
    const nameNode = document.createElement("td")
    nameNode.classList.add('name')
    productNode.appendChild(nameNode)
    const nameSpan = document.createElement("span")
    nameNode.appendChild(nameSpan)
    nameSpan.innerHTML = name.value
  
    const priceNode = document.createElement("td")
    priceNode.innerHTML = "$"
    priceNode.classList.add('price')
    productNode.appendChild(priceNode)
    const priceSpan = document.createElement("span")
    priceNode.appendChild(priceSpan)
    priceSpan.innerHTML = Number(price.value).toFixed(2)
  
    const quantityNode = document.createElement("td")
    quantityNode.classList.add('quantity')
    productNode.appendChild(quantityNode)
    const quantityInput = document.createElement("input")
    quantityInput.type = "number"
    quantityInput.value = 0
    quantityInput.min = 0
    quantityInput.placeholder = "Quantity"
    quantityNode.appendChild(quantityInput)
  
    const subtotalNode = document.createElement("td")
    subtotalNode.innerHTML = "$"
    subtotalNode.classList.add('subtotal')
    productNode.appendChild(subtotalNode)
    const subtotalSpan = document.createElement("span")
    subtotalNode.appendChild(subtotalSpan)
    subtotalSpan.innerHTML = 0
  
    const actionNode = document.createElement("td")
    subtotalNode.classList.add('action')
    productNode.appendChild(actionNode)
    const removeBtn = document.createElement("button")
    removeBtn.classList.add("btn", "btn-remove")
    removeBtn.innerHTML = "Remove"
    actionNode.appendChild(removeBtn)
  
    removeBtn.addEventListener('click', removeProduct)
  
    name.value = ""
    price.value = 0
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = Array.from(document.querySelectorAll(".btn-remove"))

  removeBtns.forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  document.getElementById('create').addEventListener('click', createProduct)
});
