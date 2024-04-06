function RegisterLogin(req, res, next) {
    let { email, password, conform_password } = req.body;
    if (conform_password != undefined) {
        if (!email.trim() || !password.trim() || !conform_password.trim()) {
            return res.send({ success: false, alert: "Enter All Details" });
        }
        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.trim())) {
            return res.send({
                success: false,
                alert: "Enter Email in Proper Format",
            });
        }
        if (password !== conform_password) {
            return res.send({
                success: false,
                alert: "Confirm Password Not Matched Try Again",
            });
        }
        next();
    }

    if (conform_password == undefined) {
        if (!email.trim() || !password.trim()) {
            return res.send({ success: false, alert: "Enter All Details" });
        }
        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.trim())) {
            return res.send({
                success: false,
                alert: "Enter Email in Proper Format",
            });
        }
        next();
    }
}

module.exports = RegisterLogin;