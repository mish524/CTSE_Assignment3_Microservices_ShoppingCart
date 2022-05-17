const mongoose = require("mongoose");
module.exports = app => {
    mongoose.connect('mongodb://localhost:27017/ShoppingCart', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(res => console.log("conneceted")).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
    if (app) {
        app.set("mongoose", mongoose);
    }
};
function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}