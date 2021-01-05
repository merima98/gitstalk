import React from "react";
import styled from "styled-components";
import { useHistory, useParams, NavLink } from "react-router-dom";

import SearchForm from "./SearchForm";
import { BREAKPOINTS } from "../constants";

const Wrapper = styled.header`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #000;
  font-size: 32px;
  cursor: pointer;
`;

function Header() {
  const history = useHistory();
  const params = useParams();

  function onSubmit(values) {
    history.push(`/${values.login}`);
  }

  const login = params.login;

  return (
    <Wrapper>
      <Link exact to="/">
        GITSTALK
      </Link>
      <SearchForm username={login} onSubmit={onSubmit} />
    </Wrapper>
  );
}

export default Header;
