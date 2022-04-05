$(document).ready(function () {
    // 按下確認購買按鈕跳轉到
    $('.modal-footer>.confirm').click(function (e) {
        e.preventDefault();
        $(location).attr('href', 'buyConfirm.html');
    });
});