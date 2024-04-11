function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    var conversionRates = {
        usd: { eur: 0.85, gbp: 0.74 ,ind: 80.25},
        eur: { usd: 1.18, gbp: 0.87 ,ind: 50.78},
        gbp: { usd: 1.36, ind: 1.15 ,eur: 56.58},
        ind: { usd: 1.36, eur: 80.86 ,gbp: 45.58}
    };

    var convertedAmount;
    if (from === to) {
        convertedAmount = amount; 
    } else {
        convertedAmount = amount * conversionRates[from][to];
    }

    document.getElementById("result").innerHTML = amount + " " + from.toUpperCase() + " = " + convertedAmount.toFixed(2) + " " + to.toUpperCase();
}
let url = fetch("https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest");
console.log(url)
