import Users from "../Db/models/users.js";

export const updateEmail = async (req, res) => {
  try {
    const { email, id } = req.body;
    const userObj = await Users.findById(id);

    if (!email) {
      res
        .status(404)
        .json({ success: false, result: "You should write an email" });
      return;
    }

    if (!userObj) {
      res.status(404).json({ success: false, result: "User not found" });
      return;
    }

    if (email.toLowerCase() === userObj.email) {
      res.status(400).json({
        success: false,
        result: "The email is the same try another one",
      });
      return;
    }
    userObj.email = email.toLowerCase();
    userObj.save();

    res.status(200).json({
      success: true,
      result: userObj,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      result: error.message,
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { id, password } = req.body;
    const userObj = await Users.findById(id);

    if (!password) {
      res
        .status(404)
        .json({ success: false, result: "You should write an password" });
      return;
    }

    if (!userObj) {
      res.status(404).json({ success: false, result: "User not found" });
      return;
    }

    if (password === userObj.password) {
      res.status(400).json({
        success: false,
        result: "The password is the same try another one",
      });
      return;
    }
    userObj.password = password;
    userObj.save();

    res.status(200).json({
      success: true,
      result: userObj,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      result: error.message,
    });
  }
};
