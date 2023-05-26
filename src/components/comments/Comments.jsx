import React from "react";

function Comment(props) {

  function handleClick() {

    props.onDelete(props.id);
  }

  return (
    <div className="comments-section">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Comment;
