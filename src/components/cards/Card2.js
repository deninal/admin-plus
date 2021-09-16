import React from "react";

function Card2({ Icon, ButtonIcon, title, cardBodyTitle, cardButtonText }) {
  return (
    <div className="card">
      <div className="cardTitle">
        <Icon className="cardTitleIcon" />
        <h3>{title}</h3>
      </div>
      <div className="cardBody">
        <div className="cardBodyText">
          <h3>{cardBodyTitle}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="cardButtonWrapper">
        <div className="cardButton">
          {cardButtonText}
          <ButtonIcon className="buttonIcon" />
        </div>
      </div>
    </div>
  );
}

export default Card2;
