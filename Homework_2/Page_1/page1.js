function reverseString() {
    var inputElement = document.getElementById('inputString');
    var resultElement = document.getElementById('result');

    var inputString = inputElement.value;
    var reversedString = inputString.split('').reverse().join('');

    resultElement.innerText = 'Reversed String: ' + reversedString;
}
