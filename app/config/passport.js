const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const conn = require("../config/mysql_connection")


const passport = (passport)=>{

    let opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY
    }

    passport.use(new JwtStrategy(opts,async function (jwt_payload, done) {
        try {
            let result = await conn.query(
                `select * from Users where email = '${jwt_payload.email}'`
            );
            if (result[0].length >= 1) {
                if (result[0][0].status === "Active") {
                    return done(null, result)
                }else{
                    return done(null, false)
                }
            } else {
                return done(null, false)
            }
        } catch (error) {
            return done(error,false)
        }
       
    }));
}

module.exports = passport