import mongoose from "mongoose";
const { Schema } = mongoose;

const UsersSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  profile_pic: {
    public_key: String,
    secure_url: String,
  },
});

const Users = mongoose.model("users", UsersSchema);
export default Users;
