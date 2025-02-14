/*
Escribe un bucle que solicite un número mayor que 100. Si el visitante ingresa otro número, pídele
que lo ingrese nuevamente.
El bucle debe solicitar un número hasta que el visitante ingrese un número mayor 100 o cancele la
entrada/ingrese una línea vacía.
Aquí podemos suponer que el visitante solo ingresa números. No es necesario implementar un manejo
especial para una entrada no numérica en esta tarea.
*/

let userNumber;
while (true) {

    userNumber = prompt ("Escriba un número mayor que 100: ")

    if (userNumber === null || userNumber === "") {
        console.log ("Ejecución interrumpida.");
        break;
    }

    userNumber = Number (userNumber);

    if (userNumber > 100) {
        console.log ("El número es correcto.");
        break;
    }

    else {
        prompt (`El número indicado no cumple la condición de ser mayor que 100. Introduzca
            un nuevo número: `);
    }
}