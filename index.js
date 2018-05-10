var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')

css('tachyons')
var dragula = css`
  :host .gu-mirror {
    position: fixed !important;
    margin: 0 !important;
    z-index: 9999 !important;
    opacity: 0.8;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
    filter: alpha(opacity=80);
  }
  :host .gu-hide {
    display: none !important;
  }
  :host.gu-unselectable {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }
  :host .gu-transit {
    opacity: 0.2;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
    filter: alpha(opacity=20);
  }
`

var Block = require('./components/block.js')
var BlockPanel = require('./components/blockPanel.js')
var ActionBlock = require('./components/actionBlock.js')
var Game = require('./components/game.js')
var game = new Game()
// var LoopBlock = require('./components/loopBlock.js')
var panel = new BlockPanel({
  block: new Block(game),
  action: new ActionBlock(game) /* ,
  loop: new LoopBlock() */
})

var app = choo()
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body class="${dragula} pa3 dt w-100 vh-100 bg-washed-red">
      ${game.render()}
      ${panel.render()}
    </body>
  `
}
