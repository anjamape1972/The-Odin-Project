let user = prompt ("Introduzca su usuario: ")
if (user === "Admin") {
    let password = prompt ("Introduzca la contraseña: ")
    if (password === "TheMaster") {
        alert ("Welcome!")
        } else if (password === "") {
            alert ("Canceled")
        } else {
            alert ("Wrong password")
        }
} else {
    alert ("I don´t know you")
}
