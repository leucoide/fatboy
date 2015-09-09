var test = require('tape');
FatBoy = require('../main');


test("::add:: method should store module name and alias", function (t) {
  t.plan(1);
  var module_name = './mock/local_var';
  var module_alias = 'alias';
  var expected = {'alias': './mock/local_var'};
  var fatboy = new FatBoy(require);
  fatboy.add(module_name, module_alias);
  t.deepEqual(fatboy.modules, expected);
});

test("::add:: method should store a default alias when none provided", function (t) {
  t.plan(1);
  var expected = {'fs': 'fs'};
  var fatboy = new FatBoy(require);
  fatboy.add('fs');
  t.deepEqual(fatboy.modules, expected);
});
