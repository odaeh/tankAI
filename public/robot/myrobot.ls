importScripts('../base-robot.js')

class Boss0 extends BaseRobot

  i = 0;

  onIdle: !->
    @shoot!
    @move_forwards 50
    @turn_left 30
    @turn_turret_left 50
    @shoot!

  onWallCollide: !->
    @yell "Auch!"
    @move_opposite 50
    @turn_left 45
    @move_forwards 50
  
  onHit: !->
    @yell "Oh no!"
    @turn_left 40
    @move_forwards 50

  onEnemySpot: !->
    @yell "Gotcha!"
    @shoot!
    @move_backwards 10
    @shoot!
    @turn_turret_right 20
    @shoot!
    console.log("FIENDENS VINKEL: " + @enemy-spot[0].angle)

tr = new Boss0("MyRobot")