var test = require('tape');
var fatboy = require('../main.js')(require);

test('basic module loading on scoped context',function (t) {
  t.plan(1);
  fatboy.add('./mock/module.js', 'megazord');

  (function () {
    fatboy.load(this);
    t.equal(megazord, 'megazord');
  })();

});
