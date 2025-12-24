function userRoleChecker(req, res, next) {
  const user = req.user;

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized: user not found",
    });
  }

  if (user.role === "user") {
    return next();
  }

  return res.status(403).json({
    message: "You don't have permission to access this endpoint",
  });
}

module.exports = userRoleChecker;