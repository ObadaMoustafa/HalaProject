import Users from "../Db/models/users.js";

export const createNewUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new Error("You need to provide User name and password");
    const newUser = await Users.create({ email, password });

    res.status(200).json({ success: true, result: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, result: "can not make a new user" });
  }
};
