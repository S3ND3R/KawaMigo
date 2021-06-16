import Phaser from 'phaser';
import {sceneEvents} from '../events/EventsCenter'

export default class GameUI extends Phaser.Scene
{
    constructor()
    {
        super('gameUI')
        this.hunger = 100;
    }

    create()
    {
        const hungerLabel = this.add.text(13, 20, `Hunger: ${this.hunger}`,{
            font: '32pt Arial', 
            fill: '#fff' 
        });

        sceneEvents.on('kawa-hunger-changed',(hunger) => {
            this.hunger = hunger;
            hungerLabel.text = `Hunger: ${this.hunger}`;
        });
    }
}