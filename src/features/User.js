import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import NotFound from "./NotFound";
import Header from "./Header";

const Wrapper = styled.div`
  padding-top: 32px;
  padding-left: 15rem;
  padding-right: 15rem;
`;

function User() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  useEffect(async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${params.login}`
      );
      const data = await response.json();

      if (data.message === "Not Found") {
        setIsError(true);
        console.log(isError);
      }
      setData(data);
    } catch (error) {
      setIsError(true);
    }
  }, [setData]);
  return (
    <Wrapper>
      <Header />
      {isError ? (
        <NotFound />
      ) : (
        <div>
          <ul>{data.login}</ul>
        </div>
      )}
    </Wrapper>
  );
}

export default User;
