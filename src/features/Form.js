import React from "react";
import styled from "styled-components";
import { useHistory, withRouter } from "react-router";
import { GitHub } from "react-feather";

import SearchForm from "./SearchForm";

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
  font-size: 2rem;
  display: block;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  font-family: Roboto;
`;

const Label = styled.label`
  margin-bottom: 4em;
  color: #333;
  font-size: 0.75em;
  display: block;
  margin-block-start: 1em;
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
