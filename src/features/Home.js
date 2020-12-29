import React from "react";

import styled from "styled-components";

import Form from "./Form";
import Footer from "./Footer";

const Wrapper = styled.div`
  background-color: #fdfdfd;
`;

function Home() {
  return (
    <Wrapper>
      <Form></Form>
      <Footer />
    </Wrapper>
  );
}

export default Home;
