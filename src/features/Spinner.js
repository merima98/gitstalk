import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: ${rotate} 4s linear infinite;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border-left: 2px solid transparent;
  border-right: 2px solid ${(props) => props.theme.colors.color};
  border-bottom: 2px solid ${(props) => props.theme.colors.color};
  padding: 1.5rem;
  margin-bottom: 0.5rem;
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;
