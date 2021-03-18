import Phaser from 'phaser'
import Egg from '../sprites/Egg'

export default class Title extends Phaser.Scene
{
    constructor ()
    {
        super('title');

        /** @type {Phaser.Physics.Arcade.Sprite} */
        this.egg;
    }
        
    create ()
    {
        const {width, height} = this.scale;

        const kwLogo = this.add.image(400, 150, 'kmLogo');
                
        this.tweens.add({
            targets: kwLogo,
            y: 250,
            duration: 2500,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });

        this.egg = new Egg(this, width * 0.5, height * 0.75, 'eggSheet');
        this.egg.hatch();
    }
}
