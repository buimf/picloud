var x = Object;
x.init = function () {
    $.couch.urlPrefix = "http://localhost:5984";

    //    $.couch.info({
    //        success: function (data) {
    //            console.log(data);
    //        }
    //    });
    $.couch.login({
        name: "michiel",
        password: "pokpokpok",
        success: function (data) {
            console.log(data);
        },
        error: function (status) {
            console.log(status);
        }
    });

    $.couch.db("picloud").info({
        success: function (data) {
            console.log(data);
        }
    });
};


$(
    x.init()
);