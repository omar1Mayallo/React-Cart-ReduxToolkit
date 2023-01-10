import React from "react";
import SectionContainer from "../../components/SectionContainer";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <SectionContainer secName={"cart-section"}>
      <CartTable />
    </SectionContainer>
  );
};

export default Cart;
