function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.catagoryRow = Ti.UI.createTableViewRow({
        id: "catagoryRow"
    });
    $.__views.catagoryRow && $.addTopLevelView($.__views.catagoryRow);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title"),
        id: "__alloyId11"
    });
    $.__views.catagoryRow.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        image: "undefined" != typeof $model.__transform["image"] ? $model.__transform["image"] : $model.get("image"),
        id: "__alloyId12"
    });
    $.__views.catagoryRow.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;