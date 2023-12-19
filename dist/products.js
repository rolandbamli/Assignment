function addProductInputPair() {
    var container = document.getElementById('productInputs');
    if (!container) {
        console.error('Product input container not found');
        return;
    }
    var index = container.children.length + 1;
    var inputGroupDiv = document.createElement('div');
    inputGroupDiv.className = 'input-group mb-3';
    var productLabelSpan = document.createElement('span');
    productLabelSpan.className = 'input-group-text';
    productLabelSpan.textContent = 'Product';
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'form-control';
    nameInput.placeholder = "Product Name ".concat(index);
    nameInput.setAttribute('aria-label', "Product Name ".concat(index));
    var priceLabelSpan = document.createElement('span');
    priceLabelSpan.className = 'input-group-text';
    priceLabelSpan.textContent = '$';
    var priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.className = 'form-control';
    priceInput.placeholder = "Price ".concat(index);
    priceInput.setAttribute('aria-label', "Price ".concat(index));
    inputGroupDiv.appendChild(productLabelSpan);
    inputGroupDiv.appendChild(nameInput);
    inputGroupDiv.appendChild(priceLabelSpan);
    inputGroupDiv.appendChild(priceInput);
    container.appendChild(inputGroupDiv);
}
function analyzePrices() {
    try {
        var inputGroups = document.querySelectorAll('#productInputs .input-group');
        var products_1 = [];
        inputGroups.forEach(function (group) {
            var nameInput = group.children[1]; // Assuming name input is the second child
            var priceInput = group.children[3]; // Assuming price input is the fourth child
            var name = nameInput.value.trim();
            var price = parseFloat(priceInput.value);
            if (!name) {
                throw new Error('One or more product names are missing.');
            }
            if (isNaN(price)) {
                throw new Error("Invalid price for product \"".concat(name, "\". Please enter a valid number."));
            }
            products_1.push({ name: name, price: price });
        });
        if (products_1.length < 1) {
            throw new Error('Please enter at least one valid product with a price.');
        }
        var cheapestProduct = products_1.reduce(function (prev, curr) { return (prev.price < curr.price ? prev : curr); }).name;
        var meanPrice = products_1.reduce(function (sum, product) { return sum + product.price; }, 0) / products_1.length;
        var sdPrice = standardDeviation(products_1.map(function (p) { return p.price; }));
        var resultDiv = document.getElementById('productAnalysisResult');
        if (resultDiv) {
            resultDiv.textContent = "Cheapest Product: ".concat(cheapestProduct, ", Mean Price: ").concat(meanPrice.toFixed(2), ", Standard Deviation of Prices: ").concat(sdPrice.toFixed(2));
        }
    }
    catch (error) {
        console.error('Error analyzing prices:', error);
        var resultDiv = document.getElementById('productAnalysisResult');
        if (resultDiv) {
            resultDiv.textContent = error.message;
        }
    }
}
function standardDeviation(values) {
    var mean = values.reduce(function (sum, value) { return sum + value; }, 0) / values.length;
    var squareDiffs = values.map(function (value) {
        var diff = value - mean;
        return diff * diff;
    });
    var avgSquareDiff = squareDiffs.reduce(function (sum, diff) { return sum + diff; }, 0) / values.length;
    return Math.sqrt(avgSquareDiff);
}
