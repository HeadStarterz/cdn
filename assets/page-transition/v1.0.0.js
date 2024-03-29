! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.WebflowTools = e() : t.WebflowTools = e()
}(self, (function() {
    return function() {
        "use strict";
        var t = "r-page-transition",
            e = {
                desktop: "(min-width: 992px)",
                tablet: "(min-width: 768px)",
                mobile: "(max-width: 767px)"
            };
        return function() {
            var o = document.querySelector("[" + t + "], [page-transition]");
            if (o) {
                var n = o.getAttribute("total-time"),
                    i = document.querySelectorAll("a:not([" + t + "]), a:not([page-transition])"),
                    r = o.getAttribute("allowed-devices"),
                    a = r && r.split(",") || [];
                i.forEach((function(t) {
                    t.addEventListener("click", (function(i) {
                        var r = t.getAttribute("href");
                        !r || !r.match(/^\//) || a.length > 0 && a.every((function(t) {
                            return e[t.toLocaleLowerCase()] && !window.matchMedia(e[t.toLocaleLowerCase().trim()]).matches
                        })) || (i.preventDefault(), o.click(), setTimeout((function() {
                            window.location.href = r
                        }), parseInt(n) || 0))
                    }))
                }))
            }
        }(), {}
    }()
}));
window.addEventListener("pageshow", function(e) {
    (e.persisted || void 0 !== window.performance && 2 === window.performance.navigation.type) && window.location.reload()
});
