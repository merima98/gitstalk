import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import NotFound from "./NotFound";
import Header from "./Header";
import { ArrowUpRight } from "react-feather";

const Wrapper = styled.div`
  padding-top: 32px;
  padding-left: 15rem;
  padding-right: 15rem;
`;

const SideBarContainer = styled.div`
  color: #000;
  font-size: 1rem;
  font-family: Rubik;
  width: 275px;
`;

const Name = styled.div`
  background-color: #fff;
  margin-bottom: 1rem;
  border: 2px solid #f7f7f7;
  padding: 10px;
`;

const Heading = styled.h1`
  font-size: 1rem;
  color: #333;
  font-family: Rubik;
  display: inline;
  margin-right: 10px;
`;

const SideBar = styled.div`
  background-color: #fff;
  padding: 10px;
  border: 2px solid #f7f7f7;
  border-radius: 2px;
  margin-bottom: 2px;
`;

const Item = styled.h3`
  color: #888;
  font-size: 14px;
  font-family: Rubik;
`;
const Numbers = styled.p`
  color: #555;
  font-size: 15px;
  margin-left: 95px;
`;

const List = styled.div`
  padding: 0px 0px 0px 2.5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 30px;
`;

const ListLocation = styled.div`
  padding: 0px 0px 0px 2.5px;
  display: grid;
`;

const Loacation = styled.h4`
  color: #888;
  font-size: 12px;
  font-family: Rubik;
  margin: 0px 0px 1px 0px;
`;

const DateData = styled.p`
  color: #555;
  font-family: Rubik;
  font-size: 14px;
`;

const LocationData = styled.p`
  color: #5c75f6;
  font-family: Rubik;
  font-size: 14px;
`;

const Profile = styled.a`
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 65%;
  grid-gap: 5%;
`;

const ActivitiesContainer = styled.div``;
const LatestActivities = styled.h2`
  font-size: 18px;
  color: #333;
  font-family: Rubik;
  display: inline;
  padding: 10px;
`;

const Activities = styled.div`
  background-color: #fff;
  border: 2px solid #f7f7f7;
  padding: 10px;
  height: 52px;
`;
const ListEvents = styled.div`
  padding: 0px 0px 0px 2.5px;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-auto-rows: 30px;
`;

function User() {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  useEffect(async () => {
    try {
      // const response = await fetch(
      //   `https://api.github.com/users/${params.login}`
      // );
      // const data = await response.json();

      const data = "merima";

      if (data.message === "Not Found") {
        setIsError(true);
        console.log(isError);
      }
      setData(data);
      const responseEvents = await fetch(
        `https://api.github.com/users/merima98/events`
      );

      const dataEvents = await responseEvents.json();
      setEvents(dataEvents);
    } catch (error) {
      setIsError(true);
    }
  }, [setData]);
  function add(vrijednost, repoName) {
    let returnVrijednost;
    if (vrijednost === "PushEvent") {
      returnVrijednost = "Pushed";
    }
    if (vrijednost === "CreateEvent") {
      returnVrijednost = (
        <p>
          Created a repository{" "}
          <a href={`https://github.com/${repoName}`}>{repoName}</a>
        </p>
      );
    }
    return returnVrijednost;
  }
  return (
    <Wrapper>
      <Header username={params.login} />
      {isError ? (
        <NotFound />
      ) : (
        <Container>
          <SideBarContainer>
            <Name>
              {/* <Heading>{data.name}</Heading> */}
              <Heading>Merima Ceranic</Heading>
              {/* <Profile href={`https://github.com/${data.login}`}> */}
              <Profile href={`https://github.com/${"merima98"}`}>
                <ArrowUpRight />
              </Profile>
            </Name>
            <SideBar>
              <List>
                <Item>Followers</Item>
                <Numbers>1</Numbers>
              </List>
              <List>
                <Item>Following</Item>
                <Numbers>5</Numbers>
              </List>
              <List>
                <Item>Stars Received</Item>
                <Numbers>2</Numbers>
              </List>
              <List>
                <Item>Forks by user</Item>
                <Numbers>5</Numbers>
              </List>
            </SideBar>

            <SideBar>
              <ListLocation>
                <Loacation>Joined</Loacation>
                {/* <DateData>{data.created_at}</DateData> */}
                <DateData>31.12.2020</DateData>
              </ListLocation>
              <ListLocation>
                <Loacation>Loacation</Loacation>

                {/* <LocationData>{data.location}</LocationData> */}
                <LocationData>Bosnia and Herzegovina</LocationData>
              </ListLocation>
              <ListLocation>
                {/* <Item>Last update on {data.updated_at}</Item> */}
                <Item>Last update on 31.12.2020</Item>
              </ListLocation>
            </SideBar>
          </SideBarContainer>
          <ActivitiesContainer>
            <Activities>
              <LatestActivities>LATEST ACTIVITIES</LatestActivities>
              {console.log(events)}
              <ListEvents>
                {events.map((event) => {
                  return (
                    <span key={event.id}>
                      {add(event.type, event.repo.name)}
                    </span>
                  );
                })}
              </ListEvents>
            </Activities>
          </ActivitiesContainer>
        </Container>
      )}
    </Wrapper>
  );
}

export default User;
