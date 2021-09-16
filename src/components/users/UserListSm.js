import { Avatar } from "@material-ui/core";
import React from "react";
import MoreMenu from "../buttons/MoreMenu";

function UserListSm({ username, email, userPic }) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="userListSm">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />

      <Avatar
        className="avatarList"
        src={userPic}
      />

      <div className="username">
        <h5>{username}</h5>
        <p>{email}</p>
      </div>

      <MoreMenu className="moreIcon" />
    </div>
  );
}

export default UserListSm;
