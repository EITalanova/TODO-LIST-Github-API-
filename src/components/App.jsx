import { useState } from "react";
import { nanoid } from "nanoid";


export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          text,
          completed: false,

        }

      ])
      setText('');
    }
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}></button>
    </div>
  );
};
