"use strict";

(function () {
  //IE10判定
  if (window.ActiveXObject) {
    var uA = navigator.userAgent;
    var ieVersion = uA.match(/MSIE\s(\d+)/)[1];
    if (ieVersion < 10) {
      $("body").hide();
      document.write(
        "抱歉，请使用IE10及以上版本或其他现代浏览器浏览，如火狐、chrome、360等"
      );
    }
  }
  $(".numbers>div>span").each(function () {
    var $that = $(this);
    $(this).css({
      position: "relative",
      top: Math.floor(Math.random() * 400) + "px",
      opacity: 0,
    });
    setTimeout(function () {
      $that.animate(
        {
          top: 0,
          opacity: 1,
        },
        1500
      );
      setTimeout(function () {
        $that.animate(
          {
            opacity: 0,
          },
          1000
        );
        setTimeout(function () {
          $that.animate(
            {
              opacity: 1,
            },
            500
          );
        }, Math.floor(Math.random() * 1000 + 300));
      }, Math.floor(Math.random() * 1000 + 300));
    }, Math.floor(Math.random() * 1000 + 300));
  });
})();
