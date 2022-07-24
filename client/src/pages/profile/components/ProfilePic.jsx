import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import useFetch from "../../../hooks/useFetch";
import avatar from "../../../images/logo400.png";
import Loading from "../../../components/Loading";
import "./profile-pic.css";

function ProfilePic() {
  //TODO : get file path
  //TODO : make a put request to our api
  const [imageSource, setImageSource] = useState("");
  const { userObj, saveUserToStorage } = useContext(UserContext);
  const { isLoading, performFetch, error } = useFetch();
  const avatarImg = userObj?.profile_pic?.secure_url || avatar;

  function getFilePath(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = e => {
      setImageSource(e.target.result);
    };
  }

  useEffect(() => {
    if (imageSource) {
      saveProfilePicture();
    }
  }, [imageSource]);

  function saveProfilePicture() {
    const body = { userId: userObj._id, imageSource };
    const url = `${process.env.REACT_APP_API_URL}/profilePic`;
    performFetch(url, "PUT", body)
      .then(data => {
        console.log("data", data);
        if (data) saveUserToStorage(data.user);
      })
      .catch(console.log);
  }
  return (
    <>
      <img src={avatarImg} alt="" width={500} />
      <input
        type="file"
        name="upload-file"
        id="upload-file"
        onChange={getFilePath}
      />
      {/* <label htmlFor="upload-file" className="upload-box">
        choose file
      </label> */}
      {/* <button onClick={saveProfilePicture}>save</button> */}
      {isLoading && <Loading />}
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
    </>
  );
}

export default ProfilePic;
