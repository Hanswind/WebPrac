# 5. ref: DOM에 이름 달기

#### [ref]

---

: HTML에서 id 사용해 DOM에 이름다는 것처럼 **리액트 프로젝트 내부에서 이름 다는법**.

: **전역적으로 작동하지않고 컴포넌트 내부에서만 작동해 문제 X**

: 물론, 리액트 내부에서 id 사용할 수 있지만, 리액트 특성상 해당 DOM을 렌더링할때 전달되는데 이때 **중복되는 id** 값 가진 여러 DOM 생길수 있는 위협을 미리 감지하기 힘들다.

<br>

#### [ref를 사용하는 경우]

---

: **DOM을 꼭 직접적으로 건드려야 할때**

: **state로 해결할 수 없는 기능 구현할때**

​	ex) 특정 input에 포커스 주기

​	ex) 스크롤 박스 조작하기

​	ex) Canvas 요소에 그림 그리기

<br>

#### [ref 사용]

----

: ref 사용하는 두가지 방법

1. **콜백 함수를 통한 ref 설정**

   : ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해준다

   ```react
   <input ref = {(ref) = > {this.input = ref}} />
   
   // 이 콜백 함수는 ref 값을 파라미터로 전달 받음
   // 그리고 함수내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정
   ```

   : 이렇게 하면 this.input은 input 요소의 DOM을 가리킨다.

   <br>

2. **createRef를 통한 ref 설정**

   : 리액트에 내장되어있는 createRef라는 함수를 사용하는 방법

   : 더 적은 코드로 쉽게 사용가능 (리액트 v16.3 이후 도입)

   ```react
   // createRef 예시 코드
   import React, { Component } from 'react';
   
   class RefSample extends Component {
   	input = React.createRef();
   	
   	handleFocus = () => {
   		this.input.current.focuse();
   	}
   	
   	render() {
   		return (
   			<div>
   				<input ref = {this.input} />
   			</div>
   		);
   	}
   }
   
   export default RefSample;
   ```

   : 우선 컴포넌트 내부에서 **멤버변수로 React.createRef()를 담아준다**

   : 이후 해당 멤버 변수를 ref를 달고하 하는 요소에 ref props로 넣어주면 ref 설정 완료

   : 이후 ref 설정 DOM 접근하려면 this.input.current를 조회하면 된다.

   **[코드 예제 - chap05/VaildationSample.js]**

   <br>

   #### [컴포넌트에 ref 달기]

   ----

   : 리액트에서는 컴포넌트에도 ref 달수 있다.

   : **주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할때 쓰는 방식**

   ```react
   <MyComponent ref = {(ref) => {thismyComponent = ref}} />
   ```

   : 이렇게 하면 **MYComponent 내부의 메서드 및 멤버 변수에도 접근 가능**

   <br>

   #### [컴포넌트에 ref 달아 외부 파일로 메서드 전달 예제]

   : **두 파일다 클래스 component 일때 작동**

   ```react
   // ScrollBox.js
   ...
   scrollToBottom = () => {
       const scrollHeight = this.box.scrollHeight;
       const clientHeight = this.box.clientHeight;
       this.box.scrollTop = scrollHeight - clientHeight;
   }
   ...
   render... return (...
   	<div style = {style} ref = {(ref) => {this.box = ref}}>
           <div style = {innerStyle} />          
       </div>
   }
   ```

   ```react
   // App.js
   ...
   <ScrollBox ref = {(ref) => this.scrollBox = ref} />
   <button onClick = {() => this.scrollBox.scrollToBottom*()}/>
   ...
   ```

   : onClick을 화살표 함수 형태로 작성안해도 틀리진 않지만, 컴포넌트가 처음렌더링될때 this.scrollBox 값이 undefined이므로, this.scrollBox.scrollToBottom 읽어오는 과정에서 오류 발생.

   : 그래서 **화살표 함수 문법 사용해 아예 새로운 함수 만들고 그 내부에서 this.scrollBox.scrollToBottom 메서드 실행하면, 버튼 누를때 값 읽어와 실행해 오류 발생 X**

   **[예제파일 - chap05/ScrollBox.js] 참고**

   <br>

   #### [ref 마무리]

   ----

   : **컴포넌트 내부에서 DOM에 직접 접근해야할때 ref를 사용**

   : ref 사용안하고도 원하는 기능 구현가능한지 반드시 고려후에 활용하기

   : 서로 다른 컴포넌트끼리 데이터 교류할때 ref 사용하는 건 잘못된 사용 방법

    (리액트 사상에 어긋날 설계.. 스파게티 구조화 주요 원인)

   : 그래서 언제나 **데이터는 부모-자식 흐름으로 교류권장**

   : 나중에 **리덕스, Contenxt API 사용해 효율적으로 교류하는 방법 배울 예정**

   : **(중요)함수형 컴포넌트에선 ref 대신 useRef라는 Hook 함수 사용**

     (사용법은 유사. 8장에서 자세히)

   



