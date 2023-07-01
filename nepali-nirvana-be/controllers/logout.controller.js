const httpLogoutHandler = async function (req, res) {
  res.cookie("aT", "", {
    httpOnly: true,
    maxAge: 1,
  });
  res.cookie("rT", "", {
    httpOnly: true,
    maxAge: 1,
  });
  return res.status(200).json({ success: "Logout successful" });
};

module.exports = {
  httpLogoutHandler,
};
