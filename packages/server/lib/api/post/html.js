"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _requestPromiseAny = _interopRequireDefault(require("request-promise-any"));

var _jsdom = _interopRequireDefault(require("jsdom"));

var _index = require("readability/index");

var _cheerio = _interopRequireDefault(require("cheerio"));

var _url = require("url");

/* eslint no-console: 0 */
var fbHeader = {
  'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'
};
var relevantHeader = {
  'User-Agent': 'This is a user request for article matadata for Relevant Community (https://relevant.community | info@relevant.community)'
};
var URL_REGEX = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%_+~#=]{2,256}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_+~#?&//=]*)/);
var HTML_REGEX = new RegExp(/<[^>]*>/, 'gm');

exports.extractDomain = url => {
  var domain;

  if (url.indexOf('://') > -1) {
    domain = url.split('/')[2];
  } else {
    domain = url.split('/')[0];
  }

  domain = domain.split(':')[0];
  var noPrefix = domain;

  if (domain.indexOf('www.') > -1) {
    noPrefix = domain.replace('www.', '');
  }

  return noPrefix;
};

function stripHTML(text) {
  return (text || '').replace(HTML_REGEX, '');
}

exports.getReadable = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (uri) {
    var article;

    try {
      var body = yield (0, _requestPromiseAny.default)({
        url: uri,
        jar: true,
        headers: uri.match('bloomberg.com') || uri.match('washingtonpost.com') ? relevantHeader : fbHeader
      }); // let doc = new JSDOMParser().parse(body);

      var doc = _jsdom.default.jsdom(body, {
        features: {
          FetchExternalResources: false,
          ProcessExternalResources: false
        }
      });

      article = new _index.Readability(uri, doc).parse();
      if (!article) throw new Error("Couldn't parse doc"); // console.log(article.byline);
    } catch (err) {
      console.log('ERROR getting readable version', uri);
      throw err;
    }

    return article;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.trimToLength = (doc, length) => {
  Array.prototype.slice.call(doc.getElementsByTagName('figure')).forEach(item => item.remove());
  var totalLength = 0;
  Array.prototype.slice.call(doc.getElementsByTagName('*')).forEach(el => {
    if (totalLength > length) return el.remove();
    var elChildNode = el.childNodes;
    elChildNode.forEach(child => {
      if (child.nodeType === 3) {
        var text = child.textContent;
        var l = text.split(/\s+/).length;
        if (l > 4) totalLength += l;
      }
    });
    return null;
  });
  return doc;
};

exports.generatePreview = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (body, uri, reqUrl, noReadability) {
    // console.log('Generate Preview ', uri);
    body = body.replace('<!--', '').replace('-->', '');

    var $ = _cheerio.default.load(body);

    var redirect = $("meta[http-equiv='refresh']")[0];
    var redirectUrl;

    if (redirect && redirect.attribs && redirect.attribs.content) {
      redirectUrl = redirect.attribs.content.split('URL=')[1];
      if (redirectUrl) redirectUrl = redirectUrl.replace(/'/g, '');

      if (redirectUrl && uri.match('twitter.com') && redirectUrl.match('mobile.twitter.com')) {
        redirectUrl = uri;
      }
    }

    if (redirectUrl && redirectUrl.match('http') && exports.extractDomain(redirectUrl) !== '' && exports.extractDomain(redirectUrl) !== exports.extractDomain(uri) && reqUrl !== redirectUrl) {
      return {
        redirect: true,
        uri: redirectUrl
      };
    }

    var canonical = $("link[rel='canonical']")[0];
    if (canonical && canonical.attribs) canonical = canonical.attribs;else canonical = null;

    if (canonical && canonical.href) {
      if (!URL_REGEX.test(canonical.href)) {
        canonical.href = exports.extractDomain(uri) + canonical.href;
      }
    }

    if (canonical && canonical.href && canonical.href.match('http') && exports.extractDomain(canonical.href) !== exports.extractDomain(uri) && reqUrl !== canonical.href) {
      return {
        redirect: true,
        uri: canonical.href
      };
    }

    if (uri.match('apple.news')) {
      try {
        var articleUrl = body.match(/redirectToUrl\("(.*)"/)[0].replace(/redirectToUrl\(|"/g, '');

        if (articleUrl) {
          return {
            redirect: true,
            uri: articleUrl
          };
        }
      } catch (err) {
        console.log(err);
      }
    }

    var data = {
      title: null,
      description: null,
      image: null,
      'og:type': null,
      'og:title': null,
      'og:description': null,
      'og:image': null,
      'og:image:url': null,
      'og:url': null,
      'al:web:url': null,
      'twitter:title': null,
      'twitter:image': null,
      'twitter:image:src': null,
      'twitter:description': null,
      'twitter:site': null,
      'twitter:creator': null,
      news_keywords: null,
      keywords: null,
      'article:tag': null,
      author: null,
      'article:author': null
    }; // ads milti element concotenation

    var miltiElement = ['news_keywords', 'keywords', 'article:tag', 'author', 'article:author'];
    var meta = $('meta');
    var $title = $('title');
    var keys = Object.keys(meta);
    data.title = $title.eq(0).text();
    Object.keys(data).forEach(s => {
      keys.forEach(key => {
        if (meta[key].attribs && (meta[key].attribs.property === s || meta[key].attribs.name === s || meta[key].attribs.itemprop === s)) {
          if (!data[s]) data[s] = meta[key].attribs.content;else if (miltiElement.find(m => m === s)) {
            data[s] += ', ' + meta[key].attribs.content;
          }
        }
      });
    });
    var description = null;
    var title = null;
    var image = null;
    title = data['og:title'] || data['twitter:title'] || data.title;
    description = stripHTML(data.description || data['og:description'] || data['twitter:description']).trim();
    image = data['og:image'] || data['og:image:url'] || data['twitter:image'] || data['twitter:image:src'] || data.image; // why prioritise og tags? flipboard?

    var url;

    if (uri.match('flip.it')) {
      url = data['al:web:url'] || data['og:url'] || uri;
    }

    url = uri || data['al:web:url'] || data['og:url'];
    var tags = data.news_keywords || data.keywords;
    var domain = exports.extractDomain(url);
    var originalUrl = (0, _url.parse)(uri);
    var cannonicalUrl = (0, _url.parse)(url);
    var k1 = data.keywords ? data.keywords.split(',').map(k => k.trim()) : [];
    var k2 = data.news_keywords ? data.news_keywords.split(',').map(k => k.trim()) : [];
    var k3 = data['article:tag'] ? data['article:tag'].split(',').map(k => k.replace('--primarykeyword-', '').trim()).filter(k => !k.match('--')) : [];
    var keywords = [...new Set([...k1, ...k2, ...k3])]; // general fix for mismatch

    if (originalUrl.pathname !== cannonicalUrl.pathname) {
      url = originalUrl.protocol + '//' + originalUrl.host + originalUrl.pathname;
    }

    var amp = $('[type="application/ld+json"]').eq(0).text();
    var ampKeywords;
    var ampAuthor;

    if (amp) {
      try {
        amp = amp.replace('//<![CDATA[', '').replace('// <![CDATA[', '').replace('//]]>', '').replace('// ]]>', '').trim();
        amp = JSON.parse(amp);
        if (!amp) throw new Error('no amp');
        ampAuthor = amp.author ? amp.author.name : null;
        ampKeywords = amp.keywords && amp.keywords.length ? amp.keywords : null;
        if (typeof ampAuthor === 'string') ampAuthor = [ampAuthor];
      } catch (err) {// console.log(amp);
        // console.log(err);
      }
    } // console.log('amp: ', amp ? JSON.parse(amp) : null);
    // console.log('url ', url);
    // console.log('article:author ', data['article:author']);
    // console.log('author ', data['author']);
    // console.log('amp author ', ampAuthor);
    // console.log('regular keywords ', keywords);
    // console.log('amp keywords', ampKeywords);


    data.author = data.author || '';
    data['article:author'] = data['article:author'] || '';
    var metaAuthor = data.author.split(/,|\sand\s/).map(a => a.trim()).filter(a => a !== '');
    ampAuthor = ampAuthor || [];
    var author = [...ampAuthor, ...metaAuthor];
    author = [...new Set(author)].filter(a => !a.match('http'));

    if (ampKeywords && ampKeywords.length && !keywords.length) {
      if (Array.isArray(ampKeywords)) {
        ampKeywords = ampKeywords.filter(k => !k.match('@')).map(k => k.toLowerCase());
      }
    }

    keywords = keywords.map(k => k.toLowerCase());
    keywords = [...new Set([...(keywords || []), ...(ampKeywords || [])])];
    keywords = keywords.map(k => k.replace(/tag:|publication:|elevated:false|lockedpostsource:0/, '')).filter(k => k.trim() !== '');

    var doc = _jsdom.default.jsdom(body, {
      features: {
        FetchExternalResources: false,
        ProcessExternalResources: false
      }
    });

    var article;

    if (!noReadability) {
      try {
        article = new _index.Readability(url, doc).parse();
      } catch (err) {
        console.log('Readability ERR ', err);
      }
    }

    var short;

    if (article && article.article) {
      try {
        short = article.excerpt || exports.trimToLength(article.article, 140).innerHTML;
      } catch (err) {
        console.log(err);
      }

      if (!author.length && article.byline) {
        var by = article.byline.split(/\n|,|•/).map(a => a.replace(/by|by:\s/i, '').trim()).filter(a => a !== '' && !a.match(/^by$/i) && a.length > 2 && !a.match('UTC') && Number.isNaN(new Date(a).getTime()) && !a.match('http') // && !a.match(/2017|2016|2015|2018/)
        );
        author = by[0] ? [by[0]] : [];
      }
    }

    if (image && image.indexOf('http://') !== 0 && image.indexOf('https://') !== 0) {
      image = 'http://' + domain + image;
    }

    if (!title && url.match('.pdf')) {
      title = url.substring(url.lastIndexOf('/') + 1);
    }

    var obj = {
      image,
      description,
      title,
      url,
      domain,
      tags,
      shortText: short,
      articleAuthor: author || null,
      keywords
    };

    if (!image || !title) {// console.log('url parse incomplete');
      // console.log(data);
      // console.log(uri);
      // console.log($('head').html());
    }

    $ = null;
    body = null;
    article = null;
    data = null;
    doc = null;
    return {
      redirect: false,
      result: obj
    };
  });

  return function (_x2, _x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=html.js.map