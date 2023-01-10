import React from "react";
import {Container} from "reactstrap";

const SectionContainer = ({secName, children}) => {
  return (
    <section className={`${secName} py-5`}>
      <Container>{children}</Container>
    </section>
  );
};

export default SectionContainer;
