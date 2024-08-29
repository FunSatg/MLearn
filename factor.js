function findFactors() {
    const number = document.getElementById("number").value;
    let factors = [];
    let resultDiv = document.getElementById("result");

    if (number === "" || isNaN(number)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }

    resultDiv.innerHTML = `Factors of ${number} are: ${factors.join(", ")}`;
}
