function ゲーム実行 () {
    for (let index = 0; index < 10; index++) {
        basic.pause(2000)
        表示中のモグラ = randint(0, 1)
        basic.showNumber(表示中のモグラ)
        basic.pause(500)
        basic.clearScreen()
        表示中のモグラ = -1
    }
}
function 叩けたか判定 () {
    if (叩かれたモグラ == 表示中のモグラ) {
        得点 += 1
        basic.showIcon(IconNames.Yes)
        basic.pause(300)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    katakana.showString("ｽﾀｰﾄ")
    ゲーム実行()
    得点表示()
})
function 得点表示 () {
    katakana.showString("ﾄｸﾃﾝ")
    basic.showNumber(得点)
}
let 叩かれたモグラ = 0
let 表示中のモグラ = 0
let 得点 = 0
katakana.setScrollTime(100)
得点 = 0
表示中のモグラ = -1
叩かれたモグラ = -1
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        叩かれたモグラ = 0
        叩けたか判定()
    } else if (input.pinIsPressed(TouchPin.P1)) {
        叩かれたモグラ = 1
        叩けたか判定()
    } else {
        叩かれたモグラ = 2
        叩けたか判定()
    }
})
