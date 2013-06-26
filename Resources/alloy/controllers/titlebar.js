function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.titlebar = Ti.UI.createView({
        top: 0,
        left: 0,
        height: Alloy.CFG.TitleBarWidth,
        width: 500,
        backgroundColor: "orange",
        id: "titlebar",
        layout: "horizontal"
    });
    $.__views.titlebar && $.addTopLevelView($.__views.titlebar);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        color: "black",
        text: "SmartBreak",
        id: "__alloyId26"
    });
    $.__views.titlebar.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createImageView({
        left: "13%",
        width: 60,
        height: 50,
        image: "/images/banner.png",
        id: "__alloyId27"
    });
    $.__views.titlebar.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createImageView({
        left: "13%",
        width: 60,
        height: 50,
        image: "/images/cinema.png",
        id: "__alloyId28"
    });
    $.__views.titlebar.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createImageView({
        left: "13%",
        width: 60,
        height: 50,
        image: "/images/wallet.png",
        id: "__alloyId29"
    });
    $.__views.titlebar.add($.__views.__alloyId29);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;