import Users from "../Db/models/users.js";

export const signIn = async (req, res) => {
  console.log("entered");
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, result: "email and password are required" });
    return;
  }
  const userFound = await Users.findOne({ email });
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
};
