import express from "express";
import { v2 as cloudinary } from "cloudinary";
import Users from "../Db/models/users.js";

const profilePicRouter = express.Router();

profilePicRouter.put("/", async (req, res) => {
  const { userId, imageSource } = req.body;
  await cloudinary.uploader.upload(
    imageSource,
    {
      folder: `backEnd/${userId}`,
      public_id: "profile-pic",
    },
    async (error, result) => {
      if (error) {
        console.log("I found an Error");
        res.status(400).json({
          success: false,
          result: error.message,
          errCode: error.http_code,
        });
        return;
      }
      try {
        const user = await Users.findById(userId);
        // error handling
        user.profile_pic = {
          public_key: result.public_id,
          secure_url: result.secure_url,
        };

        await user.save();
        res.status(200).json({ success: true, result, user });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, result: error.message });
      }
    }
  );
});

export default profilePicRouter;
