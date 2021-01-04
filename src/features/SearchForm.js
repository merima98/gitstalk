import React from "react";
import styled from "styled-components";

import { useFormik } from "formik";
import * as Yup from "yup";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
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
  font-family: Roboto;
  border: none;
  letter-spacing: 0.01em;
  outline: none;
  width: 93px;
  height: 36px;
`;

const Error = styled.span`
  color: #fe4444;
`;

const validationSchema = Yup.object().shape({
  login: Yup.string().required("Please enter a username"),
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
      <form onSubmit={formik.handleSubmit}>
        <Label>github.com/</Label>
        <Input
          placeholder="Enter Github username"
          onChange={formik.handleChange}
          value={formik.values.login}
          name="login"
        />
        <SearchButton type="submit">Search</SearchButton>
      </form>
    </Wrapper>
  );
}

export default SearchForm;
