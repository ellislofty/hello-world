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
