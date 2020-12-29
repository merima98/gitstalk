import React from "react";

import styled from "styled-components";

import Form from "./Form";

const Wrapper = styled.div`
  background-color: #fdfdfd;
`;

function Home() {
  return (
    <Wrapper>
      <Form></Form>
    </Wrapper>
  );
}

export default Home;
