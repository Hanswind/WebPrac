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

   <br>

   ------

   <br>

10. **App에서 전달해준 todos 값 내용 제대로 보여주기**

    - **App 컴포넌트에서 추가할 일정 항목 state 관리**

      ```react
      //App.js
      function App() {
        const [todos, setTodos] = useState([
          {
            id: 1,
            text: "리액트의 기초 알아보기",
            checked: true,
          },
          {
            id: 2,
            text: "컴포넌트 스타일링해 보기",
            checked: true,
          },
          {
            id: 3,
            text: "일정 관리 앱 만들어 보기",
            checked: false,
          },
        ]);
      
        return (
          <TodoTemplate>
            <TodoInsert />
            <TodoList todos={todos} />
          </TodoTemplate>
        );
      }
      ```

    - **App에서 전달해준 todos를 TodoList에서 받아서 TodoItem으로 변환해 렌더링**

      : map 사용해 todos에 있는 목록들 렌더링

      : **map 사용해 컴포넌트 변환할때는 key props 전달 필수!**

      : todo는 쪼개서 전달하는 것보다 한번에 props로 전달하는게 나중에 성능 최적할때 편리.

      ```js
      //TodoList.js
      const TodoList = ({ todos }) => {
        return (
          <div className="TodoList">
            {todos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
          </div>
        );
      };
      ```

    - **TodoList에서 전달해준 todo props를 받아 렌더링**

      : 조건부 렌더링 (checked가 true면 "checked" 클래스명 추가)

      ```react
      //TodoListItem.js
      const TodoListItem = ({ todo }) => {
        const { text, checked } = todo;
      
        return (
          <div className="TodoListItem">
            <div className={`checkbox ${checked ? "checked" : null}`}>  
              {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              <div className="text">{text}</div>
            </div>
            <div className="remove">
              <MdRemoveCircleOutline />
            </div>
          </div>
        );
      };
      ```

    <br>

11. **Todo 추가 기능 구현하기**

    - **인풋에 입력하는 값 관리할수있도록 TodoInsert 작성**

      : useState 사용해 value 상태 정의

      : onChange 인풋에 넣어줘서 적용

      : **이 과정에서 컴포넌트 리렌더링될때마다 함수 새로 만들지 말고, 한번 함수만들고 재사용할수있도록 useCallback hook 사용**

      ```react
      const TodoInsert = () => {
        const [value, setValue] = useState("");
      
        const onChange = useCallback((e) => {
          setValue(e.target.value);
        });
      
        return (
          <form className="TodoInsert">
            <input
              placeholder="할 일을 입력하세요"
              value={value}
              onChange={onChange}
            />
            <button type="submit">
              <MdAdd />
            </button>
          </form>
        );
      };
      ```

      <br>

    - **App 컴포넌트에 todos 배열에 새 객체 추가하는 onInsert 함수 생성**

      : 새로운 객체 만들때마다 id 값 1 씩 더해줘야함.

      : **id 값은 useRef 사용해 관리 (id 값 바뀌어도 컴포넌트 리렌더링 될 필요 없기 때문에!)**

      ```react
      // App.js
      ...
      // 고유값으로 사용될 id - ref 사용
        const nextId = useRef(4);
      
        const onInsert = useCallback(
          (text) => {
            const todo = {
              id: nextId.current,
              text,
              checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
          },
          [todos]
        );
      
       return (
          <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} />
          </TodoTemplate>
        );
      ```

      <br>

    - **TodoInsert에서 onSubmit 이벤트 설정**

      : 위에서 App에서 TodoInsert에 넣어준 onInsert 함수에 현재 useState를 통해 관리하고 있는 value 값을 파라미터로 넣어 호출

      ```react
      // TodoInsert.js
      const TodoInsert = ({ onInsert }) => {
        const [value, setValue] = useState("");
      
        const onChange = useCallback(
          (e) => {
            // onChange될때마다 입력값 onInsert 작업 수행
            //onInsert(value);
            setValue(e.target.value);
      
            // submit 이벤트는 브라우저에서 새로코침 발생시키는데 이를 방지 하는 함수
            //e.preventDefault();
          },
          [onInsert, value]  // callback에 사용되는 값, 함수들 기재.
        );
        ...
      ```

      ```react
      // 이와같이 onClick으로 처리해도 괜찮음!!
      const onClick = useCallback(() => {
          onInsert(value);
          setValue("");
          
          e.preventDefault();
        }, [onInsert, value]);
      
      ...
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
      ```

      



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

   <br>

   ----

5. **useCallback**

   : useMemo 기반. useMemo는 특정 결과값 재사용할때 사용, u**seCallback은 특정 함수 재사용시 사용**

   : 사용하지 않으면 함수들은 **컴포넌트가 리렌더링될때마다 새로 만들어진다**

   : 컴포넌트 결과물 재사용하거나 하는 최적화 작업  할때 함수를 재사용하는 것이 필요!!

   : **여기서 입력값 바뀔때마다 onChange 함수가 실행되는데, 그때마다 계속 렌더링되고 함수도 계속해서 새로 생성된다**

   : 이를 방지하기 위해 사용하는 개념!!

   ```react
   useCallback(function, deps);  // function : callback 적용할 함수, deps : 사용되는 배열
   ```

   ```js
   const onChange = useCallback((e) => {
       setValue(e.target.value);
     });
   ```

   <br>

6. **useRef**

   : 값이 바뀌어도 컴포넌트 리렌더링 필요없는 값에 적용하는 거

   ```
   const nextId = useRef(0);  // useRef 변수 지정하는법
   ...
   id : nextId.current;      // useRef 값 사용하는법
   ```

   <br>

7. **form과 onSubmit 이벤트 사용하는 이유**

   : onSubmit 이벤트는 **인풋에서 Enter 눌러도 발생하기 때문**

   : **버튼에서 onClick만 사용하면, 인풋에서 onKeyPress 이벤트 통해 Enter 감지하는 로직 따로 작성 필요...**