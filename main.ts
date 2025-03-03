function playAttackMissSound () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    300,
    100,
    200,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (player2Direction == 2) {
        animation.runMovementAnimation(
        player2,
        animation.animationPresets(animation.bobbingRight),
        100,
        false
        )
    } else if (player2Direction == 3) {
        animation.runMovementAnimation(
        player2,
        animation.animationPresets(animation.bobbingLeft),
        100,
        false
        )
    } else {
        animation.runMovementAnimation(
        player2,
        animation.animationPresets(animation.bobbing),
        100,
        false
        )
    }
    playBlockSound()
})
function player1Attack () {
    if (player1.overlapsWith(player2)) {
        info.player2.changeLifeBy(-1)
        playAttackHitSound()
    } else {
        playAttackMissSound()
    }
    pause(500)
}
function playBlockSound () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    180,
    250,
    200,
    50,
    100,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
    player1.setImage(assets.image`player1Left`)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player1Direction = 0
    animation.runImageAnimation(
    player1,
    assets.animation`player1WalkShieldBack`,
    100,
    controller.player1.isPressed(ControllerButton.Up)
    )
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
    player1.setImage(assets.image`player1Back`)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (player2Direction == 2) {
        animation.runImageAnimation(
        player2,
        assets.animation`player2SideAttackLeft`,
        100,
        false
        )
    } else if (player2Direction == 3) {
        animation.runImageAnimation(
        player2,
        assets.animation`player2SideAttackRight`,
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        player2,
        assets.animation`player2FrontAttack`,
        100,
        false
        )
    }
    player2Attack()
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player2Direction = 1
    animation.runImageAnimation(
    player2,
    assets.animation`player2WalkShieldFront`,
    100,
    controller.player2.isPressed(ControllerButton.Down)
    )
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player2)
    player2.setImage(assets.image`player2Left`)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player2)
    player2.setImage(assets.image`player2Front`)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player2)
    player2.setImage(assets.image`player2Back`)
})
function player2Attack () {
    if (player2.overlapsWith(player1)) {
        info.player1.changeLifeBy(-1)
        playAttackHitSound()
    } else {
        playAttackMissSound()
    }
    pause(500)
}
function playAttackHitSound () {
    music.play(music.createSoundEffect(
    WaveShape.Noise,
    440,
    220,
    255,
    255,
    200,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player2Direction = 0
    animation.runImageAnimation(
    player2,
    assets.animation`player2WalkShieldBack`,
    100,
    controller.player2.isPressed(ControllerButton.Up)
    )
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player2Direction = 3
    animation.runImageAnimation(
    player2,
    assets.animation`player2WalkShieldRight`,
    100,
    controller.player2.isPressed(ControllerButton.Right)
    )
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
    player1.setImage(assets.image`player1Front`)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player2Direction = 2
    animation.runImageAnimation(
    player2,
    assets.animation`player2WalkShieldLeft`,
    100,
    controller.player2.isPressed(ControllerButton.Left)
    )
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player1Direction = 3
    animation.runImageAnimation(
    player1,
    assets.animation`player1WalkShieldRight`,
    100,
    controller.player1.isPressed(ControllerButton.Right)
    )
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (player1Direction == 2) {
        animation.runImageAnimation(
        player1,
        assets.animation`player1SideAttackLeft`,
        100,
        false
        )
    } else if (player1Direction == 3) {
        animation.runImageAnimation(
        player1,
        assets.animation`player1SideAttackRight`,
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        player1,
        assets.animation`player1FrontAttack`,
        100,
        false
        )
    }
    player1Attack()
})
info.player1.onLifeZero(function () {
    gameOver = 1
    game.setGameOverMessage(true, "PLAYER 2 WINS")
    game.gameOver(true)
})
info.player2.onLifeZero(function () {
    gameOver = 1
    game.setGameOverMessage(true, "PLAYER 1 WINS")
    game.gameOver(true)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player2)
    player2.setImage(assets.image`player2Right`)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (player1Direction == 2) {
        animation.runMovementAnimation(
        player1,
        animation.animationPresets(animation.bobbingRight),
        100,
        false
        )
    } else if (player1Direction == 3) {
        animation.runMovementAnimation(
        player1,
        animation.animationPresets(animation.bobbingLeft),
        100,
        false
        )
    } else {
        animation.runMovementAnimation(
        player1,
        animation.animationPresets(animation.bobbing),
        100,
        false
        )
    }
    playBlockSound()
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
    player1.setImage(assets.image`player1Right`)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player1Direction = 2
    animation.runImageAnimation(
    player1,
    assets.animation`player1WalkShieldLeft`,
    100,
    controller.player1.isPressed(ControllerButton.Left)
    )
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player1Direction = 1
    animation.runImageAnimation(
    player1,
    assets.animation`player1WalkShieldFront`,
    100,
    controller.player1.isPressed(ControllerButton.Down)
    )
})
let gameOver = 0
let player1Direction = 0
let player2Direction = 0
let player2: Sprite = null
let player1: Sprite = null
scene.setBackgroundImage(assets.image`cityscape2`)
player1 = sprites.create(assets.image`player1Right`, SpriteKind.Player)
player2 = sprites.create(assets.image`player2Left`, SpriteKind.Player)
player1.setPosition(50, 60)
player2.setPosition(120, 60)
controller.player1.moveSprite(player1)
controller.player2.moveSprite(player2)
player1.setStayInScreen(true)
player2.setStayInScreen(true)
info.player1.setLife(10)
info.player2.setLife(10)
player2Direction = 3
player2Direction = 2
game.splash("PRESS ANY BUTTON TO PLAY")
