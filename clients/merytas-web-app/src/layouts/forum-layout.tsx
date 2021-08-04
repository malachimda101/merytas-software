import React, { Component } from "react";

import Forum from "../views/forum";

interface LayoutProps {
    location: {
      pathname: string
    }
}

export default class ForumLayout extends Component<LayoutProps> {
  render() {
    return <Forum props={this.props} />;
  }
}
