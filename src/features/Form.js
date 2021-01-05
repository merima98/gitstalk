import React from "react";
import styled from "styled-components";
import { useHistory, withRouter } from "react-router";
import { GitHub } from "react-feather";

import SearchForm from "./SearchForm";
import { BREAKPOINTS } from "../constants";

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  margin-bottom: 0.75em;

  font-size: 1.5rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 2rem;
  }
`;

const Label = styled.label`
  margin-bottom: 4em;
  color: #333;
  font-size: 0.75em;
  display: flex;
`;

function Form() {
  const history = useHistory();

  function onSubmit(vals) {
    history.push(`/${vals.login}`);
  }

  return (
    <Wrapper>
      <Logo>
        GITSTALK <GitHub />
      </Logo>
      <Label>Discover who's upto what...</Label>
      <SearchForm onSubmit={onSubmit} />
    </Wrapper>
  );
}

export default withRouter(Form);
