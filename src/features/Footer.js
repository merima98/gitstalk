import React from "react";
import styled from "styled-components";

import { BREAKPOINTS } from "../constants";

const Wrapper = styled.div`
  font-size: 0.75em;
  letter-spacing: 0.01em;
  text-align: center;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding-top: 3em;
  }
`;

const Paragrapf = styled.p`
  color: #aaa;
  margin-bottom: 0.5em;
  letter-spacing: 0.01em;
  text-align: center;
`;

const Link = styled.a`
  color: #5c75f6;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  display: inline-block;
`;

const Icon = styled.span`
  ${Link}:hover & {
    display: flex;
    border-bottom: 2px solid #5c75f6;
    transform: scaleX(0);
    transition: transform 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
    transform-origin: 100% 50%;
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
        <LabelLink>✏️ merima98/gitstalk</LabelLink>
        <Icon></Icon>
      </Link>
    </Wrapper>
  );
}

export default Footer;
