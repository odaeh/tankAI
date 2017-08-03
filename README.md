### Sequential Actions:

 * @turn_left (angle)
 * @turn_right (angle)
 * @move_forwards (distance)
 * @move_backwards (distance)
 * @move_opposite (distance) - This action can only be used in OnWallCollide()

### Parallel Actions:

 * @turn_turret_left (angle)
 * @turn_turret_right (angle)
 * @shoot()
 * @yell(message)

### Events:

 * OnIdle() - Triggered when idle (MUST implement)
 * OnWallCollide() - When the tank collide the wall
 * OnHit() - When hit by a bullet
 * OnEnemySpot() - When your turret is directly face to an enemy (there seems no reason not to fire!)

