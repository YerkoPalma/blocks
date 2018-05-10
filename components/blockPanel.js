var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')
var css = require('sheetify')
var dragula = require('dragula')

var shadow = css`
  :host {
    box-shadow: inset 0px 5px #6629afb8;
  }
`
var btn = css`
  :host {
    background-color: #7b88e3;
    box-shadow: 0px 5px #320765b8;
    width: 90px;
    height: 90px;
  }
  :host svg {
    margin-left: 0.5rem;
  }
`

module.exports = class BlockPanel extends Nanocomponent {
  constructor (blocks) {
    super()
    this.blocks = blocks || {}
    this.currentBlocks = {}
    this.usedBlocks = []
    this.drake = null

    this.play = this.play.bind(this)
  }

  createElement () {
    return html`<div class="db v-btm mb3 tc ph3 ph4-l">
      <div class="dib w-50 pa3 pa2-ns">
        <div class="${shadow} dib w-100 bg-light-purple pa4 pa3-ns br-pill relative">
          <svg class="fl" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 82 70" width="82" height="70"><defs><path d="M33.02 63.63L31.61 63.5L30.21 63.32L28.83 63.09L27.46 62.81L26.12 62.49L24.8 62.11L23.51 61.7L22.23 61.23L20.99 60.73L19.76 60.18L18.57 59.59L17.4 58.96L16.27 58.29L15.16 57.59L14.08 56.84L13.04 56.06L12.04 55.25L11.06 54.4L10.13 53.52L9.23 52.61L8.37 51.66L7.55 50.69L6.77 49.68L6.04 48.65L5.34 47.59L4.69 46.51L4.09 45.4L3.53 44.27L3.02 43.12L2.56 41.94L2.15 40.74L1.79 39.52L1.48 38.29L1.23 37.04L1.03 35.77L0.89 34.48L0.8 33.18L0.77 31.87L0.8 30.56L0.89 29.26L1.03 27.97L1.23 26.7L1.48 25.45L1.79 24.22L2.15 23L2.56 21.8L3.02 20.62L3.53 19.47L4.09 18.34L4.69 17.23L5.34 16.15L6.04 15.09L6.77 14.06L7.55 13.05L8.37 12.08L9.23 11.13L10.13 10.22L11.06 9.34L12.04 8.49L13.04 7.68L14.08 6.9L15.16 6.15L16.27 5.45L17.4 4.78L18.57 4.15L19.76 3.56L20.99 3.01L22.23 2.51L23.51 2.04L24.8 1.63L26.12 1.25L27.46 0.93L28.83 0.65L30.21 0.42L31.61 0.24L33.02 0.11L34.23 0.04L34.23 0L35.79 0L35.9 0L36.02 0L76.81 0L76.81 19.25L81.23 24.93L81.23 42.6L76.81 47.33L76.81 63.74L34.23 63.74L34.23 63.7L33.02 63.63Z" id="f1kKqCm2v"/><path d="M48.92 18L48.92 17.96L48.93 17.93L48.93 17.89L48.94 17.85L48.94 17.82L48.95 17.78L48.96 17.75L48.97 17.71L48.99 17.68L49 17.65L49.02 17.62L49.03 17.58L49.05 17.55L49.07 17.52L49.09 17.49L49.11 17.46L49.14 17.44L49.16 17.41L49.19 17.38L49.21 17.36L49.24 17.34L49.27 17.31L49.3 17.29L49.33 17.27L49.36 17.25L49.39 17.23L49.43 17.21L49.46 17.19L49.5 17.18L49.53 17.17L49.57 17.15L49.61 17.14L49.64 17.13L49.68 17.12L49.72 17.11L49.76 17.11L49.8 17.1L49.84 17.1L49.88 17.09L49.92 17.09L53.92 17.09L53.96 17.09L54 17.1L54.04 17.1L54.08 17.11L54.12 17.11L54.16 17.12L54.19 17.13L54.23 17.14L54.27 17.15L54.3 17.17L54.34 17.18L54.37 17.19L54.41 17.21L54.44 17.23L54.47 17.25L54.51 17.27L54.54 17.29L54.57 17.31L54.59 17.34L54.62 17.36L54.65 17.38L54.67 17.41L54.7 17.44L54.72 17.46L54.74 17.49L54.76 17.52L54.78 17.55L54.8 17.58L54.82 17.62L54.84 17.65L54.85 17.68L54.86 17.71L54.88 17.75L54.89 17.78L54.89 17.82L54.9 17.85L54.91 17.89L54.91 17.93L54.91 17.96L54.91 18L54.91 27.52L58.91 31.59L54.91 31.59L54.91 44.28L46.02 44.28L46.02 44.28L46.02 44.24L46.02 35.44L46.02 35.4L46.02 35.36L46.01 35.32L46.01 35.28L46 35.24L45.99 35.2L45.98 35.16L45.97 35.13L45.96 35.09L45.94 35.06L45.93 35.02L45.91 34.99L45.89 34.95L45.87 34.92L45.85 34.89L45.82 34.86L45.8 34.83L45.77 34.8L45.75 34.77L45.72 34.75L45.69 34.72L45.66 34.69L45.63 34.67L45.6 34.65L45.57 34.63L45.53 34.61L45.5 34.59L45.47 34.57L45.43 34.55L45.39 34.54L45.36 34.52L45.32 34.51L45.28 34.5L45.24 34.49L45.2 34.48L45.16 34.47L45.12 34.47L45.08 34.46L45.03 34.46L44.99 34.46L40.87 34.46L40.83 34.46L40.78 34.46L40.74 34.47L40.7 34.47L40.66 34.48L40.62 34.49L40.58 34.5L40.54 34.51L40.5 34.52L40.47 34.54L40.43 34.55L40.39 34.57L40.36 34.59L40.32 34.61L40.29 34.63L40.26 34.65L40.23 34.67L40.2 34.69L40.17 34.72L40.14 34.75L40.11 34.77L40.09 34.8L40.06 34.83L40.04 34.86L40.01 34.89L39.99 34.92L39.97 34.95L39.95 34.99L39.93 35.02L39.92 35.06L39.9 35.09L39.89 35.13L39.88 35.16L39.87 35.2L39.86 35.24L39.85 35.28L39.84 35.32L39.84 35.36L39.84 35.4L39.84 35.44L39.84 44.24L39.84 44.28L39.84 44.28L30.94 44.28L30.94 31.59L26.95 31.59L42.93 15.28L48.92 21.4L48.92 18Z" id="kXYnc8lyC"/></defs><g><g><g><filter id="shadow4102578" x="-9.23" y="-10" width="100.46" height="88.74" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood/><feComposite in2="SourceAlpha" operator="in"/><feGaussianBlur stdDeviation="0"/><feOffset dx="0" dy="5" result="afterOffset"/><feFlood flood-color="#000000" flood-opacity="0.5"/><feComposite in2="afterOffset" operator="in"/><feMorphology operator="dilate" radius="0"/><feComposite in2="SourceAlpha" operator="out"/></filter><path d="M33.02 63.63L31.61 63.5L30.21 63.32L28.83 63.09L27.46 62.81L26.12 62.49L24.8 62.11L23.51 61.7L22.23 61.23L20.99 60.73L19.76 60.18L18.57 59.59L17.4 58.96L16.27 58.29L15.16 57.59L14.08 56.84L13.04 56.06L12.04 55.25L11.06 54.4L10.13 53.52L9.23 52.61L8.37 51.66L7.55 50.69L6.77 49.68L6.04 48.65L5.34 47.59L4.69 46.51L4.09 45.4L3.53 44.27L3.02 43.12L2.56 41.94L2.15 40.74L1.79 39.52L1.48 38.29L1.23 37.04L1.03 35.77L0.89 34.48L0.8 33.18L0.77 31.87L0.8 30.56L0.89 29.26L1.03 27.97L1.23 26.7L1.48 25.45L1.79 24.22L2.15 23L2.56 21.8L3.02 20.62L3.53 19.47L4.09 18.34L4.69 17.23L5.34 16.15L6.04 15.09L6.77 14.06L7.55 13.05L8.37 12.08L9.23 11.13L10.13 10.22L11.06 9.34L12.04 8.49L13.04 7.68L14.08 6.9L15.16 6.15L16.27 5.45L17.4 4.78L18.57 4.15L19.76 3.56L20.99 3.01L22.23 2.51L23.51 2.04L24.8 1.63L26.12 1.25L27.46 0.93L28.83 0.65L30.21 0.42L31.61 0.24L33.02 0.11L34.23 0.04L34.23 0L35.79 0L35.9 0L36.02 0L76.81 0L76.81 19.25L81.23 24.93L81.23 42.6L76.81 47.33L76.81 63.74L34.23 63.74L34.23 63.7L33.02 63.63Z" id="aWQY5uIG7" fill="white" fill-opacity="1" filter="url(#shadow4102578)"/></g><use xlink:href="#f1kKqCm2v" opacity="1" fill="#95cc93" fill-opacity="1"/></g><g><use xlink:href="#kXYnc8lyC" opacity="1" fill="#316e49" fill-opacity="1"/></g></g></svg>
          <div id="targetArea" class="w-80 dib h3 fl">
            ${this.usedBlocks.map(usedBlock => {
              return usedBlock
            })}
          </div>
        </div>
        <div id="blockArea">
          ${Object.entries(this.blocks).map(([actions, block]) => block.render(actions))}
        </div>
      </div>
      <button onclick=${this.play} class="${btn} pointer dib v-top mt3 input-reset bn pa4 pa3-ns br-pill">
        <svg version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 43.85 49" width="44" height="49"><defs><path d="M22.17 35.96L0.62 47.72L0.62 24.21L0.62 0.7L22.17 12.45L43.72 24.21L22.17 35.96Z" id="d3vtNJtH5c"/></defs><g><g><use xlink:href="#d3vtNJtH5c" opacity="1" fill="#95cc93" fill-opacity="1"/><g><filter id="shadow3025171" x="-6.38" y="-6.3" width="57.1" height="63.02" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood/><feComposite in2="SourceAlpha" operator="out"/><feGaussianBlur stdDeviation="0"/><feOffset dx="0" dy="2" result="afterOffset"/><feFlood flood-color="#000000" flood-opacity="0.5"/><feComposite in2="afterOffset" operator="in"/><feMorphology operator="dilate" radius="0"/><feComposite in2="SourceAlpha" operator="in"/></filter><path d="M22.17 35.96L0.62 47.72L0.62 24.21L0.62 0.7L22.17 12.45L43.72 24.21L22.17 35.96Z" id="e434Q1Uiyv" fill="white" fill-opacity="1" filter="url(#shadow3025171)"/></g></g></g></svg>
      </button>
    </div>`
  }

  load () {
    this.drake = dragula([document.getElementById('targetArea'), document.getElementById('blockArea')], {
      copy: function (el, source) {
        return true
      },
      accepts: function (el, target, source) {
        return (target === document.getElementById('targetArea')) || target !== document.getElementById('blockArea')
      },
      revertOnSpill: true,
      copySortSource: true
    })
    this.drake.on('cloned', (clone, original, type) => {
      clone.classList.add('fl')
      if (clone.classList.contains('loopBlock')) {
        clone.classList.add('absolute')
        clone.style.top = '-0.2rem'
        clone.style.left = ((this.usedBlocks.length + 1) * 82 + 10) +'px'
      }
    })
    this.drake.on('drop', (el, target, source, sibling) => {
      if (target === document.getElementById('targetArea')) {
        this.usedBlocks.push(el)
      }
    })
  }

  play (event) {
    var self = this
    var curentBlock = this.usedBlocks.shift()
    curentBlock = this.blocks[curentBlock.dataset.action]
    curentBlock.play(this.usedBlocks.length > 0 ? replay : noop)
    function replay () {
      self.play()
    }
    function noop () {}
  }

  update () {
    for (var block in this.blocks) {
      this.blocks[block].update(arguments)
    }
    return false
  }
}
