input.onButtonPressed(Button.A, function () {
    if (distancia == 0 && distancia < 9) {
        total += total + 50
    }
    if (distancia == 9 && distancia < 12) {
        total += total + 100
    }
    if (distancia == 12 && distancia < 15) {
        total += total + 200
    }
    if (distancia == 15 && distancia < 19) {
        total += total + 500
    }
    if (distancia == 19 && distancia < 22) {
        total += total + 1000
    }
})
input.onButtonPressed(Button.AB, function () {
    total = 0
    if (pins.analogReadPin(AnalogPin.P3) == 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        lcd1602.setAddress(
        lcd1602.I2C_ADDR.addr1
        )
        lcd1602.set_LCD_Show(lcd1602.visibled.visible)
        lcd1602.set_backlight(lcd1602.on_off.on)
        lcd1602.putNumber(
        total,
        1,
        0
        )
    }
})
input.onButtonPressed(Button.B, function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
let total = 0
let distancia = 0
basic.showString("HELLO")
music.playMelody("C C E A G F B C5 ", 112)
