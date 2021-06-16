import Phaser from 'phaser';
import { sceneEvents } from '../events/EventsCenter';

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
        this.hunger = 100;
        this.time = 0;

    }

    preUpdate(t, dt)
    {
        super.preUpdate(t, dt);
        this.time += dt;
        if (this.time > 2000)
        {
            this.decreaseHunger();
            this.time = 0;
        }
    }

    update()
    {

    }
    
    decreaseHunger()
    {
        if (this.hunger <= 0)
        {
            return;
        }
        this.hunger -= 1;
        sceneEvents.emit('kawa-hunger-changed', this.hunger);
    }

    feed()
    {
        if (this.hunger > 95)
        {
            return;
        }
        this.hunger += 5; 
        sceneEvents.emit('kawa-hunger-changed', this.hunger);
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