const { authJwt } = require("../middleware/index");
const controller = require("../Controller/expense.controller")


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/expense/getall",
        [authJwt.verifyToken],
        controller.getAll
    );


};