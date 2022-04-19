import { Component } from "react";
class Errorboundary extends Component {
  constructor(props) {
    super(props);
    this.state = { errorPresent: false };
  }

  static getDerivedStateFromError(err) {
    return { errorPresent: true };
  }

  render() {
    if (this.state.errorPresent) {
      return <h1>Limit Reached Kindly Refresh</h1>;
    }
    return this.props.children;
  }
}

export default Errorboundary;

