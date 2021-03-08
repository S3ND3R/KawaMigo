import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import kawamigoImg from './assets/KawaMigo.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
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
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame,
	backgroundColor: "#0000ff"
};

const game = new Phaser.Game(config);
