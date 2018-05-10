var AbstractBlock = require('./abstractBlock')
var html = require('nanohtml')

module.exports = class LoopBlock extends AbstractBlock {
  constructor () {
    super()
  }

  load (el) {
    var self = this
  }

  createElement () {
    return html`<div class="dib pointer loopBlock">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 138 90" width="138" height="90"><defs><path d="M129.37 19.43L129.37 38.68L137.24 44.36L137.24 62.03L129.37 66.76L129.37 83.17L53.41 83.17L53.41 66.76L60.98 62.03L60.98 44.36L53.41 38.68L53.41 21.93L24.88 21.93L24.88 37.91L32.87 47.74L32.87 62.89L24.88 70.57L24.88 83.17L2.83 83.17L2.83 67.65L11.04 61.31L11.04 46.16L2.83 38.05L2.83 2.56L129.35 2.56L129.35 19.43L129.37 19.43Z" id="aNj9x7G4N"/><path d="M97.2 29.95L98.56 30.19L99.89 30.52L101.18 30.93L102.42 31.43L103.61 32L104.74 32.65L105.82 33.38L106.83 34.17L107.78 35.02L108.66 35.93L109.46 36.9L110.18 37.92L110.82 39L111.37 40.11L111.83 41.27L112.2 42.47L112.46 43.7L112.63 44.96L112.68 46.25L112.63 47.54L112.46 48.8L112.2 50.03L111.83 51.23L111.37 52.39L110.82 53.5L110.18 54.58L109.46 55.6L108.66 56.57L107.78 57.48L106.83 58.33L105.82 59.12L104.74 59.85L103.61 60.5L103.45 60.57L101.45 54.26L101.92 53.91L102.87 53.06L103.71 52.11L104.41 51.07L104.98 49.95L105.4 48.77L105.66 47.54L105.75 46.25L105.66 44.96L105.4 43.73L104.98 42.55L104.41 41.43L103.71 40.39L102.87 39.44L101.92 38.59L100.87 37.83L99.72 37.2L98.48 36.69L97.17 36.31L95.79 36.08L94.37 36L92.94 36.08L91.57 36.31L90.26 36.69L89.02 37.2L87.87 37.83L86.81 38.59L85.86 39.44L85.03 40.39L84.32 41.43L83.75 42.55L83.33 43.73L83.08 44.96L82.99 46.25L83.08 47.54L83.33 48.77L83.75 49.95L84.32 51.07L85.03 52.11L85.7 52.88L86.32 53.47L86.81 53.91L87.68 54.53L87.79 54.86L90.9 51.63L92.21 62.75L81.05 61.86L83.38 59.44L82.92 59.12L81.9 58.33L80.95 57.48L80.08 56.57L79.28 55.6L78.55 54.58L77.92 53.5L77.36 52.39L76.9 51.23L76.54 50.03L76.27 48.8L76.11 47.54L76.05 46.25L76.11 44.96L76.27 43.7L76.54 42.47L76.9 41.27L77.36 40.11L77.92 39L78.55 37.92L79.28 36.9L80.08 35.93L80.95 35.02L81.9 34.17L82.92 33.38L83.99 32.65L85.13 32L86.32 31.43L87.56 30.93L88.84 30.52L90.17 30.19L91.54 29.95L92.94 29.8L94.37 29.75L95.8 29.8L97.2 29.95Z" id="b7Q2DSEJG"/></defs><g><g><g><filter id="shadow12826737" x="-7.17" y="-7.44" width="154.41" height="105.61" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood/><feComposite in2="SourceAlpha" operator="in"/><feGaussianBlur stdDeviation="0"/><feOffset dx="0" dy="5" result="afterOffset"/><feFlood flood-color="#000000" flood-opacity="0.5"/><feComposite in2="afterOffset" operator="in"/><feMorphology operator="dilate" radius="0"/><feComposite in2="SourceAlpha" operator="out"/></filter><path d="M129.37 19.43L129.37 38.68L137.24 44.36L137.24 62.03L129.37 66.76L129.37 83.17L53.41 83.17L53.41 66.76L60.98 62.03L60.98 44.36L53.41 38.68L53.41 21.93L24.88 21.93L24.88 37.91L32.87 47.74L32.87 62.89L24.88 70.57L24.88 83.17L2.83 83.17L2.83 67.65L11.04 61.31L11.04 46.16L2.83 38.05L2.83 2.56L129.35 2.56L129.35 19.43L129.37 19.43Z" id="c7Okuo4JC" fill="white" fill-opacity="1" filter="url(#shadow12826737)"/></g><use xlink:href="#aNj9x7G4N" opacity="1" fill="#7b88e3" fill-opacity="1"/></g><g><use xlink:href="#b7Q2DSEJG" opacity="1" fill="#def297" fill-opacity="1"/></g></g></svg>
    </div>`
  }
}