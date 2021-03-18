export default class Egg extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, xIni, yIni, img)
    {
      super(scene, xIni, yIni, img)
      scene.add.existing(this)
      scene.physics.add.existing(this)
      console.log(this);
    }

    hatch()
    {
        this.play('egg-hatch');
    }
}