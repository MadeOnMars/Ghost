var _               = require('lodash'),
    config          = require('../config');

var lang;

lang = function(req, res, next){
  var lang = 'en';
  var parsedUrl = req.baseUrl.split('/');
  for(var i=0;i<config.locales.length;i++){
    if(parsedUrl.indexOf(config.locales[i]) != -1){
      lang = config.locales[i];
      break;
    }
  }
  req.i18n.setLocale(lang);
  req.lang = lang;
  res.locals.lang = lang;
  next();
}

module.exports = lang;
