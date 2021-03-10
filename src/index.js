import Phaser from 'phaser';
import Game from './scenes/Game'
import Preloader from './scenes/Preloader'
import Title from './scenes/Title'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true
        }
    },
    scene: [Preloader, Title, Game],
	backgroundColor: "#002fa7"
};

const game = new Phaser.Game(config);
