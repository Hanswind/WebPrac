# var, const, let

: 셋다 **변수를 선언하는 키워드**

: let, const 는 ES6 이후 등장.

<br>

#### [1. 스코프 규칙]

---

: var은 **함수 스코프**, let과 const는 **블록 스코프**

- **함수 스코프 - var**

  : 선언된 **함수** 외부에서 내부에서 선언한 변수 참조 불가능. (지역변수)

  ```js
  var foo = 123;  // 전역변수
  console.log(foo);  // 123
  
  {
  	var foo = 456;  // 전역변수
  }
  console.log(foo);  // 456
  ```

  : 코드블럭 내부에서 새롭게 선언되었지만, 블럭 레벨 스코프가 아니기에 **재할당**

  <br>

- **블록 스코프 - let, const**

  : 모든 코드 블록(if, 함수, for, while, try, catch문등) 내에서 선언된 변수는 그 블록 내에서만 유효, 

  **이 블럭 외부에서는 블럭내 변수 참조 불가능**

  ```js
  let foo = 123; // 전역 변수
  
  {
    let foo = 456; // 지역 변수
    let bar = 456; // 지역 변수
  }
  
  console.log(foo); // 123
  console.log(bar); // ReferenceError: bar is not defined
  ```

  <br>

#### [2. 호이스팅]

----

- **var은 함수 스코프의 최상단으로 호이스팅**

  : 선언되어 값 정해지기 전에는 undefined로 초기화

  ```js
  function run() {
    console.log(foo); // undefined
    var foo = "Foo";
    console.log(foo); // Foo
  }
  
  run();
  ```

- **let, const는 블록 스코프의 최상단으로 호이스팅**

  : 호이스팅 되긴 했는데, 초기화 안되기 때문에 referenceError 발생 (=**TDZ(Temporal Dead Zone)**)

  ```js
  function checkHoisting() {
    console.log(foo); // ReferenceError
    let foo = "Foo";
    console.log(foo); // Foo
  }
  
  checkHoisting();
  ```

  <br>

#### [3. 중복 선언 가능 여부]

----

: **var**은 중복 선언 가능, **let**은 중복 선언 불가능

```js
var foo = 123;
var foo = 456;  // 중복 선언 허용

let bar = 123;
let bar = 456;  // Uncaught SyntaxError: Identifier 'bar' has already been declared
```

<br>

#### [4. 전역 객체로의 바인딩]

----

: strict 모드 아니다 가정,

- **var**이 글로벌 스코프에서 선언시, **글로벌 객체에 바인딩**

- **let, const**는 글로벌 스코프에서 선언되어도, **글로벌 객체에 바인딩 X**

  ```js
  var foo = "Foo";  // globally scoped
  let bar = "Bar"; // globally scoped
  
  console.log(window.foo); // Foo
  console.log(window.bar); // undefined
  ```

<br>

#### [참고]

---

- https://github.com/baeharam/Must-Know-About-Frontend/blob/master/Notes/javascript/var-let-const.md
- https://poiemaweb.com/es6-block-scope

