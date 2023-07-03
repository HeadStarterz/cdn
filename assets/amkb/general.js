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
