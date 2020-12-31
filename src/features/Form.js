import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import { withRouter } from "react-router";
import { GitHub } from "react-feather";

const SearchForm = styled.form`
  min-height: calc(100vh - 100px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  margin-bottom: 0.75em;
  font-size: 3rem;
  display: block;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  font-family: Rubik;
`;

const Label = styled.label`
  margin-bottom: 4em;
  color: #333;
  font-size: 0.75em;
  display: block;
  margin-block-start: 1em;
`;

const Input = styled.input`
  margin-left: 0.25em;
  color: #333;
  min-width: 350px;
  display: block;
  background: #fff;
  border: 1px solid #f1f1f1;
  font-size: 1em;
  padding: 0.5em 0.75em;
  border-radius: 2px 0 0 2px;
  transition-duration: 0.3s;
  outline: none;

  &:hover {
    border: 1px solid #5c75f6;
  }
`;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchDivChild = styled.div`
  color: #333;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

const SubmitButton = styled.button`
  padding: 0.6em 2em 0.5em;
  cursor: pointer;
  background-color: #5c75f6;
  font-size: 1em;
  border-radius: 0 2px 2px 0;
  color: #fff;
  font-family: Rubik;
  border: none;
  letter-spacing: 0.01em;
`;

const SecondaryButton = styled.button`
  margin-top: 1em;
  background: transparent;
  padding: 0.5em;
  cursor: pointer;
  font-size: 0.75em;
  border-radius: 2px;
  font-family: Rubik;
  border: none;
  letter-spacing: 0.01em;
  outline: none;
`;

const RandomiseUser = styled.a`
  color: #5c75f6;
`;

const Error = styled.span`
  color: #fe4444;
`;
const validationSchema = Yup.object().shape({
  login: Yup.string().required("Please enter a username"),
});

function Form(props) {
  const formik = useFormik({
    initialValues: {
      login: "",
    },
    onSubmit,
    validationSchema,
  });

  function onSubmit(values) {
    console.log("Login", values);
    props.history.push(`/${values.login}`);
  }

  return (
    <SearchForm onSubmit={formik.handleSubmit}>
      <Logo>
        Gits Talk <GitHub />
      </Logo>
      <Label>Discover who's upto what...</Label>
      <SearchDiv>
        <SearchDivChild>github.com/</SearchDivChild>
        <Input
          placeholder="Enter Github username"
          onChange={formik.handleChange}
          value={formik.values.login}
          name="login"
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchDiv>
      <SecondaryButton>
        <RandomiseUser>Randomise User?</RandomiseUser>
      </SecondaryButton>
      <Error>{formik.errors.login}</Error>
    </SearchForm>
  );
}

export default withRouter(Form);
