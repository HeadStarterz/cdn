(function (t, e) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = e();
  } else if (typeof define === 'function' && define.amd) {
    define([], e);
  } else if (typeof exports === 'object') {
    exports.WebflowTools = e();
  } else {
    t.WebflowTools = e();
  }
})(self, function () {
  'use strict';
  
  var transitionAttribute = 'r-page-transition';
  var mediaQueries = {
    desktop: '(min-width: 992px)',
    tablet: '(min-width: 768px)',
    mobile: '(max-width: 767px)'
  };

  return function () {
    var transitionElement = document.querySelector('[' + transitionAttribute + '], [page-transition]');
    if (transitionElement) {
      var totalTime = transitionElement.getAttribute('total-time');
      var linkElements = document.querySelectorAll('a:not([' + transitionAttribute + ']), a:not([page-transition])');
      var allowedDevices = (transitionElement.getAttribute('allowed-devices') || '').split(',');
      
      linkElements.forEach(function (link) {
        link.addEventListener('click', function (event) {
          var href = link.getAttribute('href');
          if (href && href.match(/^\//) && (allowedDevices.length === 0 || allowedDevices.every(function (device) {
            return mediaQueries[device.toLowerCase()] && !window.matchMedia(mediaQueries[device.toLowerCase()].trim()).matches;
          }))) {
            event.preventDefault();
            transitionElement.click();
            setTimeout(function () {
              window.location.href = href;
            }, parseInt(totalTime) || 0);
          }
        });
      });
    }
  };
}());
