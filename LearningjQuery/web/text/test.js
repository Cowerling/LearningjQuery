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
    assert.equal(this.topLis.find(".pdflink").length, 1, "a.pdflink");
});

QUnit.module("Ajax");
QUnit.test("JSON", function (assert) {
    assert.expect(2);
    var backbite = {
        term: "BACKBITE",
        part: "v.t.",
        definition: "To speak of a man as you find him when he can't find you."
    };

    var done = assert.async();

    $.getJSON("text/b.json", function (json, textStatus) {
        assert.equal(textStatus, "success", "Request successful");
        assert.deepEqual(json[1], backbite, "result array matches \"backbite\" map");
        done();
    });
});