var lang;

lang = function(req, res, next){
  var lang = req.baseUrl.replace('/', '') || 'en';
  req.i18n.setLocale(lang);
  res.locals.lang = lang;
  next();
}

module.exports = lang;
