controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    princess.stopDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    princess.throwDart()
})
function starLevel () {
    scene.setBackgroundColor(randint(1, 10))
    count = 0
    princess.controlWithArrowKeys()
    princess = darts.create(img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . . f b b b b f b f e e e 3 f . 
        . . f b b b b e 1 f 4 4 e f . . 
        . f f b b b b f 4 4 4 4 f . . . 
        . f b b b b f f f e e e f . . . 
        . . f b b f 4 4 e d d d f . . . 
        . . . f f e 4 4 e d d d f . . . 
        . . . . f b e e b d b d b f . . 
        . . . . f f d 1 d 1 d 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `, SpriteKind.Player)
}
sprites.onCreated(SpriteKind.Player, function (sprite) {
    count += 1
    info.changeScoreBy(1)
    princess.setTrace()
    castle = sprites.create(img`
        ................................................
        ................................................
        .......................bb.......................
        .....................bcbbcb........1............
        ..........1..........bcbbcb........11...........
        .........11.........cbccbcbc.......111..........
        ........111........bccccbcccc......1111.........
        .......1111.......bbcbccbcbcc......11111........
        ......11111......cbbcbccbcbccb.....e............
        ..........e......ccccbccbcbcccc....e............
        ..........e....cccbbcbcbbcbcbbcc...e............
        ..........e...cbbcbbcccbbcccbbcbb..e............
        ..........e...cbbcbbcbcbbcbcbbcbbc.e............
        ..........e..ccbbcbbcbcbbcbcbbcbbcbe............
        ..........eccbcbbcbbcbcbbcbcbbcbbcbe............
        ..........eccbcbbccccbcbbcbccccbbcbe............
        ..........eccbccccbbcccbbcccbbccccbbc...........
        ..........bccccbbcbbcbcbbcbcbbcbbcccc...........
        ..........bcbbcbbcbbcbcbbcbcbbcbbcbbcb..........
        .........cccbbcbbcbbcbcbbcbcbbcbbcbbccc.........
        .........bbcbbcbbcbbcccbbccccbcbbcbbcbbc........
        .......ccbbcbbcbbcccccbbbbcccccbbcbbcbbc........
        .......ccbbcbbcccccbbbbbbbbbbcccccbbcbbcb.......
        ......bbcbbcccccbbbbbccccccbbbbbcccccbbcbb......
        .....bbbcccccbbbbbccbddddddbccbbbbbcccccbbc.....
        .....bbbccbbbbbccbddddddddddddbccbbbbbccbbc.....
        .....ccbbbbcccbddddddddddddddddddbcccbbbbcc.....
        .....bbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbb.....
        .....cccbbbbbbbcbddddddddddddddbcbbbbbbbccc.....
        .....ddddddddbcddddddddddddddddddcbdddddddd.....
        .....ddddddddcbd1111111111111111dbcdddddddd.....
        .....cccccccccd1dddddddddddddddd1dccccccccc.....
        .....ddddddddc11dccccccccccccccd11cdddddddd.....
        .....aaaaaafdc1dc3b33b33b33b33bcd1cdfaaaaaa.....
        .....fffffffdcddc3b33b33b33b33bcd1cdfffffff.....
        .....ddddddfdcddc3b3effffffe33bcddcdfdddddd.....
        .....ffdffdfdcddc3bffffffffff3bcddcdfdffdff.....
        .....ccdccdfdcddc3effffffffffebcddcdfdccdcc.....
        .....ddddddfdcddc3eeeeeeeeeeeebcddcdfdddddd.....
        .....ffdffdfdcddc3b33b33b33b33bcddcdfdffdff.....
        .....ccdccdfdcddc3b33b33b33b33bcddcdfdccdcc.....
        .....bbbbbbbdcddc3b33b33b33fccccddcdbbbbbbb.....
        .....ddddddddcddc3b33b33b33ffffcddcdddddddd.....
        .....bbbdbbbdcddc3b33b33b33f33fcddcdbbbdbbb.....
        .....bbbdbbbdcddc3b33b33b33bffccddcdbbbdbbb.....
        ................................................
        ................................................
        ................................................
        `, SpriteKind.Player)
    castle.setPosition(143, 22)
    count = 0
    if (true) {
        starLevel()
    } else {
    	
    }
})
let castle: Sprite = null
let count = 0
let princess: Dart = null
game.splash("Save The Princess!")
let Level = 1
let mySprite = sprites.create(img`
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . . f b b b b f b f e e e 3 f . 
    . . f b b b b e 1 f 4 4 e f . . 
    . f f b b b b f 4 4 4 4 f . . . 
    . f b b b b f f f e e e f . . . 
    . . f b b f 4 4 e d d d f . . . 
    . . . f f e 4 4 e d d d f . . . 
    . . . . f b e e b d b d b f . . 
    . . . . f f d 1 d 1 d 1 f f . . 
    . . . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
starLevel()
