import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ModalHeader, ModalBody, Form, FormGroup, Input} from "reactstrap";
import {getSearchedProducts} from "../../services/products/productsSlice";
import {toggleSearchModal} from "../../services/searchModal/searchModalSlice";
import {ASYNC_STATUS} from "../../utils/constants";
import LoadingSpinner from "../LoadingSpinner";
import {StyledSearchOverlay} from "./searchOverlay.styled";
import {useNavigate} from "react-router-dom";
const SearchOverlay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {searchModalOpen} = useSelector((state) => state.searchModal);
  const {productsSearched, productsSearchedStatus} = useSelector(
    (state) => state.product
  );
  return (
    <StyledSearchOverlay
      isOpen={searchModalOpen}
      toggle={() => dispatch(toggleSearchModal())}
      fullscreen
    >
      <ModalHeader toggle={() => dispatch(toggleSearchModal())} />
      <ModalBody>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup className="d-flex">
            <Input
              name="search"
              placeholder="Search"
              type="search"
              onChange={(e) => dispatch(getSearchedProducts(e.target.value))}
            />
          </FormGroup>
        </Form>

        <div className="search-list">
          {productsSearchedStatus === ASYNC_STATUS.PENDING ? (
            <LoadingSpinner verticalMargin={100} />
          ) : (
            <>
              {productsSearched.products?.map((item) => (
                <div className="search-list-item" key={item?.id}>
                  <img
                    src={item?.thumbnail}
                    alt="product-item"
                    width={70}
                    height={70}
                  />
                  <div className="item-info">
                    <span
                      className="item-title"
                      onClick={() => {
                        dispatch(toggleSearchModal());
                        navigate(`/products/${item?.id}`);
                      }}
                    >
                      {item?.title}
                    </span>
                    <span className="item-price">${item?.price}</span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </ModalBody>
    </StyledSearchOverlay>
  );
};

export default SearchOverlay;
