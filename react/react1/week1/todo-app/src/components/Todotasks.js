import React from "react";

const Todotasks = (props) => {
  const { tasks, date } = props.todos;
  return (
    <>
      <tr>
        <td>{tasks}</td>
        <td>{date}</td>
      </tr>
    </>
  );
};

export default Todotasks;
