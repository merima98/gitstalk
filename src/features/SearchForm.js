import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import { BREAKPOINTS } from "../constants";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: none;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: flex;
    color: #333;
    font-size: 1em;
    margin-right: 0.3em;
    padding: 8px 12px;
  }
`;

const Input = styled.input`
  border: 1px solid #f1f1f1;
  width: 110px;
  font-size: 1em;
  padding: 8px 12px;
  position: absolute;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 220px;
    position: relative;
  }
`;

const SearchButton = styled.button`
  top: 36px;
  position: relative;
  cursor: pointer;
  background-color: #5c75f6;
  font-size: 1em;
  border-radius: 2px;
  color: #fff;
  border: none;
  letter-spacing: 0.01em;
  height: 36px;
  outline: none;
  width: 110px;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    top: 0;
    width: 93px;
  }
`;
const Form = styled.form`
  display: flex;
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
      </Form>
    </Wrapper>
  );
}

export default SearchForm;
