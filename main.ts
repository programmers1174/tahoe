let s: Sprite;
//  ==========================================
//  FAMILY SKI TRIP! — Level 1 & Level 2
//  Microsoft MakeCode Arcade (Python)
//  ==========================================
namespace SpriteKind {
    export const Finish = SpriteKind.create()
    export const OtherSkier = SpriteKind.create()
    export const Fallen = SpriteKind.create()
    export const Bear = SpriteKind.create()
}

//  --- 1. PIXEL ART ---
let skier_straight = img`
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
`
let skier_left = img`
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
`
let skier_right = img`
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
`
let skier_fast = img`
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
`
let skier_slow = img`
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
`
//  Player tumbled in the snow!
let skier_fallen = img`
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
`
//  Other skier (blue jacket, yellow beanie, orange skis)
let other_skier_img = img`
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
`
//  Other skier tumbled in the snow!
let other_skier_fallen = img`
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
`
//  Polar Bear (2-frame running animation)
let bear_1 = img`
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
`
let bear_2 = img`
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
`
let tree_img = img`
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
`
let rock_img = img`
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
`
let flag_img = img`
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
`
let snow_streak_img = img`
    9 .
    9 .
    9 .
    . 9
    . 9
    . .
`
let finish_img = image.create(160, 8)
finish_img.fill(2)
for (let col = 0; col < 160; col += 8) {
    finish_img.fillRect(col, 0, 4, 4, 1)
    finish_img.fillRect(col + 4, 4, 4, 4, 1)
}
//  --- 2. GAME SETTINGS & STATE ---
let STEER_SPEED = 85
let OTHER_SKIER_SPEED = 25
//  Other skiers move downhill slowly
let BEAR_SPEED = 95
//  Faster than normal skiing, slower than tucking!
let level = 1
let level_goal = 300
let normal_speed = 70
let slow_speed = 35
let fast_speed = 125
let scroll_speed = normal_speed
let distance = 0.0
let last_scored_meter = 0
let last_time = game.runtime()
let invincible_until = 0
let skier_fallen_until = 0
let halfway_announced = false
let finish_spawned = false
let game_won = false
//  Level 2 Polar Bear state
let bear_chasing = false
let bear_chase_until = 0
let bear_1_spawned = false
let bear_2_spawned = false
//  --- 3. SETUP SCENE & HELPERS ---
scene.setBackgroundColor(1)
let skier = sprites.create(skier_straight, SpriteKind.Player)
skier.setPosition(80, 38)
skier.setStayInScreen(true)
skier.z = 5
info.setLife(3)
info.setScore(0)
function create_hazard_at(y_pos: number) {
    let hazard: Sprite;
    if (Math.percentChance(70)) {
        hazard = sprites.create(tree_img, SpriteKind.Enemy)
    } else {
        hazard = sprites.create(rock_img, SpriteKind.Enemy)
    }
    
    hazard.setPosition(randint(12, 148), y_pos)
    hazard.vy = -scroll_speed
    hazard.z = 2
}

function clear_slope() {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.OtherSkier)
    sprites.destroyAllSpritesOfKind(SpriteKind.Fallen)
    sprites.destroyAllSpritesOfKind(SpriteKind.Bear)
    sprites.destroyAllSpritesOfKind(SpriteKind.Finish)
}

function spawn_polar_bear() {
    
    let bear = sprites.create(bear_1, SpriteKind.Bear)
    bear.setPosition(skier.x, 8)
    bear.z = 4
    bear.sayText("ROAR!", 1000)
    music.powerDown.play()
    bear_chasing = true
    bear_chase_until = game.runtime() + 7000
}

//  Chases for 7 seconds!
function start_level_2() {
    
    
    
    
    clear_slope()
    level = 2
    level_goal = 450
    normal_speed = 80
    slow_speed = 40
    fast_speed = 135
    distance = 0.0
    last_scored_meter = 0
    halfway_announced = false
    finish_spawned = false
    bear_chasing = false
    bear_1_spawned = false
    bear_2_spawned = false
    invincible_until = 0
    skier_fallen_until = 0
    skier.setPosition(80, 38)
    skier.setImage(skier_straight)
    skier.setFlag(SpriteFlag.Invisible, false)
    info.setLife(3)
    game.splash("LEVEL 1 COMPLETE!", "Next: Level 2!")
    game.showLongText(`LEVEL 2: ALPINE RUN!
Watch out for other skiers!
If a Polar Bear chases you,
hold DOWN to outrun it!
Reach 450m to win!`, DialogLayout.Bottom)
    create_hazard_at(100)
    last_time = game.runtime()
}

//  Put starter objects on the Level 1 slope
create_hazard_at(95)
create_hazard_at(115)
for (let i = 0; i < 6; i++) {
    s = sprites.create(snow_streak_img, SpriteKind.Projectile)
    s.setPosition(randint(4, 156), randint(10, 115))
    s.vy = -scroll_speed
    s.z = -1
    s.setFlag(SpriteFlag.Ghost, true)
}
game.splash("FAMILY SKI TRIP!", "Level 1: Bunny Slope")
game.showLongText(`Left/Right: Steer
Down: Tuck (Fast)
Up: Snowplow (Slow)
Avoid trees & rocks!
Grab flags for +25 pts!
Reach 300m for Level 2!`, DialogLayout.Bottom)
last_time = game.runtime()
//  --- 4. MAIN GAME LOOP ---
game.onUpdate(function on_update_game() {
    let finish_line: Sprite;
    
    
    
    if (game_won) {
        return
    }
    
    let now = game.runtime()
    let dt = (now - last_time) / 1000.0
    last_time = now
    if (dt > 0.1) {
        dt = 0.1
    }
    
    let is_fallen = now < skier_fallen_until
    //  Speed control & player animation
    let target_y = 38
    if (is_fallen) {
        scroll_speed = slow_speed
        skier.vx = 0
        skier.setImage(skier_fallen)
    } else {
        if (controller.down.isPressed()) {
            scroll_speed = fast_speed
            target_y = 50
        } else if (controller.up.isPressed()) {
            scroll_speed = slow_speed
            target_y = 28
        } else {
            scroll_speed = normal_speed
            target_y = 38
        }
        
        skier.y += (target_y - skier.y) * 0.18
        if (controller.left.isPressed()) {
            skier.vx = -STEER_SPEED
            skier.setImage(skier_left)
        } else if (controller.right.isPressed()) {
            skier.vx = STEER_SPEED
            skier.setImage(skier_right)
        } else {
            skier.vx = 0
            if (controller.down.isPressed()) {
                skier.setImage(skier_fast)
            } else if (controller.up.isPressed()) {
                skier.setImage(skier_slow)
            } else {
                skier.setImage(skier_straight)
            }
            
        }
        
    }
    
    //  Update trees, rocks, flags, fallen skiers, snow streaks, finish line
    for (let hazard of sprites.allOfKind(SpriteKind.Enemy)) {
        hazard.vy = -scroll_speed
        if (hazard.bottom < 0) {
            hazard.destroy()
        }
        
    }
    for (let bonus of sprites.allOfKind(SpriteKind.Food)) {
        bonus.vy = -scroll_speed
        if (bonus.bottom < 0) {
            bonus.destroy()
        }
        
    }
    for (let fallen of sprites.allOfKind(SpriteKind.Fallen)) {
        fallen.vy = -scroll_speed
        if (fallen.bottom < 0) {
            fallen.destroy()
        }
        
    }
    for (let streak of sprites.allOfKind(SpriteKind.Projectile)) {
        streak.vy = -scroll_speed
        if (streak.bottom < 0) {
            streak.destroy()
        }
        
    }
    for (let banner of sprites.allOfKind(SpriteKind.Finish)) {
        banner.vy = -scroll_speed
    }
    //  Update other skiers (they ski downhill and weave left/right)
    for (let other of sprites.allOfKind(SpriteKind.OtherSkier)) {
        other.vy = -(scroll_speed - OTHER_SKIER_SPEED)
        if (other.x < 14) {
            other.vx = Math.abs(other.vx)
        } else if (other.x > 146) {
            other.vx = -Math.abs(other.vx)
        }
        
        if (other.bottom < 0) {
            other.destroy()
        }
        
    }
    //  Update Polar Bear chase (Level 2)
    for (let bear of sprites.allOfKind(SpriteKind.Bear)) {
        if (bear_chasing) {
            if (Math.idiv(now, 160) % 2 == 0) {
                bear.setImage(bear_1)
            } else {
                bear.setImage(bear_2)
            }
            
            if (bear.x < skier.x - 4) {
                bear.vx = 52
            } else if (bear.x > skier.x + 4) {
                bear.vx = -52
            } else {
                bear.vx = 0
            }
            
            bear.vy = BEAR_SPEED - scroll_speed
            if (bear.y < 8) {
                bear.y = 8
            }
            
            if (now >= bear_chase_until) {
                bear_chasing = false
                bear.sayText("Phew...", 900)
                bear.vx = 0
            }
            
        } else {
            bear.vx = 0
            bear.vy = -scroll_speed
            if (bear.bottom < 0) {
                bear.destroy()
            }
            
        }
        
    }
    //  Blink while briefly invincible after getting hit
    if (now < invincible_until && !is_fallen) {
        skier.setFlag(SpriteFlag.Invisible, Math.idiv(now, 100) % 2 == 0)
    } else {
        skier.setFlag(SpriteFlag.Invisible, false)
    }
    
    //  Track distance skied (10 pixels = 1 meter)
    distance += scroll_speed * dt / 10.0
    let current_meter = Math.trunc(distance)
    if (current_meter > last_scored_meter) {
        info.changeScoreBy(current_meter - last_scored_meter)
        last_scored_meter = current_meter
    }
    
    //  Trigger Polar Bear chases in Level 2
    if (level == 2 && !finish_spawned) {
        if (!bear_1_spawned && distance >= 120) {
            bear_1_spawned = true
            spawn_polar_bear()
        } else if (!bear_2_spawned && distance >= 290) {
            bear_2_spawned = true
            spawn_polar_bear()
        }
        
    }
    
    //  Halfway milestone callout
    if (!halfway_announced && distance >= level_goal / 2) {
        halfway_announced = true
        skier.sayText("Halfway!", 1200)
    }
    
    //  Spawn the checkered finish line at the goal
    if (!finish_spawned && distance >= level_goal) {
        finish_spawned = true
        bear_chasing = false
        skier.sayText("Finish ahead!", 1200)
        finish_line = sprites.create(finish_img, SpriteKind.Finish)
        finish_line.setPosition(80, 126)
        finish_line.vy = -scroll_speed
        finish_line.z = 1
    }
    
})
//  --- 5. SPAWNERS ---
game.onUpdateInterval(650, function spawn_hazard() {
    if (game_won || finish_spawned) {
        return
    }
    
    create_hazard_at(128)
})
game.onUpdateInterval(2000, function spawn_other_skier() {
    if (level < 2 || game_won || finish_spawned) {
        return
    }
    
    let other = sprites.create(other_skier_img, SpriteKind.OtherSkier)
    other.setPosition(randint(20, 140), 128)
    other.vy = -(scroll_speed - OTHER_SKIER_SPEED)
    if (Math.percentChance(50)) {
        other.vx = 28
    } else {
        other.vx = -28
    }
    
    other.z = 3
})
game.onUpdateInterval(2200, function spawn_flag() {
    if (game_won || finish_spawned) {
        return
    }
    
    let flag = sprites.create(flag_img, SpriteKind.Food)
    flag.setPosition(randint(16, 144), 126)
    flag.vy = -scroll_speed
    flag.z = 2
})
game.onUpdateInterval(180, function spawn_snow_streak() {
    if (game_won) {
        return
    }
    
    let streak = sprites.create(snow_streak_img, SpriteKind.Projectile)
    streak.setPosition(randint(4, 156), 124)
    streak.vy = -scroll_speed
    streak.z = -1
    streak.setFlag(SpriteFlag.Ghost, true)
})
//  --- 6. COLLISIONS ---
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_hit_hazard(player_sprite: Sprite, hazard_sprite: Sprite) {
    
    let now = game.runtime()
    if (now < invincible_until) {
        return
    }
    
    hazard_sprite.destroy(effects.disintegrate, 200)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 200)
    music.knock.play()
    invincible_until = now + 1200
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.OtherSkier, function on_hit_other_skier(player_sprite: Sprite, other_sprite: Sprite) {
    
    let now = game.runtime()
    if (now < invincible_until) {
        return
    }
    
    //  Both skiers fall down!
    other_sprite.setImage(other_skier_fallen)
    other_sprite.setKind(SpriteKind.Fallen)
    other_sprite.vx = 0
    other_sprite.sayText("Oof!", 800)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 250)
    music.knock.play()
    skier_fallen_until = now + 650
    invincible_until = now + 1500
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bear, function on_hit_bear(player_sprite: Sprite, bear_sprite: Sprite) {
    
    let now = game.runtime()
    if (now < invincible_until || !bear_chasing) {
        return
    }
    
    info.changeLifeBy(-1)
    scene.cameraShake(5, 300)
    music.bigCrash.play()
    skier_fallen_until = now + 650
    invincible_until = now + 1600
    bear_chasing = false
    bear_sprite.sayText("Grrr!", 800)
    bear_sprite.vx = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_collect_flag(player_sprite: Sprite, flag_sprite: Sprite) {
    flag_sprite.destroy(effects.hearts, 200)
    info.changeScoreBy(25)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function on_cross_finish(player_sprite: Sprite, finish_sprite: Sprite) {
    
    finish_sprite.destroy()
    music.powerUp.play()
    if (level == 1) {
        start_level_2()
    } else {
        game_won = true
        game.splash("YOU WIN!", "Champion of the Mountain!")
        game.over(true, effects.confetti)
    }
    
})
