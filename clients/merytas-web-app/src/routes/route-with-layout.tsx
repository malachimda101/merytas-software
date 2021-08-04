import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

interface LayoutProps {
  layout: any
  path?: string
  exact: boolean
  state: any
}

class RouteWithLayout extends Component<LayoutProps> {
  render() {
    const { layout: Layout, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(matchProps) => <Layout {...matchProps}></Layout>}
      />
    );
  }
}

// RouteWithLayout.propTypes = {
//   layout: PropTypes.any.isRequired,
//   path: PropTypes.string,
// };

export default RouteWithLayout;
