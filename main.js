function FatBoy(req) {
  this.req = req;
}

FatBoy.prototype = {
  modules: undefined,
  load:function (context) {
    if (this.modules) {
      context = context || {};
      var fatboy = this;
      Object.keys(this.modules).forEach(function (alias) {
        m = fatboy.modules[alias];
        context[alias] = fatboy.req(m);

      }.bind(context));
      return context;
    }
  },
  add: function(module_name, alias) {
      this.modules = this.modules || {};
      alias = alias || module_name;
      this.modules[alias] = module_name;

      return this;
    }
};

module.exports = FatBoy;
