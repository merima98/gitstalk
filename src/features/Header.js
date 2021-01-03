import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

import SearchForm from "./SearchForm";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Link = styled.a`
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: #000;
  font-family: Rubik;
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
      <Logo>
        <Link href="https://github.com/merima98/gitstalk">Gits Talk</Link>
      </Logo>
      <SearchForm username={login} onSubmit={onSubmit} />
    </Wrapper>
  );
}

export default Header;
