import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from "./BookList";

function Main() {
  return (<div>
    <div className="text-center container col-md justify">
      <BookList />
    </div>
  </div>);
}

export default Main;