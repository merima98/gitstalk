import React from "react";
import styled from "styled-components";
import { Edit3 } from "react-feather";

import { BREAKPOINTS } from "../constants";

const Wrapper = styled.div`
  letter-spacing: 0.01em;
  text-align: center;
  background-color: ${(props) => props.theme.colors.wrapperBackground};
  margin-bottom: 1rem;
`;

const Paragrapf = styled.p`
  color: #aaa;
  margin-top: 0;
  margin-bottom: 0.5em;
  letter-spacing: 0.01em;
  text-align: center;
  font-size: 0.7rem;
  background-color: ${(props) => props.theme.colors.wrapperBackground};

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 1rem;
  }
`;

const Link = styled.a`
  color: #5c75f6;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  display: inline-block;
  font-size: 0.7rem;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 1rem;
  }
`;

const LabelLink = styled.span`
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <Wrapper>
      <Paragrapf>Stalking? I call it social research.</Paragrapf>
      <Link href="https://github.com/merima98/gitstalk">
        <LabelLink>
          <Edit3 /> merima98/gitstalk
        </LabelLink>
      </Link>
    </Wrapper>
  );
}

export default Footer;
