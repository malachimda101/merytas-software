import React from "react";
import { Switch, Redirect, Router } from "react-router-dom";
import RouteWithLayout from "./route-with-layout";
import history from "./history";

import HomeLayout from "../layouts/home-layout";
import ForumLayout from "../layouts/forum-layout";
import UserProfileLayout from "../layouts/user-profile-layout";

const forums: string[] = ["TSLALOVERS", "AMCFANATICS"];

const profile: {userId: string} = {
  userId: "1eq6hqeg75hpsdf834y"
}


interface IProps {
  props?: any
}

interface IState {
  forums: string[]
}

export default class Routes extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { forums: [] };
  }
  componentDidMount() {
    this.setState({ forums: forums });
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <RouteWithLayout
            exact
            path="/home"
            layout={HomeLayout}
            state={this.props}
          />
          <RouteWithLayout
            exact
            path={`/profile/${profile.userId}`}
            layout={UserProfileLayout}
            state={this.props}
          />
          {this.state.forums.length !== 0 &&
            this.state.forums.map((forum, idx) => (
              <RouteWithLayout
                key={idx}
                exact
                path={`/forums/${forum}`}
                layout={ForumLayout}
                state={this.props}
              />
            ))}
        </Switch>
      </Router>
    );
  }
}
