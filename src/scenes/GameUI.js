import Phaser from 'phaser';
import {sceneEvents} from '../events/EventsCenter'

export default class GameUI extends Phaser.Scene
{
    constructor()
    {
        super('gameUI')
        this.health = 100;
    }

    create()
    {
        const healthLabel = this.add.text(13, 20, `Hunger: ${this.health}`,{
            font: '32pt Arial', 
            fill: '#fff' 
        });

        sceneEvents.on('kawa-health-changed',(health) => {
            this.health = health;
            healthLabel.text = `Hunger: ${this.health}`;
        });
    }
}