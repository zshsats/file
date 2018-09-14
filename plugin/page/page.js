(function ($) {
    $.extend({
        pageFun: function (total, num, cal) {
            $(".up-page").after(updatePage(0, 6, total));
            $(".page-content").on("click", ".item", function () {
                var pageNum = parseInt($(this).attr("data-value"));
                if (pageNum > 5) {
                    $("[data-value='3']").addClass("disabled").text("...");
                    $("[data-value='3']").nextAll().each(function () {
                        var afterNum = parseInt($(this).attr("data-value"));
                        if (!isNaN(afterNum)) {
                            $(this).remove();
                        }
                    });
                    $("[data-value='3']").after(updatePage(pageNum, 3, total));
                } else if (pageNum == 2) {
                    $("[data-value='3']").removeClass("disabled");
                    $("[data-value='3']").text("3");
                    $("[data-value='3']").nextAll().each(function () {
                        var afterNum = parseInt($(this).attr("data-value"));
                        if (!isNaN(afterNum)) {
                            $(this).remove();
                        }
                    });
                    $("[data-value='3']").after(updatePage(pageNum + 1, 3, total));
                };
                if ($(this).attr("data-value") == "first") {
                    cleanPageDom();
                    $(".up-page").after(updatePage(0, 6, total));
                }
                if ($(this).attr("data-value") == "last") {
                    if (total - 6 > 0) {
                        cleanPageDom();
                        $(".up-page").after(updatePage(total - 6, 6, total));
                    }
                }
                if ($(this).attr("data-value") == "up") {
                    var start = parseInt($(".item-page").eq(5).attr("data-value"));
                    if (!isNaN(start)) {
                        if (start < total) {
                            cleanPageDom();
                            $(".up-page").after(updatePage(start, 6, total));
                        } else {
                            cleanPageDom();
                            $(".up-page").after(updatePage(0, 6, total));
                        }
                    } else {
                        cleanPageDom();
                        $(".up-page").after(updatePage(0, 6, total));
                    }
                }
                if ($(this).attr("data-value") == "next") {
                    var start = parseInt($(".item-page").eq(-1).attr("data-value"));
                    if (!isNaN(start)) {
                        if (start < total) {
                            cleanPageDom();
                            $(".up-page").after(updatePage(start, 6, total));
                        } else {
                            cleanPageDom();
                            $(".up-page").after(updatePage(0, 6, total));
                        }
                    } else {
                        cleanPageDom();
                        $(".up-page").after(updatePage(0, 6, total));
                    }
                }
                if (!isNaN(pageNum)) {
                    if (!$(this).hasClass("disabled")) {
                        cal(pageNum);
                    }
                }
            });
        }
    });
    function updatePage(nowNum, pageNum, total) {
        var pageHtml = "";
        for (var i = nowNum; i < pageNum + nowNum; i++) {
            if (!(i + 1 > total)) {

                pageHtml += "<div class='item item-page' data-value=" + (i + 1) + ">" + (i + 1) + "</div>";

            }
        };
        return pageHtml;
    }
    function cleanPageDom() {
        $(".item").nextAll().each(function () {
            var afterNum = parseInt($(this).attr("data-value"));
            if (!isNaN(afterNum)) {
                $(this).remove();
            }
        });
    }
})(jQuery);