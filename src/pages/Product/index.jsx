import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import {Badge, Col, ListGroupItem, Row} from "reactstrap";
import CustomButton from "../../components/CustomButton";
import LoadingSpinner from "../../components/LoadingSpinner";
import Rating from "../../components/Rating";
import SectionContainer from "../../components/SectionContainer";
import {useGetProductDetails} from "../../hooks/products/useGetProductDetails";
import {increaseQty} from "../../services/cart/cartSlice";
import {ASYNC_STATUS} from "../../utils/constants";

const Product = () => {
  const {id} = useParams();
  const [productDetails, productDetailsStatus] = useGetProductDetails(id);
  const dispatch = useDispatch();
  const settings = {
    customPaging: (i) => {
      return (
        <span>
          <img
            src={productDetails?.images[i]}
            alt="carousel-img"
            width={50}
            height={50}
            style={{objectFit: "contain"}}
          />
        </span>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb details",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SectionContainer secName={"product-details-section"}>
      {productDetailsStatus === ASYNC_STATUS.PENDING ? (
        <LoadingSpinner verticalMargin={50} />
      ) : (
        <Row>
          {/* Slider */}
          <Col lg={5} md={6} className="mb-5">
            <Slider {...settings} className="mb-5">
              {productDetails.images?.map((image, idx) => (
                <div key={idx}>
                  <img
                    src={image}
                    alt="product-img"
                    width="100%"
                    height="350px"
                    style={{objectFit: "contain"}}
                  />
                </div>
              ))}
            </Slider>
          </Col>

          {/* Details */}
          <Col lg={7} md={6} className="list-group list-group-flush">
            <ListGroupItem>
              <h2>{productDetails?.title}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <span className="h4">${productDetails?.price}</span>
            </ListGroupItem>
            <ListGroupItem>
              <Rating rating={productDetails?.rating} />
            </ListGroupItem>
            <ListGroupItem>
              <span>
                Category /{" "}
                <Link to={`/categories/${productDetails?.category}`}>
                  <Badge color="dark" style={{cursor: "pointer"}}>
                    {productDetails?.category}
                  </Badge>
                </Link>
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span>
                Brand /{" "}
                <Badge color="info" className="brand">
                  {productDetails?.brand}
                </Badge>
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span className="lead">{productDetails?.description}</span>
            </ListGroupItem>
            <ListGroupItem>
              {productDetails?.stock ? (
                <CustomButton
                  type={"fill-btn"}
                  handleClick={() => dispatch(increaseQty(productDetails))}
                >
                  Add To Cart
                </CustomButton>
              ) : (
                <button className="btn btn-dark w-100" disabled>
                  Add To Cart
                </button>
              )}
            </ListGroupItem>
          </Col>
        </Row>
      )}
    </SectionContainer>
  );
};

export default Product;
