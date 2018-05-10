/* global Phaser */
require('phaser')

var config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  parent: 'game',
  pixelArt: true,
  scene: {
    preload,
    create
  }
}

var game = new Phaser.Game(config)

function preload () {
  this.load.images('ground', '../assets/groundEarth_checkered.png')
  this.load.images('wall', '../assets/wallStone.png')
  this.load.images('exit', '../assets/groundExit.png')
  this.load.tilemapTiledJSON('map', '../assets/tutorialMap.json')
}
function create () {
  var map = this.make.tilemap({ key: 'map' })

  // tiles
  var groundTiles = map.addTilesetImage('ground', 'ground')
  var wallTiles = map.addTilesetImage('wall', 'wall')
  var exitTiles = map.addTilesetImage('exit', 'exit')

  // layers
  var groundLayer = map.createStaticLayer('ground', groundTiles, 0, 0)
  var wallLayer = map.createStaticLayer('wall', wallTiles, 0, 0)
  var exitLayer = map.createStaticLayer('exit', exitTiles, 0, 0)
}
