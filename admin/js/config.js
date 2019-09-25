//沙箱模式
(function () {
    //外接js文件一般写在head中，此时DOM树还没有加载，所以需要将代码写到入口函数中
    $(function () {
        //  日期插件初始化
        jeDate("#testico", {
            format: "YYYY-MM-DD",
            isinitVal: true,
        })
        // 富文本插件 初始化
        tinymce.init({
            selector: '#mytextarea',
            language: 'zh_CN',
            directionality: 'ltl',
            browser_spellcheck: true,
            contextmenu: false,
            plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste imagetools wordcount",
                "code"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",

        });
    });

})();