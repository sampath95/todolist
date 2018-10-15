import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoTache from "./TodoTache";
  
var destination = document.querySelector("#container")
  
ReactDOM.render(
    <div>
        <TodoTache/>
    </div>,
    destination
);