import { Component } from "react";
class Errboundary extends Component {
  constructor(props) {
    super(props);
    this.state = { errPresent: false };
  }

  static getDerivedStateFromError(err) {
    return { errPresent: true };
  }

  render() {
    if (this.state.errPresent) {
      return <h1>Limit Reached Kindly Refresh</h1>;
    }
    return this.props.children;
  }
}

export default Errboundary;

//In order to save the whole window to crash while an error occurs we create Error Boundary and wrap our components in App.jsx with these Error Boundaries.
// This will make that particular item to show any alternative response rather than crashing whole window, hence allowing the rest of the working elements to show
