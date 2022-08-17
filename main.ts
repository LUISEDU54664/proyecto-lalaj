let distancia = 0
let suma = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    let distancia_cm = ""
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    lcd1602.set_backlight(lcd1602.on_off.on)
    if (distancia_cm == "7") {
        let count = ""
        suma += 50
        basic.showNumber(suma)
        lcd1602.putString(
        count,
        8,
        0
        )
    }
})
