import React from "react";
import UserListSmall from "../users/UserListSm";
import classNames from "classnames";

function CardUsersSm({ title }) {
  var liClasses = classNames({
    cardBody: true,
    scroll: true,
  });
  return (
    <div className="card">
      <div className="cardTitle">
        <h3>{title}</h3>
      </div>
      <div className={liClasses}>
        <UserListSmall username="Allie Grater" email="example@gmail.com" userPic="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <UserListSmall username="John Quil" email="example@gmail.com" userPic="https://images.pexels.com/photos/7129668/pexels-photo-7129668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <UserListSmall username="Lee A. Sun" email="example@gmail.com" userPic="https://images.pexels.com/photos/2923643/pexels-photo-2923643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <UserListSmall username="Augusta Wind" email="example@gmail.com" userPic="https://images.pexels.com/photos/7015033/pexels-photo-7015033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <UserListSmall username="Peter Graff" email="example@gmail.com" userPic="https://images.pexels.com/photos/4064817/pexels-photo-4064817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <UserListSmall username="Liz Erd" email="example@gmail.com" userPic="https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <UserListSmall username="Allie Grater" email="example@gmail.com" userPic="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <UserListSmall username="John Quil" email="example@gmail.com" userPic="https://images.pexels.com/photos/7129668/pexels-photo-7129668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
    </div>
  );
}

export default CardUsersSm;
