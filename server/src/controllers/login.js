import Users from "../Db/models/users.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, result: "email and password are required" });
      return;
    }
    const userFound = await Users.findOne({ email: email.toLowerCase() });
    if (userFound) {
      // if the password match
      if (userFound.password === password) {
        res.status(200).json({ success: true, result: userFound });
      } else {
        res
          .status(400)
          .json({ success: false, result: "password doesn't match" });
      }
      // if user not found
    } else {
      res
        .status(404)
        .json({ success: false, result: "email not found try a valid email" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      result: error.message,
    });
  }
};
