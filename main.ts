input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            . . # # .
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            . . # # #
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            # . # # #
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            # . # . .
            # . # # #
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            # . # . .
            # . # . .
            # . # # #
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            # # # . .
            # . # . .
            # . # # #
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            # # # # .
            # . # . .
            # . # # #
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            # # # # #
            # . # . .
            # . # # #
            `)
        basic.pause(2000)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # # #
            # . # . .
            # . # # #
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # # #
            # . # . .
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # # #
            # . # . #
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # . # . #
            # # # # #
            # . # . #
            # # # # #
            `)
        basic.showLeds(`
            # # # . #
            # . # . #
            # # # # #
            # . # . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            # . # . #
            # # # # #
            `)
    }
})
