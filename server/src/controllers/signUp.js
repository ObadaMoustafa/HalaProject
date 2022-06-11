import Users from "../Db/models/users.js";

export const createNewUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new Error("You need to provide User name and password");
    const newUser = await Users.create({
      email: email.toLowerCase(),
      password,
    });

    res.status(200).json({ success: true, result: newUser });
  } catch (error) {
    console.log(error);
    let errorMsg;
    if (error.code === 11000) {
      errorMsg = `duplicated key ${JSON.stringify(
        error.keyValue
      )} is already exists`;
    }

    res.status(500).json({ success: false, result: errorMsg });
  }
};
