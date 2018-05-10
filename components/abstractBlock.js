var Nanocomponent = require('nanocomponent')

module.exports = class Block extends Nanocomponent {
  constructor (game) {
    super()
    this.game = game

    this.play = this.play.bind(this)
  }

  update () {
    return true
  }

  play () {
    return new Error('Not Implemented')
  }
}
