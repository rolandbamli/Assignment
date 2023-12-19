function addStringInput() {
    var container = document.getElementById('stringInputs');
    if (!container) {
        console.error('String input container not found');
        return;
    }
    // Calculate the index for the new input based on existing ones
    var newIndex = container.querySelectorAll('input').length + 1;
    // Create a new input element
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'form-control mb-2';
    newInput.placeholder = "Enter string ".concat(newIndex);
    // Append the new input to the container
    container.appendChild(newInput);
}
function generateRandomStrings() {
    try {
        var inputs = document.querySelectorAll('#stringInputs input');
        var strings = [];
        // Convert NodeList to array
        for (var i = 0; i < inputs.length; i++) {
            var value = inputs[i].value.trim();
            if (value) {
                strings.push(value);
            }
        }
        if (strings.length < 5) {
            alert('Please enter at least 5 strings.');
            return;
        }
        // Shuffle the array of strings
        shuffleArray(strings);
        // Select the first three elements
        var randomStrings = strings.slice(0, 3);
        var resultDiv = document.getElementById('randomStringsResult');
        if (resultDiv) {
            resultDiv.textContent = "Random Strings: ".concat(randomStrings.join(', '));
        }
    }
    catch (error) {
        console.error('Error generating random strings:', error);
        var resultDiv = document.getElementById('randomStringsResult');
        if (resultDiv) {
            resultDiv.textContent = error.message;
        }
    }
}
// Function to shuffle an array
function shuffleArray(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1]; // Swap elements
    }
}
