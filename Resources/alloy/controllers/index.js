function Controller() {
    function doClick() {
        alert($.label.text);
    }
    function showCatagoryMenu() {
        var catagoryWindow = Alloy.createController("catagories").getView();
        catagoryWindow.open();
    }
    function showProfileMenu() {
        var profileWindow = Alloy.createController("profile").getView();
        profileWindow.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.index.activity.onCreateOptionsMenu = function(e) {
        var __alloyId15 = {
            id: "menuItem",
            title: "Profile",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId15, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId15, Alloy.Android.menuItemCreateArgs));
        showProfileMenu ? $.__views.menuItem.addEventListener("click", showProfileMenu) : __defers["$.__views.menuItem!click!showProfileMenu"] = true;
        var __alloyId16 = {
            id: "menuItem",
            title: "Cash",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId16, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId16, Alloy.Android.menuItemCreateArgs));
        var __alloyId17 = {
            id: "menuItem",
            title: "Catagories",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId17, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId17, Alloy.Android.menuItemCreateArgs));
        showCatagoryMenu ? $.__views.menuItem.addEventListener("click", showCatagoryMenu) : __defers["$.__views.menuItem!click!showCatagoryMenu"] = true;
        var __alloyId18 = {
            id: "menuItem",
            title: "FAQ",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId18, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId18, Alloy.Android.menuItemCreateArgs));
        var __alloyId19 = {
            id: "menuItem",
            title: "Help",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId19, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId19, Alloy.Android.menuItemCreateArgs));
        var __alloyId20 = {
            id: "menuItem",
            title: "Refer To Friends",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId20, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId20, Alloy.Android.menuItemCreateArgs));
    };
    $.__views.__alloyId21 = Alloy.createController("titlebar", {
        id: "__alloyId21",
        __parentSymbol: $.__views.index
    });
    $.__views.__alloyId21.setParent($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 100,
        right: 50,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.menuItem!click!showProfileMenu"] && $.__views.menuItem.addEventListener("click", showProfileMenu);
    __defers["$.__views.menuItem!click!showCatagoryMenu"] && $.__views.menuItem.addEventListener("click", showCatagoryMenu);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;