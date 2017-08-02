importScripts('../base-robot.js')

class Boss0 extends BaseRobot

  onIdle: !->
    @turn_turret_right 45
    @move_forwards 50

  onWallCollide: !->
    @yell "O'snap!"
  onHit: !->
    @yell "Oops!"

  onEnemySpot: !->
    @yell "Fire!"

tr = new Boss0("MyRobot")