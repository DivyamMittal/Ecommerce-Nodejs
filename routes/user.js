const { verifyTokenAndAuth } = require("./verifyToken");

const router = require("express").Router();


router.put("/:id", verifyTokenAndAuth ,async (req,resp) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    }

    try{
        const updatedUser = await User.findIdndUpdate(
            req.params.id,
            {
                $set : req.body,
            },
            {new : true}
        );
        resp.status(200).json(updatedUser);
    }
    catch(e){
        resp.status(500).json(e);
    }
})

module.exports = router;