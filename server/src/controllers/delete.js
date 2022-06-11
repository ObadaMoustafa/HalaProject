import Users from "../Db/models/users.js";

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("userId", userId);
    const deleteUser = await Users.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      result: "User has been deleted successfully",
    });
    console.log("deleteUser", deleteUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      result: error.message,
    });
  }
};
