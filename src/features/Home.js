import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { GitHub } from "react-feather";

import SearchForm from "../components/SearchForm";
import { BREAKPOINTS } from "../constants";

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.wrapperBackground};
`;

const Logo = styled.div`
  margin-bottom: 0.75em;
  color: ${(props) => props.theme.colors.logo};
  font-size: 1.5rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 2rem;
  }
`;

const Label = styled.label`
  margin-bottom: 4em;
  color: ${(props) => props.theme.colors.logo};
  font-size: 0.75em;
  display: flex;
`;

function Home() {
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

export default Home;
