# JS에서 this 동작 방법

#### [규칙]

---

1. 함수를 `new` 키워드를 이용해 호출되는 경우, 함수 내부의 `this`는 **새로운 객체**다.

   ```js
   function Example() {
   	this.value = 10;
   	console.log(this);
   }
   
   new Example();   // -> {value : 10}
   ```

   <br>

2. 함수를 호출하기위해 `apply`, `call`, `bind`가 사용되면, 함수내 `this`는 **인자로 전달되는 객체**다.

   ```js
   function Example() {
   	console.log(this);
   }
   
   var obj = { value : 5 };
   var boundFn = Example.bind(obj);
   
   boundFn();      // {value:5}
   fn.call(obj);   // {value:5}
   fn.apply(obj);  // {value:5}
   ```

   <br>

3. **함수가 메소드로 호출되면 ** `this` 는 **함수가 프로퍼티인 객체**

   ```
   var obj = {
   	value : 5,
   	printThis : function() {
   		console.log(this);
   	}
   };
   
   obj.printThis();  // { value : 5, printThis : f }
   ```

   <br>

4. https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3