import React from "react";
import styled from "styled-components";

import { AlertCircle } from "react-feather";

import { BREAKPOINTS } from "../constants";

const ShowError = styled.div`
  border: 1px solid #f7f7f7;
  box-sizing: border-box;
  border-radius: 2px;
  display: flex;
  background-color: #fff;
  padding: 2em;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    flex-direction: row;
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.h2`
  font-size: 1.5em;
  letter-spacing: 0.01em;
  color: #333;
  font-family: Roboto;
`;

const SecondMessage = styled.h3`
  line-height: 1.5em;
  font-size: 1em;
  color: #ccc;
  font-family: Roboto;
`;

function NotFound() {
  return (
    <ShowError>
      <ErrorMessage>
        <AlertCircle />
        <Message>Username not found.</Message>
        <SecondMessage>
          Even our strongest octocat failed to find it. :(
        </SecondMessage>
      </ErrorMessage>
    </ShowError>
  );
}

export default NotFound;
