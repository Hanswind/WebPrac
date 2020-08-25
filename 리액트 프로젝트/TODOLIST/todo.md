# 리액트 투두리스트

1. **create-react-app**

   ```
   $ yarn create react-app todo-app
   ```

2. **yarn을 사용해 필요한 라이브러리 설치**

   : Sass 사용 예정이기에 node-sass 설치

   : 리액트에서 다양하고 예쁜 아이콘 사용 위한 라이브러리 react-icons 설치

   ```
   $ cd todo-app
   $ yarn add node-sass classname react-icons
   ```

3. **기본 body css 수정 및 App 준비.**

   ```
   // index.css
   body {
   	margin : 0;
   	padding : 0;
   	background: #e9ecef;
   }
   ```

4. **yarn start**

   ```
   $ yarn start
   ```

   -----
   
5. **UI 구성하기**

   - TodoTemplate : 화면 가운데 정렬, 앱 타이틀(일정 관리)을 보여준다. child로 내부 JSX를 props로 받아와 렌더링
   - TodoInsert : 새로운 항목 입력하고 추가할 수 있는 컴포넌트. state 통해 인풋 상태 관리
   - TodoListItem : 각 할 일 항목에 대한 정보 보여주는 컴포넌트. todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줌,
   - TodoL:ist : todos 배열 props로 받아온후, 이를 배열 내장 함수 map을 이용해 여러개의 TodoListItem 컴포넌트로 변환하여 보여줌,

   <br>

6. **TodoTemplate 만들기**

   : 화면 가운데 정렬, 앱 타이틀(일정 관리)을 보여준다.
   :  child로 내부 JSX를 props로 받아와 렌더링

   ```react
   import React from "react";
   import "./TodoTemplate.scss";
   
   const TodoTemplate = ({ children }) => {
     return (
       <div className="TodoTemplate">
         <div className="app-title">일정 관리</div>
         <div className="content">{children}</div>
       </div>
     );
   };
   
   export default TodoTemplate;
   ```

   ```js
   function App() {
     return <TodoTemplate>Todo App 만들기!</TodoTemplate>;
   }
   ```

   <img src="./img/1.jpg" style="zoom:50%;" />

   <br>

7. **TodoInsert 인터페이스 만들기**

   : 새로운 항목 입력하고 추가할 수 있는 컴포넌트. state 통해 인풋 상태 관리

   : **상태관리는 아직 미구현!! (인터페이스만) **

   ```react
   import React from "react";
   import { MdAdd } from "react-icons/md";
   import "./TodoInsert.scss";
   
   const TodoInsert = () => {
     return (
       <form className="TodoInsert">
         <input placeholder="할 일을 입력하세요" />
         <button type="submit">
           <MdAdd />
         </button>
       </form>
     );
   };
   
   export default TodoInsert;
   ```

   ```react
   function App() {
     return (
       <TodoTemplate>
         <TodoInsert />
       </TodoTemplate>
     );
   }
   ```

   <img src="./img/2.jpg" style="zoom:50%;" />

   <br>

8. **TodoListItem 인터페이스 작성**

   : 각 할 일 항목에 대한 정보 보여주는 컴포넌트. todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줌

   ```react
   import React from "react";
   import {
     MdCheckBoxOutlineBlank,
     MdCheckBox,
     MdRemoveCircleOutline,
   } from "react-icons/md";
   import "./TodoListItem.scss";
   
   const TodoListItem = () => {
     return (
       <div className="TodoListItem">
         <div className="checkbox">
           <MdCheckBoxOutlineBlank />
           <div className="text">할 일</div>
         </div>
         <div className="remove">
           <MdRemoveCircleOutline />
         </div>
       </div>
     );
   };
   
   export default TodoListItem;
   ```

   <br>

9. **TodoList 인터페이스 작성**

   : todos 배열 props로 받아온후, 이를 배열 내장 함수 map을 이용해 여러개의 TodoListItem 컴포넌트로 변환하여 보여줌,

   ```react
   import React from "react";
   import TodoListItem from "./TodoListItem";
   import "./TodoList.scss";
   
   const TodoList = () => {
     return (
       <div className="TodoList">
         <TodoListItem />
         <TodoListItem />
         <TodoListItem />
       </div>
     );
   };
   
   export default TodoList;
   ```

   ```react
   function App() {
     return (
       <TodoTemplate>
         <TodoInsert />
         <TodoList />
       </TodoTemplate>
     );
   }
   ```

   ![](./img/3.jpg)





#### [꿀팁]

---

1. **닫혀있는 파일(탭에 없는)들에 대해서는 자동 완성 (자동 import) 제대로 작동하기 위한 파일**

   : 최상위 디렉토리에 jsconfig.json 파일 만들고 아래와같이작성

   ```
   {
   	"compilerOptions" : {
   		"target" : "es6"
   	}
   }
   ```

   : 이제 불러오려는 컴포넌트 파일 열려 있지 않아도 자동완성 통해 컴포넌트 불러와서 사용 가능.

   <br>

2. **flex 속성 연습 사이트**

   : http://flexboxfroggy.com/#ko

   <br>

3. **리액트 아이콘 모듈**

   : 다양한 아이콘 사용 가능

   : https://react-icons.github.io/

   ```
   npm install react-icons
   ```

   ```
   import { 아이콘이름 } from "react-icons/선택한아이콘목록명"
   ```

   <br>

4. **SCSS 문법 주요 개념**

   ```scss
   .A {
   	.B {     // = .A .B 의 개념
   		...
   	}
   }
   ```

   ```scss
   .A {
   	&:last-child() {   // .A:last-child() 의 개념
   	
   	}
   }
   ```

   ```scss
   .A {
   	&.checked {    // .A 클래스와 함께 .checked 클래스이름 쓰인 요소 (classname = ".A .checked")
   		//...
   	}
   }
   ```

   ```scss
   .A {
   	& + & {   // .A 클래스 요소와 .A 클래스 요소 사이에 적용
   		//...
   	}
   }
   ```

   