import Phaser from 'phaser';
import {sceneEvents} from '../events/EventsCenter'

export default class GameUI extends Phaser.Scene
{
    constructor()
    {
        super('gameUI')
        this.hunger = 100;
        this.happy = 100;
        this.attitude = 100;
    }

    create()
    {
        //make 3 bars
        let hungerBar=this.makeBar(174,106,0x2ecc71);
        this.setValue(hungerBar,this.hunger);


        let happyBar=this.makeBar(158,66,0xe74c3c);
        this.setValue(happyBar,this.happy);


        let attitudeBar=this.makeBar(216,26,0x2980b9);
        this.setValue(attitudeBar,this.attitude);

        const attitudeLabel = this.add.text(13, 20, `Discipline: ${this.attitude}`, {
            font: '32pt Arial', 
            fill: '#fff'
        });

        const happyLabel = this.add.text(13, 60, `Happy: ${this.happy}`, {
            font: '32pt Arial', 
            fill: '#fff'
        });

        const hungerLabel = this.add.text(13, 100, `Hunger: ${this.hunger}`,{
            font: '32pt Arial', 
            fill: '#fff' 
        });

        sceneEvents.on('kawa-hunger-changed',(hunger) => {
            this.hunger = hunger;
            this.setValue(hungerBar, hunger);
            hungerLabel.text = `Hunger: ${this.hunger}`;
        });

        sceneEvents.on('kawa-happy-changed',(happy) => {
            this.happy = happy;
            this.setValue(happyBar, happy);
            happyLabel.text = `Happy: ${this.happy}`;
        });

        sceneEvents.on('kawa-attitude-changed',(attitude) => {
            this.attitude = attitude;
            this.setValue(attitudeBar, attitude);
            attitudeLabel.text = `Discipline: ${this.attitude}`;
        });
    }

    makeBar(x, y,color) {
        //draw the bar
        let bar = this.add.graphics();

        //color the bar
        bar.fillStyle(color, 1);

        //fill the bar with a rectangle
        bar.fillRect(0, 0, 150, 34);
        
        //position the bar
        bar.x = x;
        bar.y = y;

        //return the bar
        return bar;
    }

    setValue(bar,percentage) {
        //scale the bar
        bar.scaleX = percentage/100;
    }
}