// # Disqus Helper
// Usage: `{{disqus}}`
//
var config = require('../../../config');
var hbs = require('express-hbs');

disqus = function(context) {
  if(!config.production.disqus){
    return;
  }
  var disqusUrl = context.data.blog.url + context.data.root.relativeUrl;
  var lang = context.data.root.lang;
  var disqusUuid = context.data.root.post.uuid;
  var disqusName = config.production.disqus;
  var disqusTpl = `
  <div id="disqus_thread"></div>
  <script>
  var disqus_config = function () {
  this.page.url = '${disqusUrl}';
  this.page.identifier = '${disqusUuid}';
  };
  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = '//${disqusName}.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  `;

  return new hbs.handlebars.SafeString(disqusTpl);
};

module.exports = disqus;
