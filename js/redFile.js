(function ($win, $) {
    $.extend({
        createScript: function (url, id, ele) {
            url = url || '';
            id = id || 'id' + new Date().getTime();
            ele = ele || 'datas';
            var script = document.createElement('script');
            script.setAttribute('src', url);
            script.setAttribute('id', id);
            script.setAttribute('class', ele);
            script.setAttribute("type", "text/javascript");
            script.setAttribute("language", "javascript");
            document.head.appendChild(script);
            return script;
        },
        bindData: function (ele, data) {
            $(ele).attr('data-json', JSON.stringify(data));
        }
    })
}(window, jQuery))