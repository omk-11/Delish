async function roleChecker(req,res,next) {
    const user = req.user;

    if (user.role === 'user'){
        next();
    }else{
        res.status(403).json({
            message:'you don\'t have permission to access this endpoint'
        })
    }
}