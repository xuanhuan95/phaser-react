import Phaser from '../../phaser';
import Boot from './states/Boot';
import Preload from './states/Preload';
import Main from './states/Main';
import GameTitle from './states/GameTitle';
import GameOver from './states/GameOver';

class Game1 extends Phaser.Game{
    constructor(){
        super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, 'root');

		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('GameTitle', GameTitle, false);
		this.state.add('Main', Main, false);
		this.state.add('GameOver', GameOver, false);

		this.state.start('Boot');
    }
}

export default Game1;