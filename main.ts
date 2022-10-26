input.onButtonPressed(Button.A, function () {
    if (distancia == 0 && distancia >= 9) {
        total += total + 50
        basic.showNumber(50)
    }
    if (distancia == 9 && distancia >= 12) {
        total += total + 100
        basic.showNumber(100)
    }
    if (distancia == 12 && distancia >= 15) {
        total += total + 200
        basic.showNumber(200)
    }
    if (distancia == 15 && distancia >= 19) {
        total += total + 500
        basic.showNumber(500)
    }
    if (distancia == 19 && distancia >= 22) {
        total += total + 1000
        basic.showNumber(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
let total = 0
let distancia = 0
basic.showString("HELLO")
distancia = sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
)
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    basic.pause(1000)
    if (distancia < 20) {
        basic.showString("" + (distancia))
    }
})
loops.everyInterval(100, function () {
    basic.showNumber(total)
})
