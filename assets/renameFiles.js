#! /usr/bin/env node

var fs = require('fs')
var regex = /[a-z]*_([a-z]*)_(\d*)/i
var pathname = process.cwd() + '/' + process.argv[2]

fs.readdir(pathname, (err, files) => {
  files.forEach(file => {
    var results = file.match(regex)
    fs.renameSync(
      pathname + '/' + file, 
      pathname + '/' + results[1] + (parseInt(results[2]) + 1) + '.png')
  })
})

