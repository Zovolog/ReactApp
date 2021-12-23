import { Switch, Route } from "react-router-dom";
import { PostList } from "./PostList";
import { TodoList } from "./TodoList";
import { UserList } from "./UserList";
import { UserProfile } from "./UserProfile";

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/posts" component={PostList} />
        <Route path="/todo-list" component={TodoList} />
        <Route path="/user-list" component={UserList} />
        <Route path="/user-profile/:userId" component={UserProfile} />
      </Switch>
    </main>
  );
};
