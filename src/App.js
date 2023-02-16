import React from "react";
import Head from "./components/UI/Head/head";
import Generator from "./components/generator";
import "./styles/App.css";



class App extends React.Component {


  render () {
    return (
      <div className="appBody">
        <Head />
        <Generator />
      </div>
    )
  }
}

export default App;
