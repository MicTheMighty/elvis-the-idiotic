let humidity = 0
basic.forever(function () {
    humidity = 0
    basic.showNumber(tomatobit.robotbitTempHumdSensor(DigitalPin.P0, DHT11Type.Humidity))
    humidity += tomatobit.robotbitTempHumdSensor(DigitalPin.P0, DHT11Type.Humidity)
    if (humidity > 77) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        for (let index = 0; index < 4; index++) {
            music.playMelody("C C C C C C C C ", 140)
            basic.pause(500)
            basic.showString("rainy")
        }
        for (let index = 0; index < 4; index++) {
            music.playMelody("C C C C C C C C ", 140)
            basic.pause(500)
            basic.showString("rainy")
        }
    }
    basic.clearScreen()
})
