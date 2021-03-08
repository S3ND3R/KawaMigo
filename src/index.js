import Phaser from 'phaser';
import Game from './scenes/Game'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Game,
	backgroundColor: "#0000ff"
};

const game = new Phaser.Game(config);
