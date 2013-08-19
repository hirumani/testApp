function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.profileWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "profileWindow",
        layout: "vertical"
    });
    $.__views.profileWindow && $.addTopLevelView($.__views.profileWindow);
    $.__views.__alloyId22 = Alloy.createController("titlebar", {
        id: "__alloyId22",
        __parentSymbol: $.__views.profileWindow
    });
    $.__views.__alloyId22.setParent($.__views.profileWindow);
    $.__views.__alloyId23 = Ti.UI.createTableViewSection({
        headerTitle: "Unique ID",
        id: "__alloyId23"
    });
    var __alloyId24 = [];
    __alloyId24.push($.__views.__alloyId23);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        title: "Email",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewSection({
        headerTitle: "Personal Information",
        id: "__alloyId26"
    });
    __alloyId24.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        title: "Lifestyle",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        title: "Education",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        title: "Automobile",
        id: "__alloyId29"
    });
    $.__views.__alloyId26.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        title: "Entertainment",
        id: "__alloyId30"
    });
    $.__views.__alloyId26.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewSection({
        headerTitle: "Personal Information",
        id: "__alloyId31"
    });
    __alloyId24.push($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        title: "Healthcare",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        title: "Finance",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        title: "Business",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        title: "Jobs/Recruitment",
        id: "__alloyId35"
    });
    $.__views.__alloyId31.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        title: "Food products",
        id: "__alloyId36"
    });
    $.__views.__alloyId31.add($.__views.__alloyId36);
    $.__views.tableProfile = Ti.UI.createTableView({
        data: __alloyId24,
        id: "tableProfile",
        headerTitle: "Profile"
    });
    $.__views.profileWindow.add($.__views.tableProfile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;