import Phaser from 'phaser';

export default class Kawamigo extends Phaser.Physics.Arcade.Sprite
{
    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string} texture 
     * @param {string | number} frame 
     */
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame);
        this.play('baby-idle');
        this.setInteractive();
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.health = 100;

    }

    update()
    {

    }
    
    decreaseHealth()
    {
        this.health = this.health - 1;
        console.log(this.health);
    }
}


// Phaser.GameObjects.GameObjectFactory.register('kawamigo', function(this, x, y, texture, frame) {
    
//     var sprite = new Kawamigo(this.scene, x, y, texture, frame);

//     this.displayList.add(sprite);
//     this.updateList.add(sprite);

//     this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY);

//     sprite.body.setSize(sprite.height * 0.5, sprite.width * 0.5);

//     return sprite;
// });