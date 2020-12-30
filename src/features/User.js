import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      }
      setData(data);
    } catch (error) {
      setIsError(true);
    }
  }, [setData]);
  return (
    <div>
      {isError ? (
        <p>Not found</p>
      ) : (
        <div>
          <ul>{data.login}</ul>
        </div>
      )}
    </div>
  );
}

export default User;
