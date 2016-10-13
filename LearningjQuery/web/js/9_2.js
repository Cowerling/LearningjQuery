/**
 * Created by dell on 2016-10-12.
 */
(function($) {
    $.fn.column = function () {
        var $cells = $();
        this.each(function () {
            var $td = $(this).closest("td, th");
            if($td.length) {
                var columnIndex = $td[0].cellIndex + 1;
                var $columnCells = $td
                    .closest("table")
                    .find("td, th")
                    .filter(":nth-child(" + columnIndex + ")");
                $cells = $cells.add($columnCells);
            }
        });
        return $cells;
    };
})(jQuery);
