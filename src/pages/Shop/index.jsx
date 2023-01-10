import React from "react";
import ReactPaginate from "react-paginate";
import {Alert, Col, Row} from "reactstrap";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductItem from "../../components/ProductItem";
import SectionContainer from "../../components/SectionContainer";
import {useGetAllProducts} from "../../hooks/products/useGetAllProducts";
import {ASYNC_STATUS} from "../../utils/constants";

const Shop = () => {
  const [products, productsStatus, handlePagination, limit] =
    useGetAllProducts();

  let pagesCount = 0;

  if (productsStatus === ASYNC_STATUS.SUCCESS) {
    pagesCount = Math.ceil(products.total / products.limit);
  }

  return (
    <SectionContainer secName={"shop-section"}>
      {productsStatus === ASYNC_STATUS.PENDING ? (
        <LoadingSpinner verticalMargin={150} />
      ) : productsStatus === ASYNC_STATUS.FAILED ? (
        <Alert color="danger">Failed To Fetch Products</Alert>
      ) : (
        <Row lg={4} md={3} sm={2} xs={1} className="justify-content-center">
          {products.products?.map((item) => (
            <Col key={item.id}>
              <ProductItem item={item} />
            </Col>
          ))}
        </Row>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={(e) => handlePagination(e.selected * limit)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pagesCount}
        previousLabel="<<"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        renderOnZeroPageCount={null}
      />
    </SectionContainer>
  );
};

export default Shop;
