import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter, Link} from "react-router-dom";
import { Route } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  faEnvelope,
  faUser,
  faPhoneAlt,
  faMapMarkerAlt,
  faWindowMaximize,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import "./UserProfile.css";
import { UserInfo } from "../UserInfo";
import { UserAlbums } from "../UserAlbums";
import { UserPosts } from "../UserPosts/UserPosts";
import { UserTodos } from "../UserTodos/UserTodos";

export const UserProfile = () => {
  const { userId } = useParams();
  const { data, isLoading } = useRequest(`users`);

  const user = useMemo(() => {
    return data.find((user) => user.id === Number(userId));
  }, [data, userId]);

  if (isLoading || !user) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="list">
      <UserInfo text={user.name} title="Name" icon={faUser} />
      <UserInfo text={user.email} title="Email" icon={faEnvelope} />
      <UserInfo text={user.phone} title="Phone" icon={faPhoneAlt} />
      <UserInfo
        text={[
          user.address.street,
          user.address.suite,
          user.address.city,
          user.address.zipcode,
        ]}
        title="Adress"
        icon={faMapMarkerAlt}
      />
      <UserInfo
        text={user.website}
        title="Social Channels"
        icon={faWindowMaximize}
      />
      <UserInfo
        text={[user.company.name, user.company.catchPhrase, user.company.bs]}
        title="Work"
        icon={faBriefcase}
      />
      <div className="content">
        <BrowserRouter>
          <Tabs>
            <TabList>
              <Tab>
                <Link to={`/user-albums/${userId}`} className="href">
                  User Albums
                </Link>
              </Tab>
              <Tab>
                <Link to={`/user-posts/${userId}`} className="href">
                  User Posts
                </Link>
              </Tab>
              <Tab>
                <Link to={`/user-todos/${userId}`} className="href">
                  User Todos
                </Link>
              </Tab>
            </TabList>
              <TabPanel>
                <Route path="/user-albums/:userId" component={UserAlbums} />
              </TabPanel>
              <TabPanel>
                <Route path="/user-posts/:userId" component={UserPosts} />
              </TabPanel>
              <TabPanel>
                <Route path="/user-todos/:userId" component={UserTodos} />
              </TabPanel>
          </Tabs>
        </BrowserRouter>
      </div>
    </div>
  );
};
