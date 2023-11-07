const controller = require("../controllers/profile.controller")

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/myInfo/get_one/:id",
        controller.getOneUser
    )

    app.put(
        "/api/myInfo/update/:id",
        controller.updateUser
    );
}