(function() {
    type Product = {
        name: string;
        price: number;
    };

    const products: Product[] = [
        { name: "Product1", price: 1500 },
        { name: "Product2", price: 2000 },
        // Additional products...
    ];

    function calculateStats(): void {
        const cheapestProductElement = document.getElementById("cheapest");
        const averagePriceElement = document.getElementById("averagePrice");
        const priceStandardDeviationElement = document.getElementById("priceStandardDeviation");

        if (!cheapestProductElement || !averagePriceElement || !priceStandardDeviationElement) {
            console.error("One or more DOM elements were not found.");
            return;
        }

        const cheapest = products.reduce((min, product) => product.price < min.price ? product : min, products[0]);
        const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
        const standardDeviation = Math.sqrt(products.map(product => Math.pow(product.price - averagePrice, 2)).reduce((sum, curr) => sum + curr, 0) / products.length);

        cheapestProductElement.textContent = cheapest.name;
        averagePriceElement.textContent = averagePrice.toFixed(2);
        priceStandardDeviationElement.textContent = standardDeviation.toFixed(2);
    }

    // Run the function or expose it to be called elsewhere
    calculateStats();
})();
