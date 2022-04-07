import { todo } from "../todo";
import Todotasks from "./Todotasks";

function TodoList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {todo.map((task) => {
          return <Todotasks todos={task} />;
        })}
      </tbody>
    </table>
  );
}
export default TodoList