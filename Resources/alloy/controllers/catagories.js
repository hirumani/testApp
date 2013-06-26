function Controller() {
    function checkTableRow(e) {
        e.row.hasCheck = !e.row.hasCheck;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.catagorywindow = Ti.UI.createWindow({
        id: "catagorywindow",
        height: "400",
        width: "200",
        modal: "true"
    });
    $.__views.catagorywindow && $.addTopLevelView($.__views.catagorywindow);
    $.__views.__alloyId0 = Ti.UI.createTableViewRow({
        title: "Technology",
        id: "__alloyId0"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.__alloyId0);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        title: "Lifestyle",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        title: "Education",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "Automobile",
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        title: "Entertainment",
        id: "__alloyId5"
    });
    __alloyId1.push($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        title: "Healthcare",
        id: "__alloyId6"
    });
    __alloyId1.push($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        title: "Finance",
        id: "__alloyId7"
    });
    __alloyId1.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        title: "Business",
        id: "__alloyId8"
    });
    __alloyId1.push($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        title: "Jobs/Recruitment",
        id: "__alloyId9"
    });
    __alloyId1.push($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        title: "Food products",
        id: "__alloyId10"
    });
    __alloyId1.push($.__views.__alloyId10);
    $.__views.tableCatagorries = Ti.UI.createTableView({
        data: __alloyId1,
        id: "tableCatagorries",
        headerTitle: "Select Catagory"
    });
    $.__views.catagorywindow.add($.__views.tableCatagorries);
    checkTableRow ? $.__views.tableCatagorries.addEventListener("click", checkTableRow) : __defers["$.__views.tableCatagorries!click!checkTableRow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.tableCatagorries!click!checkTableRow"] && $.__views.tableCatagorries.addEventListener("click", checkTableRow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;