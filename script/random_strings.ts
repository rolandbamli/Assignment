function addStringInput(): void {
    const container = document.getElementById('stringInputs');
    if (!container) {
        console.error('String input container not found');
        return;
    }

    // Calculate the index for the new input based on existing ones
    const newIndex = container.querySelectorAll('input').length + 1;

    // Create a new input element
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'form-control mb-2';
    newInput.placeholder = `Enter string ${newIndex}`;

    // Append the new input to the container
    container.appendChild(newInput);
}


function generateRandomStrings(): void {
    try {
        const inputs = document.querySelectorAll('#stringInputs input');
        let strings: string[] = [];

        // Convert NodeList to array
        for (let i = 0; i < inputs.length; i++) {
            const value = (inputs[i] as HTMLInputElement).value.trim();
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
        const randomStrings = strings.slice(0, 3);

        const resultDiv = document.getElementById('randomStringsResult');
        if (resultDiv) {
            resultDiv.textContent = `Random Strings: ${randomStrings.join(', ')}`;
        }
    } catch (error) {
        console.error('Error generating random strings:', error);
        const resultDiv = document.getElementById('randomStringsResult');
        if (resultDiv) {
            resultDiv.textContent = error.message;
        }
    }
}

// Function to shuffle an array
function shuffleArray(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
