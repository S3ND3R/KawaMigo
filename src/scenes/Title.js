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

        this.add.text(350, 550, '[Press Space Bar]', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

        this.input.keyboard.once('keydown-SPACE', () => {
            // fade to black
            this.cameras.main.fadeOut(500, 255, 69, 0)
        })
    
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('game')
        })
    }
}
