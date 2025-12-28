const User = require("../models/user.model.js");

function getme(req, res) {
  try{
    const me = req.user;

    if (me) {
        return res.json({
            me: {
                success : true,
                data: {
                    "name": me.name,
                    "email": me.email,
                    "role": me.role
                }
            }
        })
    }else{
        return res.status(401).json({ message: "Authentication required" });
    }
  }catch(err){
    return res.status(500).json({message: "server side error in getting user"} )
  }
 
}

async function updateMe(req,res){
    try {
        const newUser = req.body.newUser;
        const user = req.user;

        await User.findByIdAndUpdate(
            user._id,
            {
                $set:{
                    "name": newUser.name,
                    "email": newUser.email,
                }
            }
        )
    } catch (err) {
        
    }
}
