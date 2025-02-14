let userNumber;

while (true) {
    userNumber = prompt("Escriba un número mayor que 100: ");

    if (userNumber === null || userNumber === "") {
        prompt("Ejecución interrumpida.");
        break;
    }

    userNumber = Number(userNumber);

    if (userNumber > 100) {
        alert ("El número es correcto.");
        break;
    } else {
        prompt("El número indicado no cumple la condición. Intente de nuevo.");
    }
}