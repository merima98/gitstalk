import React from "react";
import styled from "styled-components";

import { AlertCircle } from "react-feather";

import { BREAKPOINTS } from "../constants";

const ShowError = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 2px;
  display: flex;
  background-color: ${(props) => props.theme.colors.backgroundColor};
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
  color: ${(props) => props.theme.colors.textColor};
  font-family: Roboto;
`;

const SecondMessage = styled.h3`
  line-height: 1.5em;
  font-size: 1em;
  font-weight: normal;
  color: ${(props) => props.theme.colors.textColor};
  font-family: Roboto;
`;

function NotFound() {
  return (
    <ShowError>
      <ErrorMessage>
        <AlertCircle style={{ color: "#5c75f6" }} />
        <Message>Username not found.</Message>
        <SecondMessage>
          Even our strongest octocat failed to find it. :(
        </SecondMessage>
      </ErrorMessage>
    </ShowError>
  );
}

export default NotFound;
