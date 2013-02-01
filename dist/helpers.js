// Generated by CoffeeScript 1.4.0

/*
 * Equal
 * eq this that
*/


(function() {

  Handlebars.registerHelper('eq', function(value, compare, options) {
    if (value == compare) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /*
   * Not Equal
   * not_eq this that
  */


  Handlebars.registerHelper('not_eq', function(value, compare, options) {
    if (value != compare) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /*
   * Is (Strict Equal)
   * is this that
  */


  Handlebars.registerHelper('is', function(value, compare, options) {
    if (value === compare) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /*
   * Isnt (Strict Not Equal)
   * isnt this that
  */


  Handlebars.registerHelper('isnt', function(value, compare, options) {
    if (value !== compare) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /*
   * Greater Than
   * gt this that
  */


  Handlebars.registerHelper('gt', function(value, compare, options) {
    if (value > compare) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /*
   * Less Than
   * lt this that
  */


  Handlebars.registerHelper('lt', function(value, compare, options) {
    if (value < compare) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /*
   * Greater Than or Equal To
   * gteq this that
  */


  Handlebars.registerHelper('gteq', function(value, compare, options) {
    if (value >= compare) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /*
   * If Less Than or Equal To
   * lteq this that
  */


  Handlebars.registerHelper('lteq', function(value, compare, options) {
    if (value <= compare) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /*
   * Length
   * length this
  */


  Handlebars.registerHelper('length', function(array) {
    return array.length;
  });

  /*
   * Log, optionally with context
   * log this
   * log this true
  */


  Handlebars.registerHelper('log', function(value, context) {
    if (context == null) {
      context = false;
    }
    if (context) {
      console.log('Context', this);
    }
    return console.log('Value', value);
  });

  /*
   * Convert new line (\n\r) to <br>
   * from http://phpjs.org/functions/nl2br:480
   * nl2br this
  */


  Handlebars.registerHelper('nl2br', function(text) {
    var nl2br;
    nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
    return new Handlebars.SafeString(nl2br);
  });

}).call(this);