import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import {Alert} from "reactstrap";
import {ASYNC_STATUS} from "../../utils/constants";
import LoadingSpinner from "../LoadingSpinner";
import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import {StyledCategorySlideItem} from "./categoriesSlider.styled";

const CategoriesSlider = () => {
  const {categories, categoriesStatus} = useSelector((state) => state.category);
  const navigate = useNavigate();
  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 2,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <SectionContainer secName={"categories-section"}>
      <SectionHead head="Categories" />
      {categoriesStatus === ASYNC_STATUS.FAILED ? (
        <Alert color="danger">Failed To GET Categories</Alert>
      ) : categoriesStatus === ASYNC_STATUS.PENDING ? (
        <LoadingSpinner verticalMargin={30} />
      ) : (
        <Slider {...settings}>
          {categories.map((catItem, idx) => (
            <div key={idx}>
              <StyledCategorySlideItem>
                <span onClick={() => navigate(`/categories/${catItem}`)}>
                  {catItem.replace("-", " ")}
                </span>
              </StyledCategorySlideItem>
            </div>
          ))}
        </Slider>
      )}
    </SectionContainer>
  );
};

export default CategoriesSlider;
