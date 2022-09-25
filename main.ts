control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    NINGNONG()
})
function NINGNONG () {
    serial.writeLine("Time between each ring: " + (control.millis() - time_action) / 1000 + "s")
    time_action = control.millis()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    load_the_strippy()
}
function load_the_strippy () {
    for (let index = 0; index <= strip.length(); index++) {
        r = Math.round(randint(0, 4))
        if (r == 0) {
            strip.setPixelColor(index, neopixel.rgb(255, 50, 0))
        } else if (r == 1) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        } else if (r == 2) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Indigo))
        } else if (r == 3) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        } else {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Black))
        }
    }
}
input.onSound(DetectedSound.Loud, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN
    )
})
input.onButtonPressed(Button.B, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN
    )
})
function commit_setup_with_this_amount_of_weds (length: number) {
    music.setBuiltInSpeakerEnabled(true)
    strip = neopixel.create(DigitalPin.P0, length, NeoPixelMode.RGB)
    load_the_strippy()
}
function SHIFF () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
}
let r = 0
let strip: neopixel.Strip = null
let time_action = 0
input.setSoundThreshold(SoundThreshold.Loud, 255)
commit_setup_with_this_amount_of_weds(500)
basic.forever(function () {
    SHIFF()
})
