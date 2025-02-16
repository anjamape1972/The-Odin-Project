let number = Number (prompt ("Escriba el número para saber cuántos primos hay desde el 0:")); 

function esPrimo (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt (num); i++){
        if (num % i === 0) return false;
    }
    return true;
}

function numPrimos (hastaNumber) {
    let primos = [];
    for (let i = 2; i <= hastaNumber; i++) {
        if (esPrimo (i)) {
            primos.push (i);
        }
    }
    return primos;
}

console.log (numPrimos (number))