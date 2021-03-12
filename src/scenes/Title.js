import Phaser from 'phaser'

export default class Title extends Phaser.Scene
{
    constructor ()
    {
        super('title');
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

        const egg = this.physics.add.sprite(width * 0.5, height * 0.75, 'eggSheet')
        .setInteractive()
        .play('egg-idle');

        egg.on('pointerdown', function () {
            this.play('egg-hatch');
        });

    }
}
