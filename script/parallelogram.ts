function calculateAreaWithHeightAndSide() {
    const sideInput = document.getElementById('pInput1') as HTMLInputElement;
    const heightInput = document.getElementById('pInput2') as HTMLInputElement;
    const resultDiv = document.getElementById('pResultDiv1') as HTMLDivElement;

    const side = parseFloat(sideInput.value);
    const height = parseFloat(heightInput.value);

    if (!isNaN(side) && !isNaN(height)) {
        const area = side * height;
        resultDiv.innerHTML = `Area with height and side: ${area}`;
    } else {
        resultDiv.innerHTML = "Invalid input: please enter valid numbers for height and side.";
    }
}


function calculateAreaWithSidesAndAngle() {
    const sideAInput = document.getElementById('pInput3') as HTMLInputElement;
    const sideBInput = document.getElementById('pInput4') as HTMLInputElement;
    const angleInput = document.getElementById('pInput5') as HTMLInputElement;
    const resultDiv = document.getElementById('pResultDiv2') as HTMLDivElement;

    const sideA = parseFloat(sideAInput.value);
    const sideB = parseFloat(sideBInput.value);
    const angleInDegrees = parseFloat(angleInput.value);

    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(angleInDegrees)) {
        const angleInRadians = angleInDegrees * (Math.PI / 180);
        const area = sideA * sideB * Math.sin(angleInRadians);
        resultDiv.innerHTML = `Area with sides and angle: ${area}`;
    } else {
        resultDiv.innerHTML = "Invalid input: please enter valid numbers for sides and angle.";
    }
}