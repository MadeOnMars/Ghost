// # Translate Helper
// Usage: `{{__ 'String to translate'}}`
//

__ = function(key, context) {
  return context.data.root.__(key);
};

module.exports = __;
