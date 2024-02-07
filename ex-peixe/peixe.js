var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixoto;

function preload() {
    this.load.image('mar', 'assets/fundao.jpg');

    this.load.image('inteli', 'assets/logo-inteli_azul.png');

    this.load.image('peixe', 'assets/peixe/agua.png');

    this.load.image('bob', 'assets/siri.png');
    
    this.load.image('areia', 'assets/desert.png');

    this.load.image('nada', 'assets/nadador.png');


}

function create() {
    this.add.image(400, 300, 'mar').setScale(0.9);

    this.add.image(400, 440, 'areia').setScale(1.3);

    this.add.image(600, 300, 'bob');

    this.add.image(200, 400, 'nada').setScale(0.1);

    this.add.image(400, 525, 'inteli').setScale(0.5);

    peixoto = this.add.image(400, 300, 'peixe').setScale(0.5);

    peixoto.setFlip(true, false);
}

function update() {

    peixoto.x = this.input.x;

    peixoto.y = this.input.y;
}