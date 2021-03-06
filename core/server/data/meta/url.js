var schema = require('../schema').checks,
    config = require('../../config');

// This cleans the url from any `/amp` postfixes, so we'll never
// output a url with `/amp` in the end, except for the needed `amphtml`
// canonical link, which is rendered by `getAmpUrl`.
function sanitizeAmpUrl(url) {
    if (url.indexOf('/amp/') !== -1) {
        url = url.replace(/\/amp\/$/i, '/');
    }
    return url;
}

function getUrl(data, absolute, lang) {
    if (schema.isPost(data)) {
        return config.urlFor('post', {post: data, secure: data.secure}, absolute, lang);
    }

    if (schema.isTag(data)) {
        return config.urlFor('tag', {tag: data, secure: data.secure}, absolute, lang);
    }

    if (schema.isUser(data)) {
        return config.urlFor('author', {author: data, secure: data.secure}, absolute, lang);
    }

    if (schema.isNav(data)) {
        return config.urlFor('nav', {nav: data, secure: data.secure}, absolute, lang);
    }

    // sanitize any trailing `/amp` in the url
    return sanitizeAmpUrl(config.urlFor(data, {}, absolute));
}

module.exports = getUrl;
