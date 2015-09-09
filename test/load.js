var test = require('tape');
var FatBoy = require('../main');

test('::load:: method should add loaded modules on context, when provided',function (t) {
  t.plan(1);
  var module_name = './mock/local_var';
  var module_alias = 'alias';

  var fatboy = new FatBoy(require);
  fatboy.add(module_name, module_alias);

  fatboy.load(this);
  t.equal(this.alias, "local_var");
});


test('::load:: method should return a context with loaded modules',function (t) {
  t.plan(1);
  var module_name = './mock/local_var';
  var module_alias = 'alias';
  var expected = {alias: "local_var"};
  var fatboy = new FatBoy(require);
  fatboy.add(module_name, module_alias);

  var context = fatboy.load();
  t.deepEqual(context, expected);
});

test('::load:: method should be binded to a context',function (t) {
  t.plan(2);
  var module_name = './mock/local_var';
  var module_alias = 'alias';
  var expected = {alias: "local_var"};
  var fatboy = new FatBoy(require);
  fatboy.add(module_name, module_alias);

  var context1 = fatboy.load();
  var context2 = {};
  fatboy.load(context2);
  t.notEqual(this.alias, context1.alias);
  t.notEqual(this.alias, context2.alias);
});
