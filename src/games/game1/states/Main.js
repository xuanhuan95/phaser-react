import Phaser from '../../../phaser';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Set the games background colour
        this.game.stage.backgroundColor = '#3498db';

		//Example of including an object
		//let exampleObject = new ExampleObject(this.game);
	}

	update() {
		
	}

}

export default Main;