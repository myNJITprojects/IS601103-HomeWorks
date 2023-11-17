function calculateTotal() {
    var subtotalElement = document.getElementById('subtotal');
    var tipPercentageElement = document.getElementById('tipPercentage');
    var totalAmountElement = document.getElementById('totalAmount');

    var subtotal = parseFloat(subtotalElement.value);
    var tipPercentage = parseFloat(tipPercentageElement.value);

    // Check if the input is valid
    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
        totalAmountElement.innerText = 'Please enter valid numbers.';
        return;
    }

    // Calculate total amount with tip
    var tipAmount = (subtotal * tipPercentage) / 100;
    var totalAmount = subtotal + tipAmount;

    // Display the result
    totalAmountElement.innerText = 'Total Amount (including ' + tipPercentage + '% tip): $' + totalAmount.toFixed(2);
}
