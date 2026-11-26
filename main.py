# ==========================================
# FAMILY SKI TRIP! — Level 1 & Level 2
# Microsoft MakeCode Arcade (Python)
# ==========================================

@namespace
class SpriteKind:
    Finish = SpriteKind.create()
    OtherSkier = SpriteKind.create()
    Fallen = SpriteKind.create()
    Bear = SpriteKind.create()

# --- 1. PIXEL ART ---

skier_straight = img("""
    . . . . . 5 5 . . . . .
    . . . . 3 3 3 3 . . . .
    . . . . d 8 8 d . . . .
    . . . . . d d . . . . .
    . . . 2 2 2 2 2 2 . . .
    . . 2 2 2 5 5 2 2 2 . .
    . e . 2 2 2 2 2 2 . e .
    . e . . 8 8 8 8 . . e .
    e . . . 8 . . 8 . . . e
    e . . . 8 . . 8 . . . e
    . . . . f . . f . . . .
    . . . . 6 . . 6 . . . .
    . . . . 6 . . 6 . . . .
    . . . . 6 . . 6 . . . .
""")

skier_left = img("""
    . . . . 5 5 . . . . . .
    . . . 3 3 3 3 . . . . .
    . . . d 8 8 d . . . . .
    . . . . d d . . . . . .
    . . 2 2 2 2 2 2 . . . .
    . 2 2 2 5 5 2 2 2 . . .
    . . . 2 2 2 2 2 2 e . .
    . . . 8 8 8 8 . . . e .
    . . . 8 . . 8 . . . . e
    . . 8 . . 8 . . . . . .
    . . f . . f . . . . . .
    . 6 . . 6 . . . . . . .
    6 . . 6 . . . . . . . .
    6 . . 6 . . . . . . . .
""")

skier_right = img("""
    . . . . . . 5 5 . . . .
    . . . . . 3 3 3 3 . . .
    . . . . . d 8 8 d . . .
    . . . . . . d d . . . .
    . . . . 2 2 2 2 2 2 . .
    . . . 2 2 2 5 5 2 2 2 .
    . . e 2 2 2 2 2 2 . . .
    . e . . . 8 8 8 8 . . .
    e . . . . 8 . . 8 . . .
    . . . . . . 8 . . 8 . .
    . . . . . . f . . f . .
    . . . . . . . 6 . . 6 .
    . . . . . . . . 6 . . 6
    . . . . . . . . 6 . . 6
""")

skier_fast = img("""
    . 9 . . . . . . . . 9 .
    . 9 . . . . . . . . 9 .
    . . . . . 5 5 . . . . .
    . . . . 3 3 3 3 . . . .
    . . . 2 d 8 8 d 2 . . .
    . . 2 2 2 5 5 2 2 2 . .
    . e 2 2 2 2 2 2 2 2 e .
    e . . . 8 8 8 8 . . . e
    . . . . 8 . . 8 . . . .
    . . . . f . . f . . . .
    . . . . 6 . . 6 . . . .
    . . . . 6 . . 6 . . . .
    . . . . 6 . . 6 . . . .
    . . . . 6 . . 6 . . . .
""")

skier_slow = img("""
    . . . . . 5 5 . . . . .
    . . . . 3 3 3 3 . . . .
    . . . . d 8 8 d . . . .
    . . . . . d d . . . . .
    . 2 2 2 2 2 2 2 2 2 2 .
    e . . 2 2 5 5 2 2 . . e
    e . . . 2 2 2 2 . . . e
    . . . . 8 8 8 8 . . . .
    . . . 8 . . . . 8 . . .
    . . . f . . . . f . . .
    . . 6 . . . . . . 6 . .
    . . . 6 . . . . 6 . . .
    . 9 . . 6 . . 6 . . 9 .
    . . 9 . . 6 6 . . 9 . .
""")

# Player tumbled in the snow!
skier_fallen = img("""
    . . . 6 . . . . . 6 . . . .
    . . . . 6 . . . 6 . . . . .
    . . . . . f . f . . . . . .
    . . . . . 8 . 8 . . . . . .
    . . . 9 2 2 2 2 8 . 9 . . .
    . 9 2 2 2 5 5 2 2 2 . 9 . .
    . . 3 3 d 2 2 2 e e . . . .
    . 5 3 d 8 d 2 . . . e . . .
    . . . 9 9 9 9 9 9 9 . . . .
    . . 9 9 9 9 9 9 9 9 9 . . .
    . . . . . . . . . . . . . .
    . . . . . . . . . . . . . .
""")

# Other skier (blue jacket, yellow beanie, orange skis)
other_skier_img = img("""
    . . . . . 4 4 . . . . .
    . . . . 5 5 5 5 . . . .
    . . . . d f f d . . . .
    . . . . . d d . . . . .
    . . . 8 8 8 8 8 8 . . .
    . . 8 8 8 6 6 8 8 8 . .
    . e . 8 8 8 8 8 8 . e .
    . e . . c c c c . . e .
    e . . . c . . c . . . e
    e . . . c . . c . . . e
    . . . . f . . f . . . .
    . . . . 4 . . 4 . . . .
    . . . . 4 . . 4 . . . .
    . . . . 4 . . 4 . . . .
""")

# Other skier tumbled in the snow!
other_skier_fallen = img("""
    . . . . 4 . . . . 4 . . . .
    . . . . . 4 . . 4 . . . . .
    . . . . . f . f . . . . . .
    . . . . . c . c . . . . . .
    . . . 9 8 8 8 8 c . 9 . . .
    . 9 8 8 8 6 6 8 8 8 . 9 . .
    . . 5 5 d 8 8 8 e e . . . .
    . 4 5 d f d 8 . . . e . . .
    . . . 9 9 9 9 9 9 9 . . . .
    . . 9 9 9 9 9 9 9 9 9 . . .
    . . . . . . . . . . . . . .
    . . . . . . . . . . . . . .
""")

# Polar Bear (2-frame running animation)
bear_1 = img("""
    . . . c c . . . . . . c c . . .
    . . c 1 9 c c c c c c 9 1 c . .
    . . c 1 1 1 1 1 1 1 1 1 1 c . .
    . . c 1 f 1 1 1 1 1 1 f 1 c . .
    . . c 1 1 1 1 f f 1 1 1 1 c . .
    . . . c 1 1 1 3 3 1 1 1 c . . .
    . . c 1 1 9 1 1 1 1 9 1 1 c . .
    . c 1 1 1 1 1 1 1 1 1 1 1 1 c .
    . c 1 1 1 1 1 1 1 1 1 1 1 1 c .
    c 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c
    c 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c
    f f c . c 1 1 1 1 1 1 c . c 1 c
    . . . . c 1 1 c c 1 1 c . . f f
    . . . . c 1 1 c c 1 1 c . . . .
    . . . . f f c . . c 1 c . . . .
    . . . . . . . . . . f f . . . .
""")

bear_2 = img("""
    . . . c c . . . . . . c c . . .
    . . c 1 9 c c c c c c 9 1 c . .
    . . c 1 1 1 1 1 1 1 1 1 1 c . .
    . . c 1 f 1 1 1 1 1 1 f 1 c . .
    . . c 1 1 1 1 f f 1 1 1 1 c . .
    . . . c 1 1 3 3 3 3 1 1 c . . .
    . . c 1 1 9 1 1 1 1 9 1 1 c . .
    . c 1 1 1 1 1 1 1 1 1 1 1 1 c .
    . c 1 1 1 1 1 1 1 1 1 1 1 1 c .
    c 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c
    c 1 1 c 1 1 1 1 1 1 1 1 c 1 1 c
    c 1 c . c 1 1 1 1 1 1 c . c f f
    f f . . c 1 1 c c 1 1 c . . . .
    . . . . c 1 1 c c 1 1 c . . . .
    . . . . c 1 c . . c f f . . . .
    . . . . f f . . . . . . . . . .
""")

tree_img = img("""
    . . . . . . 7 7 . . . . . .
    . . . . . 7 9 7 7 . . . . .
    . . . . 7 7 7 7 7 7 . . . .
    . . . . . 7 7 7 7 . . . . .
    . . . . 7 9 7 7 7 7 . . . .
    . . . 7 7 7 7 7 9 7 7 . . .
    . . 7 7 7 7 7 7 7 7 7 7 . .
    . . . . 7 7 7 7 7 7 . . . .
    . . . 7 9 7 7 7 7 7 7 . . .
    . . 7 7 7 7 7 7 9 7 7 7 . .
    . 7 7 7 7 7 7 7 7 7 7 7 7 .
    7 7 7 7 7 7 7 7 7 7 7 7 7 7
    . . . . . . e e . . . . . .
    . . . . . . e e . . . . . .
    . . . . . . e e . . . . . .
    . . . . . 9 9 9 9 . . . . .
""")

rock_img = img("""
    . . . . 9 9 9 9 . . . .
    . . . 9 9 9 c c 9 . . .
    . . c c c c c c c c . .
    . c c b b c c c c c c .
    . c b b c c c c f c c .
    c c c c c c c f f c c c
    c c c c c f f c c c f c
    c c c f f c c c c f c c
    . c c c c c c c c c c .
    . . 9 9 9 9 9 9 9 9 . .
""")

flag_img = img("""
    . . f 4 4 4 4 . . .
    . . f 4 5 5 4 4 . .
    . . f 4 5 5 5 4 4 .
    . . f 4 5 5 4 4 . .
    . . f 4 4 4 4 . . .
    . . f . . . . . . .
    . . f . . . . . . .
    . . f . . . . . . .
    . . f . . . . . . .
    . . f . . . . . . .
    . . f . . . . . . .
    . 9 9 9 . . . . . .
""")

snow_streak_img = img("""
    9 .
    9 .
    9 .
    . 9
    . 9
    . .
""")

finish_img = image.create(160, 8)
finish_img.fill(2)
for col in range(0, 160, 8):
    finish_img.fill_rect(col, 0, 4, 4, 1)
    finish_img.fill_rect(col + 4, 4, 4, 4, 1)

# --- 2. GAME SETTINGS & STATE ---

STEER_SPEED = 85
OTHER_SKIER_SPEED = 25   # Other skiers move downhill slowly
BEAR_SPEED = 95          # Faster than normal skiing, slower than tucking!

level = 1
level_goal = 300
normal_speed = 70
slow_speed = 35
fast_speed = 125

scroll_speed = normal_speed
distance = 0.0
last_scored_meter = 0
last_time = game.runtime()
invincible_until = 0
skier_fallen_until = 0
halfway_announced = False
finish_spawned = False
game_won = False

# Level 2 Polar Bear state
bear_chasing = False
bear_chase_until = 0
bear_1_spawned = False
bear_2_spawned = False

# --- 3. SETUP SCENE & HELPERS ---

scene.set_background_color(1)

skier = sprites.create(skier_straight, SpriteKind.player)
skier.set_position(80, 38)
skier.set_stay_in_screen(True)
skier.z = 5

info.set_life(3)
info.set_score(0)

def create_hazard_at(y_pos):
    if Math.percent_chance(70):
        hazard = sprites.create(tree_img, SpriteKind.enemy)
    else:
        hazard = sprites.create(rock_img, SpriteKind.enemy)
    hazard.set_position(randint(12, 148), y_pos)
    hazard.vy = -scroll_speed
    hazard.z = 2

def clear_slope():
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    sprites.destroy_all_sprites_of_kind(SpriteKind.OtherSkier)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Fallen)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Bear)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Finish)

def spawn_polar_bear():
    global bear_chasing, bear_chase_until

    bear = sprites.create(bear_1, SpriteKind.Bear)
    bear.set_position(skier.x, 8)
    bear.z = 4
    bear.say_text("ROAR!", 1000)
    music.power_down.play()
    bear_chasing = True
    bear_chase_until = game.runtime() + 7000  # Chases for 7 seconds!

def start_level_2():
    global level, level_goal, normal_speed, slow_speed, fast_speed
    global distance, last_scored_meter, halfway_announced, finish_spawned
    global bear_chasing, bear_1_spawned, bear_2_spawned
    global invincible_until, skier_fallen_until, last_time

    clear_slope()
    level = 2
    level_goal = 450
    normal_speed = 80
    slow_speed = 40
    fast_speed = 135

    distance = 0.0
    last_scored_meter = 0
    halfway_announced = False
    finish_spawned = False
    bear_chasing = False
    bear_1_spawned = False
    bear_2_spawned = False
    invincible_until = 0
    skier_fallen_until = 0

    skier.set_position(80, 38)
    skier.set_image(skier_straight)
    skier.set_flag(SpriteFlag.INVISIBLE, False)
    info.set_life(3)

    game.splash("LEVEL 1 COMPLETE!", "Next: Level 2!")
    game.show_long_text(
        "LEVEL 2: ALPINE RUN!\nWatch out for other skiers!\nIf a Polar Bear chases you,\nhold DOWN to outrun it!\nReach 450m to win!",
        DialogLayout.BOTTOM,
    )
    create_hazard_at(100)
    last_time = game.runtime()

# Put starter objects on the Level 1 slope
create_hazard_at(95)
create_hazard_at(115)
for i in range(6):
    s = sprites.create(snow_streak_img, SpriteKind.projectile)
    s.set_position(randint(4, 156), randint(10, 115))
    s.vy = -scroll_speed
    s.z = -1
    s.set_flag(SpriteFlag.GHOST, True)

game.splash("FAMILY SKI TRIP!", "Level 1: Bunny Slope")
game.show_long_text(
    "Left/Right: Steer\nDown: Tuck (Fast)\nUp: Snowplow (Slow)\nAvoid trees & rocks!\nGrab flags for +25 pts!\nReach 300m for Level 2!",
    DialogLayout.BOTTOM,
)
last_time = game.runtime()

# --- 4. MAIN GAME LOOP ---

def on_update_game():
    global scroll_speed, distance, last_scored_meter, last_time
    global halfway_announced, finish_spawned
    global bear_chasing, bear_1_spawned, bear_2_spawned

    if game_won:
        return

    now = game.runtime()
    dt = (now - last_time) / 1000.0
    last_time = now
    if dt > 0.1:
        dt = 0.1

    is_fallen = now < skier_fallen_until

    # Speed control & player animation
    target_y = 38
    if is_fallen:
        scroll_speed = slow_speed
        skier.vx = 0
        skier.set_image(skier_fallen)
    else:
        if controller.down.is_pressed():
            scroll_speed = fast_speed
            target_y = 50
        elif controller.up.is_pressed():
            scroll_speed = slow_speed
            target_y = 28
        else:
            scroll_speed = normal_speed
            target_y = 38

        skier.y += (target_y - skier.y) * 0.18

        if controller.left.is_pressed():
            skier.vx = -STEER_SPEED
            skier.set_image(skier_left)
        elif controller.right.is_pressed():
            skier.vx = STEER_SPEED
            skier.set_image(skier_right)
        else:
            skier.vx = 0
            if controller.down.is_pressed():
                skier.set_image(skier_fast)
            elif controller.up.is_pressed():
                skier.set_image(skier_slow)
            else:
                skier.set_image(skier_straight)

    # Update trees, rocks, flags, fallen skiers, snow streaks, finish line
    for hazard in sprites.all_of_kind(SpriteKind.enemy):
        hazard.vy = -scroll_speed
        if hazard.bottom < 0:
            hazard.destroy()

    for bonus in sprites.all_of_kind(SpriteKind.food):
        bonus.vy = -scroll_speed
        if bonus.bottom < 0:
            bonus.destroy()

    for fallen in sprites.all_of_kind(SpriteKind.Fallen):
        fallen.vy = -scroll_speed
        if fallen.bottom < 0:
            fallen.destroy()

    for streak in sprites.all_of_kind(SpriteKind.projectile):
        streak.vy = -scroll_speed
        if streak.bottom < 0:
            streak.destroy()

    for banner in sprites.all_of_kind(SpriteKind.Finish):
        banner.vy = -scroll_speed

    # Update other skiers (they ski downhill and weave left/right)
    for other in sprites.all_of_kind(SpriteKind.OtherSkier):
        other.vy = -(scroll_speed - OTHER_SKIER_SPEED)
        if other.x < 14:
            other.vx = abs(other.vx)
        elif other.x > 146:
            other.vx = -abs(other.vx)
        if other.bottom < 0:
            other.destroy()

    # Update Polar Bear chase (Level 2)
    for bear in sprites.all_of_kind(SpriteKind.Bear):
        if bear_chasing:
            if (now // 160) % 2 == 0:
                bear.set_image(bear_1)
            else:
                bear.set_image(bear_2)

            if bear.x < skier.x - 4:
                bear.vx = 52
            elif bear.x > skier.x + 4:
                bear.vx = -52
            else:
                bear.vx = 0

            bear.vy = BEAR_SPEED - scroll_speed
            if bear.y < 8:
                bear.y = 8

            if now >= bear_chase_until:
                bear_chasing = False
                bear.say_text("Phew...", 900)
                bear.vx = 0
        else:
            bear.vx = 0
            bear.vy = -scroll_speed
            if bear.bottom < 0:
                bear.destroy()

    # Blink while briefly invincible after getting hit
    if now < invincible_until and not is_fallen:
        skier.set_flag(SpriteFlag.INVISIBLE, (now // 100) % 2 == 0)
    else:
        skier.set_flag(SpriteFlag.INVISIBLE, False)

    # Track distance skied (10 pixels = 1 meter)
    distance += (scroll_speed * dt) / 10.0
    current_meter = int(distance)
    if current_meter > last_scored_meter:
        info.change_score_by(current_meter - last_scored_meter)
        last_scored_meter = current_meter

    # Trigger Polar Bear chases in Level 2
    if level == 2 and not finish_spawned:
        if not bear_1_spawned and distance >= 120:
            bear_1_spawned = True
            spawn_polar_bear()
        elif not bear_2_spawned and distance >= 290:
            bear_2_spawned = True
            spawn_polar_bear()

    # Halfway milestone callout
    if not halfway_announced and distance >= level_goal / 2:
        halfway_announced = True
        skier.say_text("Halfway!", 1200)

    # Spawn the checkered finish line at the goal
    if not finish_spawned and distance >= level_goal:
        finish_spawned = True
        bear_chasing = False
        skier.say_text("Finish ahead!", 1200)
        finish_line = sprites.create(finish_img, SpriteKind.Finish)
        finish_line.set_position(80, 126)
        finish_line.vy = -scroll_speed
        finish_line.z = 1

game.on_update(on_update_game)

# --- 5. SPAWNERS ---

def spawn_hazard():
    if game_won or finish_spawned:
        return
    create_hazard_at(128)

game.on_update_interval(650, spawn_hazard)

def spawn_other_skier():
    if level < 2 or game_won or finish_spawned:
        return
    other = sprites.create(other_skier_img, SpriteKind.OtherSkier)
    other.set_position(randint(20, 140), 128)
    other.vy = -(scroll_speed - OTHER_SKIER_SPEED)
    if Math.percent_chance(50):
        other.vx = 28
    else:
        other.vx = -28
    other.z = 3

game.on_update_interval(2000, spawn_other_skier)

def spawn_flag():
    if game_won or finish_spawned:
        return
    flag = sprites.create(flag_img, SpriteKind.food)
    flag.set_position(randint(16, 144), 126)
    flag.vy = -scroll_speed
    flag.z = 2

game.on_update_interval(2200, spawn_flag)

def spawn_snow_streak():
    if game_won:
        return
    streak = sprites.create(snow_streak_img, SpriteKind.projectile)
    streak.set_position(randint(4, 156), 124)
    streak.vy = -scroll_speed
    streak.z = -1
    streak.set_flag(SpriteFlag.GHOST, True)

game.on_update_interval(180, spawn_snow_streak)

# --- 6. COLLISIONS ---

def on_hit_hazard(player_sprite, hazard_sprite):
    global invincible_until

    now = game.runtime()
    if now < invincible_until:
        return

    hazard_sprite.destroy(effects.disintegrate, 200)
    info.change_life_by(-1)
    scene.camera_shake(4, 200)
    music.knock.play()
    invincible_until = now + 1200

sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_hit_hazard)

def on_hit_other_skier(player_sprite, other_sprite):
    global invincible_until, skier_fallen_until

    now = game.runtime()
    if now < invincible_until:
        return

    # Both skiers fall down!
    other_sprite.set_image(other_skier_fallen)
    other_sprite.set_kind(SpriteKind.Fallen)
    other_sprite.vx = 0
    other_sprite.say_text("Oof!", 800)

    info.change_life_by(-1)
    scene.camera_shake(4, 250)
    music.knock.play()
    skier_fallen_until = now + 650
    invincible_until = now + 1500

sprites.on_overlap(SpriteKind.player, SpriteKind.OtherSkier, on_hit_other_skier)

def on_hit_bear(player_sprite, bear_sprite):
    global invincible_until, skier_fallen_until, bear_chasing

    now = game.runtime()
    if now < invincible_until or not bear_chasing:
        return

    info.change_life_by(-1)
    scene.camera_shake(5, 300)
    music.big_crash.play()
    skier_fallen_until = now + 650
    invincible_until = now + 1600
    bear_chasing = False
    bear_sprite.say_text("Grrr!", 800)
    bear_sprite.vx = 0

sprites.on_overlap(SpriteKind.player, SpriteKind.Bear, on_hit_bear)

def on_collect_flag(player_sprite, flag_sprite):
    flag_sprite.destroy(effects.hearts, 200)
    info.change_score_by(25)
    music.ba_ding.play()

sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_collect_flag)

def on_cross_finish(player_sprite, finish_sprite):
    global game_won

    finish_sprite.destroy()
    music.power_up.play()

    if level == 1:
        start_level_2()
    else:
        game_won = True
        game.splash("YOU WIN!", "Champion of the Mountain!")
        game.over(True, effects.confetti)

sprites.on_overlap(SpriteKind.player, SpriteKind.Finish, on_cross_finish)