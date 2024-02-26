import { useState } from "react";
import FormAddTodo from './Components/FormAddTodo';

interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos = [
  {
    text: "Buy groceries",
    complete: false,
  },
  { text: " Clean the house", complete: true },
];
const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    };

  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <article key={todo.text}>
            <label htmlFor="todo">
              <input type="checkbox" checked={todo.complete} />
              {todo.text}
            </label>
          </article>
        ))}
      </div>
    </div>
  );
};

export default App;
