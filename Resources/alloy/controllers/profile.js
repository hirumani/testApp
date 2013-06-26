function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.profileWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "profileWindow"
    });
    $.__views.profileWindow && $.addTopLevelView($.__views.profileWindow);
    $.__views.__alloyId20 = Alloy.createController("titlebar", {
        id: "__alloyId20",
        __parentSymbol: $.__views.profileWindow
    });
    $.__views.__alloyId20.setParent($.__views.profileWindow);
    $.__views.profileEmailView = Ti.UI.createView({
        top: Alloy.CFG.TitleBarWidth,
        id: "profileEmailView",
        borderColor: "orange",
        layout: "vertical"
    });
    $.__views.profileWindow.add($.__views.profileEmailView);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "Email ID",
        id: "__alloyId21"
    });
    $.__views.profileEmailView.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTextField({
        id: "__alloyId22"
    });
    $.__views.profileEmailView.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        borderColor: "orange",
        id: "__alloyId23"
    });
    $.__views.profileWindow.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        text: "Full Name",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTextField({
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;