let PixelArray = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
basic.forever(function () {
    while (true) {
        PixelArray.setPixelColor(0, neopixel.rgb(0, 192, 0))
        PixelArray.show()
        control.waitMicros(100)
    }
})
basic.forever(function () {
	
})
