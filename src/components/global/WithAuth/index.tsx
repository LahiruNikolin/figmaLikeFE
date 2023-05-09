/* eslint-disable react/display-name */
import React from "react";
import { store } from "@/store";
import Redirect from "../Redirect";
function WithAuth(WrappedComponent: React.FC) {
  return class extends React.Component {
    state = {
      loading: true,
      loggedIn: false,
    };

    componentDidMount() {
      setTimeout(() => {
        const { id } = store.getState().user;
        this.setState({ loggedIn: !!id, loading: false });
      }, 0);
    }
    render() {
      if (this.state.loading) {
        return <p>loading....</p>;
      }
      if (this.state.loggedIn) {
        return <WrappedComponent {...this.props} />;
      }
      return <Redirect towardsLogin />;
    }
  };
}
export default WithAuth;
