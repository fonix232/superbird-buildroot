"use strict";

window.οnresize = function () {
    adaptIFrame('iframe_settings', 'iframe_main', 4);
};
layui.use(['layer', 'element'], function () {
    var layer = layui.layer
        , element = layui.element;

    function load_iframe_content(url) {
        let _lang = get_browser_language();
        let src = url + "?lang=" + _lang;
        $("#iframe_settings").attr("src", src);
    }

    load_iframe_content("ipc/video.html");

    element.on('nav(setting-navi)', function (elem) {
        let url = elem.attr('data-url');
        if (url) {
            load_iframe_content(url);
        }
    });
});

