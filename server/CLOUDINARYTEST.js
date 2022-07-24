//? cloudinary upload fundamentals
import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});

function uploadToMyCloud() {
  cloudinary.uploader.upload(
    "../server/src/images/295984275031211.png",
    {
      folder: "Hala/random-photos",
      public_id: "like-and-share",
      format: "jpg",
    },
    (err, result) => {
      if (err) throw new Error(err.message);
      console.log(result);
    }
  );
}

uploadToMyCloud();
