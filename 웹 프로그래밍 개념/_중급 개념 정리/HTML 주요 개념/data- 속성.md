# data- 속성

: **DOM에 데이터를 저장할 수 있는 사용자 정의 데이터 속성**

: 사용하고자 하는 용도에 적합한 속성이나 요소 없을때 해당 웹페이지에서 **독자적으로 사용하는 값**

: **사용을 권장하지 않는다** 

=> 브라우저 inspect(검사) 기능 이용해 데이터 속성 쉽게 수정 가능하기 때문..

=> **JS에 데이터 모델 저장하거나, 라이브러리나 프레임워크의 데이터 바인딩 이용해 관리 권장**

<br>

#### [data 속성 예제]

---

```html
// html
<div id = "testdiv" data-columns = "3" data-index-number="12314"></div>
```

1. **JS에서 접근하기**

   ```js
   const testDiv = document.getElementById('testdiv');
   
   testDiv.dataset.columns    // "3"
   testDiv.dataset.indexNumber  // "12314"
   ```

   : `dataset 속성`을 통해 읽어올수 있다. (IE 10 이하에선 작동 X)

   <br>

2. **CSS에서 접근하기**

   ```css
   #testdiv[data-columns="3"] {
   	width : 400px;
   }
   ```

   