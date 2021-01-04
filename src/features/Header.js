import React from "react";
import styled from "styled-components";
import { useHistory, useParams, NavLink } from "react-router-dom";

import SearchForm from "./SearchForm";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: #000;
  font-family: Roboto;
  font-size: 32px;
  margin-right: 2rem;
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
