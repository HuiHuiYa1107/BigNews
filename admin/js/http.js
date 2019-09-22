// 沙箱模式

(function (w) {
    // 后台接口
    var baseURL = 'http://localhost:8080/api/v1'
    var BigNews = {
        baseURL: baseURL,
        user_login: baseURL + '/admin/user/login',
        user_info: baseURL + '/admin/user/info',
        user_detail: baseURL + '/admin/user/detail',
        user_edit: baseURL + '/admin/user/edit',
        category_list: baseURL + '/admin/category/list',
        category_add: baseURL + '/admin/category/add',
        category_search: baseURL + '/admin/category/search',
        category_edit: baseURL + '/admin/category/edit',
        category_delete: baseURL + '/admin/category/delete',
        category_query: baseURL + '/admin/article/query',
        article_publish: baseURL + '/admin/article/publish',
        article_search: baseURL + '/admin/article/search',
        article_edit: baseURL + '/admin/article/edit',
        article_delete: baseURL + '/admin/article/delete',
        data_info: baseURL + '/admin/data/info',
        data_article: baseURL + '/admin/data/article',
        data_category: baseURL + '/admin/data/category',
        data_visit: baseURL + '/admin/data/visit',
        comment_search: baseURL + '/admin/comment/search',
        comment_pass: baseURL + '/admin/comment/pass',
        comment_reject: baseURL + '/admin/comment/reject',
        comment_delete: baseURL + '/admin/comment/delete',

    }
    w.BigNews = BigNews
})(window)