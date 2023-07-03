// protect emails from crawler
$(function() {
    $('a[href^="mailto:"]').each(function() {
        var linkText = this.innerHTML;
        var href = this.href;

        if (linkText.includes('[at]') && linkText.includes('[dot]')) {
            var updatedLinkText = linkText.replace('[at]', '@').replace(/\[dot\]/g, '.');
            this.innerHTML = updatedLinkText;
        }

        var newHref = href.replace('[at]', '@').replace(/\[dot\]/g, '.');
        this.href = "mailto:" + newHref.replace('mailto:', '');
    });
});

// change staging domains to slug
$(document).ready(function() {
    $('a[href]').each(function() {
        var href = $(this).attr('href');
        var domain1 = "amkb.headstarterz.dev";
        var domain2 = "amkb.webflow.io";
        
        if(href.indexOf(domain1) != -1) {
            var newHref = href.replace('http://' + domain1, '').replace('https://' + domain1, '');
            $(this).attr('href', newHref);
        }
        
        if(href.indexOf(domain2) != -1) {
            var newHref = href.replace('http://' + domain2, '').replace('https://' + domain2, '');
            $(this).attr('href', newHref);
        }
    });
});
