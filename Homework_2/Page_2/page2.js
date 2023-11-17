function checkPalindrome() {
    var inputElement = document.getElementById('inputNumbers');
    var resultElement = document.getElementById('result');

    var userInput = inputElement.value;

    // Reverse the string
    var reversedNumbers = userInput.split('').reverse().join('');

    // Check if it is a palindrome
    var isPalindrome = userInput === reversedNumbers;

    // Display the result
    if (isPalindrome) {
        resultElement.innerText = 'Palindrome: Yes';
    } else {
        resultElement.innerText = 'Palindrome: No';
    }
}
