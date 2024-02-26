import { useState } from "react";
import FormAddTodo from "./Components/FormAddTodo";
import Todos from "./Components/Todos";

export interface Todo {
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

  const toggleTodo = (selectedTodo: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    });
  };

  const removeTodo = (selectedTodo: Todo) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo !== selectedTodo);
    });
  };

  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo addTodo={addTodo} />
      <div>
        <Todos
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default App;
