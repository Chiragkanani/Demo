const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        if (req.cookies?.token) {
            try {
                let decoded = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
                next();
            } catch (err) {
                console.log(err);
                return res.redirect("/login");
            }
        } else {
            return res.redirect("/login");
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = auth;