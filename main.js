module.exports = function (req) {
  var modules = {};
  function load_modules() {
    // console.log(this);
    Object.keys(modules).forEach(function (name) {
      m = modules[name];
      this[name] = req(m);

    }.bind(this));
  }
  var public = {
    add:function(module, name) {
      name = name || module;
      modules[name] = module;

      return this;
    },
    load:function (context) {
      load_modules.bind(context)();
    }
  };
  return public;
};
