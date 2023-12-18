function selectThreeRandomStrings(strings: string[]): string[] {
    if (strings.length < 3) {
        throw new Error("The array is too short. It needs at least 3 items.");
    }

    // Shuffling the array and slicing the first three elements
    const shuffled = strings.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

// Example usage
const exampleStrings = ["apple", "banana", "cherry", "date", "fig", "grape", "hazelnut"];
const selectedStrings = selectThreeRandomStrings(exampleStrings);
console.log(selectedStrings);
