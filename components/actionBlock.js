var AbstractBlock = require('./abstractBlock')
var html = require('nanohtml')

module.exports = class ActionBlock extends AbstractBlock {
  constructor () {
    super()
  }

  createElement () {
    return html`<div class="dib pointer">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 88 73" width="88" height="73"><defs><path d="M77.87 1.93L77.87 21.18L85.74 26.86L85.74 44.53L77.87 49.26L77.87 65.67L1.91 65.67L1.91 49.26L9.48 44.53L9.48 26.86L1.91 21.18L1.91 1.93L77.87 1.93Z" id="fT3J1aRVy"/><path d="M49.97 30.55L63.3 32.3L53.65 40.79L55.93 52.78L44 47.12L32.07 52.78L34.35 40.79L24.7 32.3L38.04 30.55L44 19.64L49.97 30.55Z" id="f3xowHBGoz"/></defs><g><g><g><filter id="shadow13688299" x="-8.09" y="-8.07" width="103.83" height="88.74" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood/><feComposite in2="SourceAlpha" operator="in"/><feGaussianBlur stdDeviation="0"/><feOffset dx="0" dy="5" result="afterOffset"/><feFlood flood-color="#000000" flood-opacity="0.5"/><feComposite in2="afterOffset" operator="in"/><feMorphology operator="dilate" radius="0"/><feComposite in2="SourceAlpha" operator="out"/></filter><path d="M77.87 1.93L77.87 21.18L85.74 26.86L85.74 44.53L77.87 49.26L77.87 65.67L1.91 65.67L1.91 49.26L9.48 44.53L9.48 26.86L1.91 21.18L1.91 1.93L77.87 1.93Z" id="ecBqkYomV" fill="white" fill-opacity="1" filter="url(#shadow13688299)"/></g><use xlink:href="#fT3J1aRVy" opacity="1" fill="#f875c0" fill-opacity="1"/></g><g><use xlink:href="#f3xowHBGoz" opacity="1" fill="#efbf04" fill-opacity="1"/></g></g></svg>
    </div>`
  }
}
