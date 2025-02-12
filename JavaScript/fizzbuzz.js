let numero = parseInt (prompt ("Indique el número hasta el que llegar: "))
for (let i = 1; i <= numero; i++) {
    if (i % 3=== 0 && i % 5 === 0) {
        console.log ("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log ("Fizz")
    } else if (i % 5 === 0) {
        console.log ("Buzz")
    } else {
        console.log (i)
    }
}