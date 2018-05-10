/* global Phaser */
var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')
var css = require('sheetify')

var wrapper = css`
  :host {
    overflow: hidden;
    display: block;
    width: 50%;
    margin: 0 auto;
  }
`

module.exports = class Game extends Nanocomponent {
  constructor () {
    super()
    require('phaser/dist/phaser.min')
    this.scene = null
    this.instance = null
    this.heroSprite = null
  }

  createElement () {
    return html`<div class="${wrapper}" id="game"></div>`
  }

  load (el) {
    var self = this
    var config = {
      type: Phaser.WEBGL,
      width: 640,
      height: 576,
      backgroundColor: '#2d2d2d',
      parent: 'game',
      pixelArt: true,
      scene: {
        preload,
        create
      }
    }

    this.instance = new Phaser.Game(config)

    function preload () {
      self.scene = this
      this.load.image('ground', '../assets/groundEarth_checkered.png')
      this.load.image('wall', '../assets/wallStone.png')
      this.load.image('exit', '../assets/groundExit.png')

      this.load.tilemapTiledJSON('map', '../assets/tutorialMap.json')
      this.load.atlas('hero', '../assets/spritesheet.png', '../assets/sprites.json')
    }
    function create () {
      var map = this.make.tilemap({ key: 'map' })
    
      // tiles
      var groundTiles = map.addTilesetImage('groundEarth_checkered', 'ground')
      var exitTiles = map.addTilesetImage('groundExit', 'exit')
      var wallTiles = map.addTilesetImage('wallStone', 'wall')
    
      // layers
      var groundLayer = map.createStaticLayer(0, groundTiles)
      var exitLayer = map.createStaticLayer(1, exitTiles)
      var wallLayer = map.createStaticLayer(2, wallTiles)
    
      // textures
      var heroTexture = this.textures.addSpriteSheetFromAtlas(
        'idleA',
        {
          atlas: 'hero',
          frame: 'idleA',
          frameWidth: 100,
          frameHeight: 110,
          endFrame: 16
        })
      // anims
      var heroIdleAConfig = {
        key: 'heroIdleA',
        frames: this.anims.generateFrameNumbers('idleA', { start: 1, end: 16 }),
        frameRate: 10,
        repeat: -1
      }
      var heroIdleA = this.anims.create(heroIdleAConfig)
      // sprites
      self.heroSprite = this.add.sprite(158, 230)
      self.heroSprite.play('heroIdleA')
    }
  }

  update () {
    return false
  }
}
