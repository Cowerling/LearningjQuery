/**
 * Created by dell on 2016-11-16.
 */
QUnit.module("Selecting", {
    before: function () {
        this.topLis = $("#selected-plays > li.horizontal");
    }
});
QUnit.test("Child Selector", function(assert) {
    assert.expect(1);
    assert.equal(this.topLis.length, 3, "Top LIs have horizontal class");
});
QUnit.test("Attribute Selector", function(assert) {
    assert.expect(2);
    assert.ok(this.topLis.find(".mailto").length == 1, "a.mailto");
    assert.equal(this.topLis.find(".pdflink").length == 1, ".a.pdflink");
});
QUnit.module("Ajax");