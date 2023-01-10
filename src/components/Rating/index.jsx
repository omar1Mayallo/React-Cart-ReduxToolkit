import React from "react";
import {MdStar, MdStarBorder} from "react-icons/md";

const Rating = ({rating}) => {
  return (
    <div className="rating-comp d-flex align-items-center">
      <Stars rating={rating} />
    </div>
  );
};

function Stars({rating}) {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((i) =>
        rating >= i ? (
          <MdStar size={22} color={"gold"} key={i} />
        ) : (
          <MdStarBorder size={22} color={"gold"} key={i} />
        )
      )}
    </div>
  );
}

export default Rating;
