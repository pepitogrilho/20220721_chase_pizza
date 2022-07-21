sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(10)
})
let pizza: Sprite = null
scene.setBackgroundColor(7)
let leo = sprites.create(assets.image`Leo`, SpriteKind.Player)
controller.moveSprite(leo)
pizza = sprites.create(assets.image`pizza`, SpriteKind.Food)
