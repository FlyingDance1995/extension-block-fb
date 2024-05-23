function isFacebook(url) {
    let currentUrl = new URL(url)['host'];
    let isFacebook = currentUrl['indexOf']('facebook.com') > -1;
    if (isFacebook ||  currentUrl['indexOf']('pages.fm') > -1) {
        return true
    };
    return false
}

// Check khi nào url trên tab chrome thay đổi thì hoạt động hàm này
chrome['tabs']['onUpdated']['addListener'](function(tabID, response) {
    if (response.status === 'complete') {
        chrome['tabs']['get'](tabID, function(resp) {
            //isFacebook
            if (isFacebook(resp['url'])) {
                // Sử dụng file app.js để tạo thêm các button trong tab google
                chrome['tabs']['executeScript'](tabID, {
                    file: 'facebook.js'
                }, function() {});
                // Sử dụng css để thêm style cho button
                chrome['tabs']['insertCSS'](tabID, {
                    file: 'app.css'
                })
            }
        })
    }
});

