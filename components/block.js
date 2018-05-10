var AbstractBlock = require('./abstractBlock')
var html = require('nanohtml')

module.exports = class Block extends AbstractBlock {
  constructor (game) {
    super(game)
  }

  createElement (action) {
    return html`<div data-action="${action}" class="dib pointer">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 88 73" width="88" height="73"><defs><path d="M77.87 1.93L77.87 21.18L85.74 26.86L85.74 44.53L77.87 49.26L77.87 65.67L1.91 65.67L1.91 49.26L9.48 44.53L9.48 26.86L1.91 21.18L1.91 1.93L77.87 1.93Z" id="c3CtzjaEED"/><path d="M43.82 52.78L62.56 35.42L43.82 18.07L43.82 29.07L23.95 29.07L23.95 41.8L43.82 41.8L43.82 52.78Z" id="b36WFuXQzC"/></defs><g><g><g><filter id="shadow508646" x="-8.09" y="-8.07" width="103.83" height="88.74" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood/><feComposite in2="SourceAlpha" operator="in"/><feGaussianBlur stdDeviation="0"/><feOffset dx="0" dy="5" result="afterOffset"/><feFlood flood-color="#000000" flood-opacity="0.5"/><feComposite in2="afterOffset" operator="in"/><feMorphology operator="dilate" radius="0"/><feComposite in2="SourceAlpha" operator="out"/></filter><path d="M77.87 1.93L77.87 21.18L85.74 26.86L85.74 44.53L77.87 49.26L77.87 65.67L1.91 65.67L1.91 49.26L9.48 44.53L9.48 26.86L1.91 21.18L1.91 1.93L77.87 1.93Z" id="eL74gxDV8" fill="white" fill-opacity="1" filter="url(#shadow508646)"/></g><use xlink:href="#c3CtzjaEED" opacity="1" fill="#e3a87b" fill-opacity="1"/></g><g><use xlink:href="#b36WFuXQzC" opacity="1" fill="#7b9be3" fill-opacity="1"/></g></g></svg>
    </div>`
  }

  play (onComplete) {
    this.game.scene.tweens.add({
      targets: this.game.heroSprite,
      x: this.game.heroSprite.x + 100,
      ease: 'Linear',
      duration: 3000,
      repeat: 0,
      onComplete
    })
  }
}
