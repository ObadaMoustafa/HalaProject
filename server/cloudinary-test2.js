import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});

//rename file and path.
// cloudinary.uploader.rename(
//   "Hala/random-photos/like-and-share-subscribe",
//   "Hala/random-photos/like-and-share",
//   { invalidate: true },
//   (err, result) => {
//     console.log("error", err);
//     console.log("result ", result);
//   }
// );

// get photo info
// cloudinary.api.resource("Hala/random-photos/like-and-share", (err, result) => {
//   console.log("error", err);
//   console.log("result ", result);
// });

// delete a photo
// cloudinary.uploader.destroy(
//   "Hala/random-photos/palestine",
//   { invalidate: true },
//   (err, result) => {
//     console.log("error", err);
//     console.log("result ", result);
//   }
// );

// delete more than one file
// cloudinary.api.delete_resources_by_prefix(
//   "Hala/random-photos",
//   (err, result) => {
//     console.log("error", err);
//     console.log("result ", result);
//   }
// );

//delete folders
// cloudinary.api.delete_folder("new-photos-001", (err, result) => {
//   console.log("error", err);
//   console.log("result ", result);
// });

//add tag to files
// cloudinary.uploader.add_tag(
//   "people, sport",
//   ["cld-sample-3"],
//   { resource_type: ["video", "image"] },
//   (err, result) => {
//     console.log("error", err);
//     console.log("result ", result);
//   }
// );

// get all tags in the database
// cloudinary.api.tags({}, (err, result) => {
//   console.log("error", err);
//   console.log("result ", result);
// });

// get elements by tags
cloudinary.api.resources_by_tag("sport", (err, result) => {
  console.log("error", err);
  console.log("result ", result);
});
