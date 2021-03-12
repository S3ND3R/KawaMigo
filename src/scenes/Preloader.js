import Phaser from 'phaser'
import kawamigoImg from '../assets/KawaMigo.png'
import eggSheet from '../assets/egg.png'
import KawaBaby from '../assets/KawaBabi.png'

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader');
    }

    preload()
    {
        this.load.image('kmLogo', kawamigoImg);
        this.load.spritesheet('eggSheet', eggSheet, {
            frameWidth: 128
        });
        this.load.spritesheet('baby', KawaBaby, {
            frameWidth: 128
        });
    }

    create()
    {
        this.anims.create({
            key: 'egg-idle',
            frames: this.anims.generateFrameNumbers('eggSheet', {start: 0, end: 3}),
            frameRate: 5,
            repeat: -1,
            repeatDelay: 100
        });

        this.anims.create({
            key: 'egg-hatch',
            frames: this.anims.generateFrameNumbers('eggSheet', {start: 4, end: 9}),
            frameRate: 5
        });

        this.anims.create({
            key: 'baby-idle',
            frames: this.anims.generateFrameNumbers('baby', {start: 0, end: 3}),
            frameRate: 8,
            repeat: -1
        });

        this.scene.start('title');
    }
}