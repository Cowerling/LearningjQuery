/**
 * Created by dell on 2016-6-16.
 */

(function ($) {
    $.widget("ljq.tooltip", {
        options: {
            offsetX: 10,
            offsetY: 10,
            content: function () {
                return $(this).data("tooltip-text");
            }
        },
        _create: function () {
            this._tooltipDiv = $("<div></div>")
                .addClass("ljq-tooltip-text ui-widget ui-state-highlight ui-corner-all")
                .hide()
                .appendTo("body");
            this.element
                .addClass("ljq-tooltip-trigger")
                .on("mouseenter.ljq-tooltip", $.proxy(this._open, this))
                .on("mouseleave.ljq-tooltip", $.proxy(this._close, this));
        },
        destroy: function () {
            this._tooltipDiv.remove();
            this.element
                .removeClass("ljq-tooltip-trigger")
                .off(".ljq-tooltip");
            $.Widget.prototype.destroy.apply(this, arguments);
        },
        _open: function () {
            if (!this.options.disabled) {
                var elementOffset = this.element.offset();
                this._tooltipDiv.css({
                    position: "absolute",
                    left: elementOffset.left + this.options.offsetX,
                    top: elementOffset.top + this.element.height() + this.options.offsetY
                }).text(this.options.content.call(this.element[0]));
                this._tooltipDiv.show();
                this._trigger("open");
            }
        },
        _close: function () {
            this._tooltipDiv.hide();
            this._trigger("close");
        },
        open: function () {
            this._open();
        },
        close: function () {
            this._close();
        }
    });
})(jQuery);
