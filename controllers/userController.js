const User = require('../models/User');

const userController = {

    signUp: async (req,res) => {

        //console.log("mon req : ",req);
        const newUser = new User(req.body);
        console.log("mon req.body :",req.body);
    }
}

module.exports = userController;