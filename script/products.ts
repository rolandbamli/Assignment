type Product = {
    name: string;
    price: number;
};

function addProductInputPair(): void {
    const container = document.getElementById('productInputs');
    if (!container) {
        console.error('Product input container not found');
        return;
    }

    const index = container.children.length + 1;
    const inputGroupDiv = document.createElement('div');
    inputGroupDiv.className = 'input-group mb-3';

    const productLabelSpan = document.createElement('span');
    productLabelSpan.className = 'input-group-text';
    productLabelSpan.textContent = 'Product';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'form-control';
    nameInput.placeholder = `Product Name ${index}`;
    nameInput.setAttribute('aria-label', `Product Name ${index}`);

    const priceLabelSpan = document.createElement('span');
    priceLabelSpan.className = 'input-group-text';
    priceLabelSpan.textContent = '$';

    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.className = 'form-control';
    priceInput.placeholder = `Price ${index}`;
    priceInput.setAttribute('aria-label', `Price ${index}`);

    inputGroupDiv.appendChild(productLabelSpan);
    inputGroupDiv.appendChild(nameInput);
    inputGroupDiv.appendChild(priceLabelSpan);
    inputGroupDiv.appendChild(priceInput);

    container.appendChild(inputGroupDiv);
}


function analyzePrices(): void {
    try {
        const inputGroups = document.querySelectorAll('#productInputs .input-group');
        let products: Product[] = [];

        inputGroups.forEach(group => {
            const nameInput = group.children[1] as HTMLInputElement; // Assuming name input is the second child
            const priceInput = group.children[3] as HTMLInputElement; // Assuming price input is the fourth child
            
            const name = nameInput.value.trim();
            const price = parseFloat(priceInput.value);

            if (!name) {
                throw new Error('One or more product names are missing.');
            }
            if (isNaN(price)) {
                throw new Error(`Invalid price for product "${name}". Please enter a valid number.`);
            }

            products.push({ name, price });
        });

        if (products.length < 1) {
            throw new Error('Please enter at least one valid product with a price.');
        }

        const cheapestProduct = products.reduce((prev, curr) => (prev.price < curr.price ? prev : curr)).name;
        const meanPrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
        const sdPrice = standardDeviation(products.map(p => p.price));

        const resultDiv = document.getElementById('productAnalysisResult');
        if (resultDiv) {
            resultDiv.innerHTML = `
                <p>Cheapest Product: ${cheapestProduct}</p>
                <p>Mean Price: ${meanPrice.toFixed(2)}</p>
                <p>Standard Deviation of Prices: ${sdPrice.toFixed(2)}</p>
            `;
        }
    } catch (error) {
        console.error('Error analyzing prices:', error);
        const resultDiv = document.getElementById('productAnalysisResult');
        if (resultDiv) {
            resultDiv.textContent = error.message;
        }
    }
}

function standardDeviation(values: number[]): number {
    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    const squareDiffs = values.map(value => {
        const diff = value - mean;
        return diff * diff;
    });
    const avgSquareDiff = squareDiffs.reduce((sum, diff) => sum + diff, 0) / values.length;
    return Math.sqrt(avgSquareDiff);
}
