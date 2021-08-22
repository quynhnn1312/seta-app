import React from "react";
import { Spinner } from "reactstrap";
import Lesson1 from "./components/Lesson1";
import Lesson2 from "./components/Lesson2";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="app">
      <div className="handle-array">
        <h1>I. Javascript algorithm</h1>
        <Lesson1 />
        <Lesson2 />
      </div>
      <PostList />
    </div>
  );
}

export default App;
