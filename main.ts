controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`myImage`, mySprite, 0, -100)
})
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
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
