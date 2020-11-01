import React from "react";
import "./TodoTemplate.scss";

//  화면 가운데 정렬, 앱 타이틀(일정 관리)을 보여준다.
// child로 내부 JSX를 props로 받아와 렌더링
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
