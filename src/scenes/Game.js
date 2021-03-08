import Phaser from 'phaser'
import kawamigoImg from '../assets/KawaMigo.png';

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('game');
    }

    preload ()
    {
        this.load.image('kmLogo', kawamigoImg);
    }
        
    create ()
    {
        const kwLogo = this.add.image(400, 150, 'kmLogo');
                
        this.tweens.add({
            targets: kwLogo,
            y: 450,
            duration: 2500,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}
