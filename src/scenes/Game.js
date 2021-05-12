import Phaser from 'phaser'
import Kawamigo from '../sprites/Kawamigo'
import {sceneEvents} from '../events/EventsCenter'
//import { addDevServerEntrypoints } from 'webpack-dev-server';

export default class Game extends Phaser.Scene
{

    constructor ()
    {
        super('game');
        this.migo;
        this.cursors;
    }

    create ()
    {
        this.scene.run('gameUI');
        const {width, height} = this.scale;
        this.createKawamigo(width, height);
        this.migo.decreaseHealth();


    //     const egg = this.physics.add.sprite(width * 0.5, height * 0.5, 'eggSheet')
    //     .play('egg-idle');

    //    // var sprite = this.add.sprite(x, y, texture);
    //     egg.setInteractive();
    //     egg.on('pointerdown', ()=>{
    //         this.add.text(300, 300, 'Click! We need a game loop!', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
    //        egg.destroy();
    
    //    });
        //const baby = this.physics.add.sprite(width * 0.5, height * 0.5, 'baby')
        //.play('baby-idle');

        //this.egg = new Egg(this, width * 0.5, height * 0.75, 'eggSheet');
        //this.egg.hatch();
    }

    handleDamage()
    {
        this.migo.decreaseHealth();
        sceneEvents.emit('kawa-health-changed', this.migo.health);
    }


    createKawamigo(width, height)
    {
        this.migo = new Kawamigo(this, width * 0.5, height * 0.5, 'baby');
        this.migo.on('pointerdown', this.handleDamage, this);
    }
}
