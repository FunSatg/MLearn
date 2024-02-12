function calculatePower() {
    var base = parseFloat(document.getElementById('base').value);
    var exponent = parseFloat(document.getElementById('exponent').value);
    var result = Math.pow(base, exponent);
    document.getElementById('result').innerHTML = `Result: ${result}`;
}
