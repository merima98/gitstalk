import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

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

const Label = styled.label`
  color: #333;
  font-size: 1em;
  margin-right: 0.3em;
`;

const Input = styled.input`
  background: #fff;
  color: #333;
  border: 1px solid #f1f1f1;
  font-size: 1em;
  padding: 8px 12px;
  width: 220px;
  height: 36px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 0.5em 1.25em;
  cursor: pointer;
  background-color: #5c75f6;
  font-size: 1em;
  border-radius: 2px;
  color: #fff;
  font-family: Rubik;
  border: none;
  letter-spacing: 0.01em;

  width: 93px;
  height: 36px;
`;

const Error = styled.span`
  color: #fe4444;
`;

const validationSchema = Yup.object().shape({
  login: Yup.string().required("Please enter a username"),
});

function Header(props) {
  let history = useHistory();
  console.log(props);
  const formik = useFormik({
    initialValues: {
      login: `${props.username}`,
    },
    onSubmit,
    validationSchema,
  });
  function onSubmit(values) {
    console.log(props);
    console.log("Login", values);

    history.push(`/${values.login}`);
  }
  return (
    <Wrapper>
      <Logo>
        <Link href="https://github.com/merima98/gitstalk">Gits Talk</Link>
      </Logo>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Label>github.com/</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.login}
            name="login"
          />
          <SearchButton type="submit">Search</SearchButton>
        </form>
        <Error>{formik.errors.login}</Error>
      </div>
    </Wrapper>
  );
}

export default Header;
