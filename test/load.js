var test = require('tape');
var fatboy = require('../main.js')(require);

test('basic module loading on global context',function (t) {
  t.plan(1);
  fatboy.add('./mock/module.js', 'megazord');
  fatboy.load(global);
  t.equal(megazord, 'megazord');
});
