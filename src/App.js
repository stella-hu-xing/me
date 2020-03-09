import React from "react";
import Header from "./components/header";
import "./App.css";

// import Introduction from "./components/introduction";
// import About from "./components/about";
// import Timeline from "./components/timeline";

class App extends React.Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Header></Header>

          {/* <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
