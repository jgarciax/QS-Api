const jwt = require('jsonwebtoken')

//Creacion del token customer and u
const createToken = async(user)=> {
    try{
        let payload = {
            sub: user.id,
            name: user.name,
            lastName: user.lastName,
            code: user.code,
            email: user.email,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + (60 * 120)
        }
        return jwt.sign(payload, `${process.env.SECRET_KEY}`);
    }catch(err){
        console.err(err);
        return err;
    }
}

module.exports = createToken