import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import { BREAKPOINTS } from "../constants";

const Wrapper = styled.header`
  align-items: center;
`;

const Label = styled.label`
  display: none;
  color: ${(props) => props.theme.colors.logo};

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: flex;
    font-size: 1em;
    margin-right: 0.3em;
    padding: 8px 12px;
  }
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  width: 100%;
  font-size: 1em;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
`;

const SearchButton = styled.button`
  top: 36px;
  cursor: pointer;
  background-color: #5c75f6;
  font-size: 1em;
  border-radius: 2px;
  color: #fff;
  border: none;
  letter-spacing: 0.01em;
  height: 36px;
  outline: none;
  width: 100%;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    top: 0;
    width: 93px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    flex-direction: row;
  }
`;
const validationSchema = Yup.object().shape({
  login: Yup.string(),
});

function SearchForm(props) {
  const { username } = props;
  const formik = useFormik({
    initialValues: {
      login: username || "",
    },
    onSubmit: (vals) => props.onSubmit(vals),
    validationSchema,
  });

  return (
    <Wrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Label>github.com/</Label>
        <Input
          placeholder="username"
          onChange={formik.handleChange}
          value={formik.values.login}
          name="login"
        />
        <SearchButton type="submit">Search</SearchButton>
        {/* <Spinner animation="border" role="status" /> */}
      </Form>
    </Wrapper>
  );
}

export default SearchForm;
