def on_player2_button_b_pressed():
    player2.say_text("B", 1000, False)
controller.player2.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player2_button_b_pressed)

def on_player2_button_a_pressed():
    player2.say_text("A", 1000, False)
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def on_player1_button_a_pressed():
    player1.say_text("A", 500, True)
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_player1_button_b_pressed():
    player1.say_text("B", 1000, True)
    player1.say_text("")
controller.player1.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player1_button_b_pressed)

player2: Sprite = None
player1: Sprite = None
scene.set_background_image(assets.image("""
    playerBackground
"""))
player1 = sprites.create(assets.image("""
    player1
"""), SpriteKind.player)
player2 = sprites.create(assets.image("""
    player2
"""), SpriteKind.player)
controller.player1.move_sprite(player1)
controller.player2.move_sprite(player2)
player1.set_position(50, 60)
player2.set_position(120, 60)