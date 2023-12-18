function selectThreeRandomStrings(strings) {
    if (strings.length < 3) {
        throw new Error("The array is too short. It needs at least 3 items.");
    }
    // Shuffling the array and slicing the first three elements
    var shuffled = strings.sort(function () { return 0.5 - Math.random(); });
    return shuffled.slice(0, 3);
}
// Example usage
var exampleStrings = ["apple", "banana", "cherry", "date", "fig", "grape", "hazelnut"];
var selectedStrings = selectThreeRandomStrings(exampleStrings);
console.log(selectedStrings);
