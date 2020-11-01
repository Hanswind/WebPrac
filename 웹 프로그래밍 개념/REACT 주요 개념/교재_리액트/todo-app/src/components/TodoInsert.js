import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    // onChange될때마다 입력값 onInsert 작업 수행
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      // submit 이벤트는 브라우저에서 새로코침 발생시키는데 이를 방지 하는 함수
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit" onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
