const logger = require("../config/logger")

const authController = ()=>{
    return{
        getLoginForm(req,res){
            logger.info("Login form rendered")
            res.render("components/auth/login")
        }
    }
}

module.exports = authController