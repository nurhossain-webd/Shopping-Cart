document.getElementById('phone-add').addEventListener('click', function () {
    changequantity('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    changequantity('phone', 1219, false);
})
document.getElementById('case-add').addEventListener('click', function () {
    changequantity('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    changequantity('case', 59, false);
})


function changequantity(product, price, add) {
    const productInput = document.getElementById(product + '-quantity');
    let productQuantity = parseInt(productInput.value);
    if (add == true) {
        productInput.value = productQuantity + 1;
    }
    if (add == false && productInput.value > 0) {
        productInput.value = productQuantity - 1;
    }
    productQuantity = productInput.value;
    const productPrice = productQuantity * price;
    const productPricetext = document.getElementById(product + '-price');
    productPricetext.innerText = productPrice;

    // subtotal calculation

    const phonePrice = parseFloat(document.getElementById('phone-price').innerText);
    const casePrice = parseFloat(document.getElementById('case-price').innerText);

    const subPrice = phonePrice + casePrice;

    document.getElementById('subtotal').innerText = subPrice;
    const taxamount = subPrice / 100;

    document.getElementById('tax').innerText = taxamount;
    document.getElementById('total').innerText = taxamount + subPrice;






} 