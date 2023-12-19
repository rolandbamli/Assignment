function calculateAreaWithHeightAndSide() {
    var sideInput = document.getElementById('pInput1');
    var heightInput = document.getElementById('pInput2');
    var resultDiv = document.getElementById('pResultDiv1');
    var side = parseFloat(sideInput.value);
    var height = parseFloat(heightInput.value);
    if (!isNaN(side) && !isNaN(height)) {
        var area = side * height;
        resultDiv.innerHTML = "Area with height and side: ".concat(area);
    }
    else {
        resultDiv.innerHTML = "Invalid input: please enter valid numbers for height and side.";
    }
}
function calculateAreaWithSidesAndAngle() {
    var sideAInput = document.getElementById('pInput3');
    var sideBInput = document.getElementById('pInput4');
    var angleInput = document.getElementById('pInput5');
    var resultDiv = document.getElementById('pResultDiv2');
    var sideA = parseFloat(sideAInput.value);
    var sideB = parseFloat(sideBInput.value);
    var angleInDegrees = parseFloat(angleInput.value);
    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(angleInDegrees)) {
        var angleInRadians = angleInDegrees * (Math.PI / 180);
        var area = sideA * sideB * Math.sin(angleInRadians);
        resultDiv.innerHTML = "Area with sides and angle: ".concat(area);
    }
    else {
        resultDiv.innerHTML = "Invalid input: please enter valid numbers for sides and angle.";
    }
}
