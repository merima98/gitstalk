import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ArrowUpRight,
  Trash2,
  MessageSquare,
  GitCommit,
  Folder,
  Star,
  GitPullRequest,
  Moon,
  Sun,
} from "react-feather";
import styled from "styled-components";
import { format } from "date-fns";

import NotFound from "./NotFound";
import Header from "./Header";
import { BREAKPOINTS } from "../constants";
import { useDarkMode } from "../state";

const Wrapper = styled.div`
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.wrapperBackground};
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 64px 24px;
    overflow-x: visible;
  }
`;

const SideBarContainer = styled.div`
  position: static;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    position: sticky;
    top: 0;
    height: 500px;
  }
`;

const Name = styled.div`
  margin-bottom: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  padding: 16px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

const Heading = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.logo};

  margin-right: 10px;
  padding-left: 16px;
`;

const SideBar = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 2px;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Item = styled.h3`
  font-weight: normal;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 14px;
`;
const Numbers = styled.p`
  color: #555;
  font-size: 15px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    margin-left: 95px;
  }
`;

const List = styled.div`
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 0px 0px 0px 2.5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 30px;
  }
`;

const ListLocation = styled.div`
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 0px 0px 0px 2.5px;
  }
`;

const Loacation = styled.h4`
  font-weight: normal;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 12px;
  margin: 0px 0px 1px 0px;
`;

const DateData = styled.p`
  color: ${(props) => props.theme.colors.colorTextList};

  font-size: 14px;
`;

const LocationData = styled.p`
  color: ${(props) => props.theme.colors.color};
  font-size: 14px;
`;

const Profile = styled.a`
  text-decoration: none;
  color: #333;
  cursor: pointer;
  margin-right: 1rem;
`;

const Container = styled.div`
  display: grid;
  padding-top: 24px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;
  }
`;

const Activities = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

const Events = styled.div`
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;
`;

const EventsText = styled.p`
  color: ${(props) => props.theme.colors.colorTextList};
  margin: 0;
`;

const EventsLink = styled.a`
  color: #5c75f6;
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
          <GitCommit style={{ height: "14px", width: "14px" }} /> Pushed{" "}
          {commitNumber} commit in{" "}
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
          <Folder style={{ height: "14px", width: "14px" }} /> Created a
          repository{" "}
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
          <MessageSquare style={{ height: "14px", width: "14px" }} /> Created a
          comment on an issue in{" "}
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
          <Star style={{ height: "14px", width: "14px" }} /> Starred a repo{" "}
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
          <Trash2 style={{ height: "14px", width: "14px" }} /> Deleted a{" "}
          {branch} {db} from{" "}
          <EventsLink href={`https://github.com/${repoName}`}>
            {repoName}
          </EventsLink>
        </EventsText>
      </Events>
    );
  }
  if (eventTypeValue === "IssuesEvent") {
    returnEventTypeValue = (
      <Events>
        <EventsText>
          <Trash2 style={{ height: "14px", width: "14px" }} /> Closed an issue
          in{" "}
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
          <GitPullRequest style={{ height: "14px", width: "14px" }} /> Closed a
          pull request in{" "}
          <EventsLink href={`https://github.com/${repoName}`}>
            {repoName}
          </EventsLink>
        </EventsText>
      </Events>
    );
  }
  return returnEventTypeValue;
}

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Temp = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 2px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

function User() {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  const [createdDate, setCreatedDate] = useState([]);
  const [lastUpdateDate, setLastUpdateDate] = useState([]);
  const setIsDarkMode = useDarkMode((state) => state.setIsDarkMode);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  const [isLoading, setLoading] = useState(true);

  function onChange() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.github.com/users/${params.login}`
      );
      const data = await response.json();

      if (data.message === "Not Found") {
        setLoading(false);

        setIsError(true);
      }

      setData(data);

      const responseEvents = await fetch(
        `https://api.github.com/users/${params.login}/events?per_page=20`
      );
      const dataEvents = await responseEvents.json();
      setEvents(dataEvents);

      setCreatedDate(format(new Date(data.created_at), "PP"));
      setLastUpdateDate(format(new Date(data.updated_at), "PP"));

      setLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  }, [
    setData,
    params.login,
    setLastUpdateDate,
    setCreatedDate,
    setEvents,
    setLoading,
  ]);

  return (
    <Wrapper>
      <Header isLoading={isLoading} username={params.login} />
      {isError ? (
        <NotFound />
      ) : (
        <Container>
          <SideBarContainer>
            <Name>
              <Image src={data.avatar_url} />
              <Heading>{data.name}</Heading>
              <Temp>
                <Profile
                  href={`https://github.com/${data.login}`}
                  target="_blank"
                >
                  <ArrowUpRight
                    style={{ width: "14px", height: "14px", color: "#5c75f6" }}
                  />
                </Profile>
                {isDarkMode ? (
                  <Sun
                    style={{ cursor: "pointer", color: "#fff" }}
                    onClick={onChange}
                  />
                ) : (
                  <Moon
                    style={{ cursor: "pointer", color: "#000" }}
                    onClick={onChange}
                  />
                )}
              </Temp>
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
    </Wrapper>
  );
}

export default User;
