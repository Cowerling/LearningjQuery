/**
 * Created by dell on 2016-6-14.
 */

(function ($) {
    $.mathUtils = {
        sum: function (array) {
            var total = 0;
            $.each(array, function (index, value) {
                value = parseFloat($.trim(value)) || 0;
                total += value;
            });
            return total;
        },
        average: function (array) {
            if($.isArray(array)) {
                return $.mathUtils.sum(array) / array.length;
            }
            return '';
        }
    };

    $.fn.swapClass = function (class1, class2) {
        this.each(function () {
            var $element = $(this);
            if ($element.hasClass(class1)) {
                $element.removeClass(class1).addClass(class2);
            } else if ($element.hasClass(class2)) {
                $element.removeClass(class2).addClass(class1);
            }
        });
    }
})(jQuery);
