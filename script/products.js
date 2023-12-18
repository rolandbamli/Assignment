(function () {
    var products = [
        { name: "Product1", price: 1500 },
        { name: "Product2", price: 2000 },
        // Additional products...
    ];
    function calculateStats() {
        var cheapestProductElement = document.getElementById("cheapest");
        var averagePriceElement = document.getElementById("averagePrice");
        var priceStandardDeviationElement = document.getElementById("priceStandardDeviation");
        if (!cheapestProductElement || !averagePriceElement || !priceStandardDeviationElement) {
            console.error("One or more DOM elements were not found.");
            return;
        }
        var cheapest = products.reduce(function (min, product) { return product.price < min.price ? product : min; }, products[0]);
        var averagePrice = products.reduce(function (sum, product) { return sum + product.price; }, 0) / products.length;
        var standardDeviation = Math.sqrt(products.map(function (product) { return Math.pow(product.price - averagePrice, 2); }).reduce(function (sum, curr) { return sum + curr; }, 0) / products.length);
        cheapestProductElement.textContent = cheapest.name;
        averagePriceElement.textContent = averagePrice.toFixed(2);
        priceStandardDeviationElement.textContent = standardDeviation.toFixed(2);
    }
    // Run the function or expose it to be called elsewhere
    calculateStats();
})();
