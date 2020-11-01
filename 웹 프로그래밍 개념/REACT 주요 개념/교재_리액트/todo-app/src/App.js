import React, { useReducer, useRef, useCallback } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { dispatch } from "../../../../../../../AppData/Local/Microsoft/TypeScript/3.9/node_modules/rxjs/internal/observable/pairs";

// 많은 데이터 렌더링 확인 위한 todo 생성 함수
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// 삽입, 제거, 토글 행위 처리하는 함수
function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": // 새로추가
      // { type : 'INSERT', todo : { id : 1, text : 'todo', checked : false }}
      return todos.concat(action.todo);

    case "REMOVE": // 제거
      return todos.filter((todo) => todo.id !== action.id);

    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );

    default:
      return todos;
  }
}

function App() {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유값으로 사용될 id - ref 사용
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    //setTodos((todos) => todos.concat(todo));
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  // 주어진 id 값으로 todo 지우는 함수
  const onRemove = useCallback((id) => {
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: "REMOVE", id });
  }, []);

  // 작성한 내용 수정 기능 함수
  const onToggle = useCallback((id) => {
    //setTodos((todos) =>
    //  todos.map((todo) =>
    //    todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //  )
    //);
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
