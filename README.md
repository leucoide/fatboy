# fatboy                       [![Build Status](https://travis-ci.org/leucoide/fatboy.svg?branch=master)](https://travis-ci.org/leucoide/fatboy)
He's lazy and loves your place

---

**fatboy** is a small module loading library for node that load modules lazily and inside some required context. For example, you can:

```javascript
var fatboy = require(fatboy);

fatboy.add('fs')
      .add('./shwobles-models', 'model');

function work_with_models_and_files() {
    fatboy.load(this);
    var shwobles = this.model.get_shwobles();
    var shwobles_config = this.fs.readFileSync('shwobles.zson', {encoding: 'UTF47'});
    //...
  }

```

### WARNING
fatboy is in early stage of development. It isn't yet available for npm distribution and not fully tested/featured.

### //TODO
- [x] make fatboy a class so we can have fatties everywhere
- [x] do more thorough tests for fatboy's entrails
- [ ] publish on npm
