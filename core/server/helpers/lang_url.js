// # LANG_URL helper
// Usage: `{{lang_url url lang}}`
//
// Returns the URL suffix depending on the local


function lang_url(url, lang) {
    var url = url || '';
    var lang = lang || 'en';
    var urlSuffix = (lang&&lang!='en')?'/'+lang:'';
    return url + urlSuffix;
}

module.exports = lang_url;
