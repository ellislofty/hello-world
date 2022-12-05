controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`myImage`, mySprite, 0, -100)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy(effects.fire, 200)
    info.changeScoreBy(1)
})
let projectile2: Sprite = null
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.setDialogTextColor(9)
game.setDialogFrame(img`
    ..bb9bb99bb99bb99bbbbb..
    .bddb9ddb9ddb9ddb9bbddb.
    9ddddb9ddb9ddb9ddb9dddd9
    9ddddbb99bb99bb99bbdddd9
    9bddbffffffffffffffbddb9
    bb9bffffffffffffffffbb9b
    b9bbffffffffffffffffb9db
    9bd9ffffffffffffffff9dd9
    9dd9ffffffffffffffff9db9
    bd9bffffffffffffffffbb9b
    b9bbffffffffffffffffb9db
    9bd9ffffffffffffffff9dd9
    9dd9ffffffffffffffff9db9
    bd9bffffffffffffffffbb9b
    b9bbffffffffffffffffb9db
    9bd9ffffffffffffffff9dd9
    9dd9ffffffffffffffff9db9
    bd9bffffffffffffffffbb9b
    b9bbffffffffffffffffb9bb
    9bddbffffffffffffffbddb9
    9ddddbb99bb99bb99bbdddd9
    9dddd9bdd9bdd9bdd9bdddd9
    .9ddbb9bdd9bdd9bdd9bdd9.
    ..999bb99bb99bb99bb999..
    `)
game.splash("Space Hero")
game.showLongText("Destroy the UFOs and save The Universe", DialogLayout.Bottom)
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 7 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 7 . . . . . . . 
    . . . . . . 8 8 5 6 . . . . . . 
    . . . . . . 8 7 5 6 . . . . . . 
    . . . . . c c c 6 6 6 . . . . . 
    . . . . 8 8 7 7 7 5 6 6 . . . . 
    . . 8 f f f c c 6 6 f f 6 6 . . 
    . 8 8 8 8 6 6 7 7 7 7 5 7 6 6 . 
    8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
    8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
    `, SpriteKind.Player)
mySprite.setPosition(70, 120)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f a a a a a f . . . . . . 
        . . f a a a a a a a f . . . . . 
        . 9 a a a a a a a a a 9 . . . . 
        . . 9 7 a 7 a 7 a 7 9 . . . . . 
        . . . 9 9 9 9 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . 2 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 0, 100)
    mySprite2.setPosition(randint(0, scene.screenWidth()), 10)
})
