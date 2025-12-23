async function adminRoleChecker(req,res,next) {
    const user = req.user;

    if (user.role === 'admin'){
        next();
    }else{
        res.status(403).json({
            message:'you don\'t have permission to access this endpoint'
        })
    }
}