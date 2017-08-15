var machine = require('./parts/machine');
var sound = require('./parts/sound');
var samba = require('./parts/samba');

var config = {
  machine,
  sound,
  samba,
}

console.log(JSON.stringify(config, undefined, 2));
