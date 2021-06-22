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
        this.bars = {
            hunger: 100,
            happy: 100,
            attitude: 100,
        }
        this.time = 0;

    }

    preUpdate(t, dt)
    {
        super.preUpdate(t, dt);
        this.time += dt;
        if (this.time > 2000)
        {
            this.decreaseHunger();
            this.decreaseHappy();
            this.decreaseAttitude();
            this.time = 0;
        }
    }

    update()
    {

    }
    
    decreaseHunger()
    {
        if (this.bars.hunger <= 0)
        {
            return;
        }
        this.bars.hunger -= 1;
        sceneEvents.emit('kawa-hunger-changed', this.bars.hunger);
    }

    decreaseHappy()
    {
        if (this.bars.happy <= 0)
        {
            return;
        }
        this.bars.happy -= 1;
        sceneEvents.emit('kawa-happy-changed', this.bars.happy);
    }

    decreaseAttitude()
    {
        if (this.bars.attitude <= 0)
        {
            return;
        }
        this.bars.attitude -= 1;
        sceneEvents.emit('kawa-attitude-changed', this.bars.attitude);
    }

    feed()
    {
        if (this.bars.hunger > 95)
        {
            return;
        }
        this.bars.hunger += 5; 
        sceneEvents.emit('kawa-hunger-changed', this.bars.hunger);
    }

    _hunger()
    {
        return this.bars.hunger;
    }

    _happy()
    {
        return this.bars.happy;
    }

    _attitude()
    {
        return this.bars.attitude;
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