input.onButtonPressed(Button.A, function () {
    if (distancia == 0 && distancia < 7) {
        total += total + 50
    }
    if (distancia == 12 && distancia < 14) {
        total += total + 100
    }
    if (distancia == 14 && distancia < 21) {
        total += total + 200
    }
    if (distancia == 21 && distancia < 29) {
        total += total + 500
    }
    if (distancia == 29 && distancia < 32) {
        total += total + 1000
    }
})
input.onButtonPressed(Button.B, function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
let distancia = 0
let total = 0
total = 0
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
