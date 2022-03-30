const {Router} = require('express');
const router = Router();

const userController = require('./controllers/userController');

router.get('/isConnected', (req,res) => {
    if(req.session.user){
        res.status(200);
        return res.json({
            "message":"déja connecté !",
            "nom":req.session.surname,
            "prenom":req.session.user
        });
    }
    //boardRouter.get('/', isAdmin, cache, mainController.findAll(Board));
})

router.post('/users/signUp',userController.signUp);

module.exports = router;