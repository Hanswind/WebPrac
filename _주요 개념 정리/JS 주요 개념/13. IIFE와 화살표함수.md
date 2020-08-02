# IIFE

: Immediately-Invoked Function Expression (즉시 실행 함수 표현식)

- **즉시 실행해야한다**
- **함수 표현식이여야 한다 (선언식 X)** - **익명함수, 기명함수 모두 가능**

<br>

#### [2가지 형태와 화살표 함수]

---

: IIFE는 2가지 형태로 사용 가능

```
(function(){ console.log('IIFE'); })();
(function(){ console.log('IIFE'); }());
```

```
(() => console.log('IIFE'))();
(() => console.log('IIFE')());
```

<br>

#### [IIFE 사용하는 이유]

----

: **전역 스코프(Global Scope)에 변수를 선언하는 것을 피하기 위해서 사용**

ex) 클로저와 private 데이터

```js
const getCount = (function(){
  let count = 1;
  return function() {
    ++count;
    return count;
  }
})();

console.log(getCount()); // 2
console.log(getCount()); // 3
```

:  **IIFE 안의 익명함수는 클로저**가되고 변수는 **private 데이터**가 되므로 외부서 접근 방지.

