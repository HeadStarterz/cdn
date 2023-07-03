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
