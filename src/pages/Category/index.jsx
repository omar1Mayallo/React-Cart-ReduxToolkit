import React from "react";
import {useParams} from "react-router-dom";
import {Alert, Col, Row} from "reactstrap";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductItem from "../../components/ProductItem";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import {useGetAllCategories} from "../../hooks/categories/useGetCategoryProducts";
import {ASYNC_STATUS} from "../../utils/constants";

const Category = () => {
  const {id} = useParams();
  const [categoryProducts, categoryProductsStatus] = useGetAllCategories(id);
  return (
    <SectionContainer secName={"category-section"}>
      {categoryProductsStatus === ASYNC_STATUS.PENDING ? (
        <LoadingSpinner verticalMargin={50} />
      ) : categoryProductsStatus === ASYNC_STATUS.FAILED ? (
        <Alert color="danger">Failed To GET Products</Alert>
      ) : (
        <>
          <SectionHead head={id.toUpperCase().replace("-", " ")} />
          <Row lg={4} md={3} sm={2} xs={1}>
            {categoryProducts.products?.map((item) => (
              <Col key={item.id}>
                <ProductItem item={item} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </SectionContainer>
  );
};

export default Category;
