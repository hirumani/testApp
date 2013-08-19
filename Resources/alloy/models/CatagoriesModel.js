exports.definition = {
    config: {
        columns: {
            image: "text",
            title: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "catagoriesModel"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("catagoriesModel", exports.definition, []);

collection = Alloy.C("catagoriesModel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;