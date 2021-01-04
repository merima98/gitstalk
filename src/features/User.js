import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowUpRight } from "react-feather";
import styled from "styled-components";
import { format } from "date-fns";

import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  padding-top: 32px;
  padding-left: 15rem;
  padding-right: 15rem;
`;

const SideBarContainer = styled.div`
  color: #000;
  font-size: 1rem;
  font-family: Roboto;
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
  font-family: Roboto;
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
  font-family: Roboto;
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
  font-family: Roboto;

  margin: 0px 0px 1px 0px;
`;

const DateData = styled.p`
  color: #555;
  font-family: Roboto;

  font-size: 14px;
`;

const LocationData = styled.p`
  color: #5c75f6;
  font-family: Roboto;

  font-size: 14px;
`;

const Profile = styled.a`
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
`;

const Activities = styled.div`
  background-color: #fff;
  border: 2px solid #f7f7f7;
  padding: 10px;
`;

const Events = styled.div`
  color: #000;
  font-family: Roboto;

  padding: 12px 0px;
  height: 50px;
`;

const EventsText = styled.p`
  color: #666;
  font-size: 16px;
  margin-right: 8px;
  font-family: Roboto;

  padding-bottom: 5px;
  border-bottom: 1px solid #f7f7f7;
`;

const EventsLink = styled.a`
  color: #5c75f6;
  font-size: 16px;
  font-family: Roboto;

  text-decoration: none;
`;
function add(
  eventTypeValue,
  repoName,
  commitNumber = null,
  branch = null,
  db = null
) {
  let returnEventTypeValue;
  if (eventTypeValue === "PushEvent") {
    returnEventTypeValue = (
      <Events>
        <EventsText>
          Pushed {commitNumber} commit in{" "}
          <EventsLink href={`https://github.com/${repoName}`}>
            {repoName}
          </EventsLink>
        </EventsText>
      </Events>
    );
  }
  if (eventTypeValue === "CreateEvent") {
    returnEventTypeValue = (
      <Events>
        <EventsText>
          Created a repository{" "}
          <EventsLink href={`https://github.com/${repoName}`}>
            {repoName}
          </EventsLink>
        </EventsText>
      </Events>
    );
  }
  if (eventTypeValue === "IssueCommentEvent") {
    returnEventTypeValue = (
      <Events>
        <EventsText>
          Created a comment on an issue in{" "}
          <EventsLink href={`https://github.com/${repoName}`}>
            {repoName}
          </EventsLink>
        </EventsText>
      </Events>
    );
  }
  if (eventTypeValue === "WatchEvent") {
    returnEventTypeValue = (
      <Events>
        <EventsText>
          Starred a repo{" "}
          <EventsLink href={`https://github.com/${repoName}`}>
            {repoName}
          </EventsLink>
        </EventsText>
      </Events>
    );
  }
  if (eventTypeValue === "DeleteEvent") {
    returnEventTypeValue = (
      <Events>
        <EventsText>
          Deleted a {branch} {db} from{" "}
          <EventsLink href={`https://github.com/${repoName}`}>
            {repoName}
          </EventsLink>
        </EventsText>
      </Events>
    );
  }
  if (eventTypeValue === "PullRequestEvent") {
    returnEventTypeValue = (
      <Events>
        <EventsText>
          Closed a pull request in{" "}
          <EventsLink href={`https://github.com/${repoName}`}>
            {repoName}
          </EventsLink>
        </EventsText>
      </Events>
    );
  }
  return returnEventTypeValue;
}
function User() {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  const [createdDate, setCreatedDate] = useState([]);
  const [lastUpdateDate, setLastUpdateDate] = useState([]);

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
      const responseEvents = await fetch(
        `https://api.github.com/users/${params.login}/events`
      );
      const dataEvents = await responseEvents.json();
      setEvents(dataEvents);
      setCreatedDate(format(new Date(data.created_at), "PP"));
      setLastUpdateDate(format(new Date(data.updated_at), "PP"));
    } catch (error) {
      setIsError(true);
    }
  }, [setData, params.login]);

  return (
    <Wrapper>
      <Header username={params.login} />
      {isError ? (
        <NotFound />
      ) : (
        <Container>
          <SideBarContainer>
            <Name>
              <Heading>{data.name}</Heading>
              <Profile
                href={`https://github.com/${data.login}`}
                target="_blank"
              >
                <ArrowUpRight
                  style={{ width: "14px", height: "14px", color: "#5c75f6" }}
                />
              </Profile>
            </Name>
            <SideBar>
              <List>
                <Item>Followers</Item>
                <Numbers>{data.followers}</Numbers>
              </List>
              <List>
                <Item>Following</Item>
                <Numbers>{data.following}</Numbers>
              </List>
              <List>
                <Item>Gists</Item>
                <Numbers>{data.public_gists}</Numbers>
              </List>
              <List>
                <Item>Repos</Item>
                <Numbers>{data.public_repos}</Numbers>
              </List>
            </SideBar>
            <SideBar>
              <ListLocation>
                <Loacation>Joined</Loacation>
                <DateData>{createdDate}</DateData>
              </ListLocation>
              <ListLocation>
                <Loacation>Loacation</Loacation>
                <LocationData>{data.location}</LocationData>
              </ListLocation>
              <ListLocation>
                <Item>Last update on {lastUpdateDate}</Item>
              </ListLocation>
            </SideBar>
          </SideBarContainer>
          <Activities>
            <Heading>LATEST ACTIVITIES</Heading>
            {events.map((event) => {
              return (
                <span key={event.id}>
                  {add(
                    event.type,
                    event.repo.name,
                    event.payload.size,
                    event.payload.ref_type,
                    event.payload.ref
                  )}
                </span>
              );
            })}
          </Activities>
        </Container>
      )}
      <Footer />
    </Wrapper>
  );
}

export default User;
