# CSS 네이밍 규칙

1. **카멜케이스 방식 대신 하이픈 사용**

   ```css
   /* 별로 */
   .redBox {...}
   
   /* 권장 */
   .red-box {...}
   ```

   <br>

2. **BEM 명명 규칙 사용**

   - **B(Block)** : 기본적인 component 나타냄 (하이픈 사용)

     ```css
     .stick-man {...}
     ```

   - **E(Elements)** : 요소. **component 이루고 있는 구성요소를 표현할때 사용** (2개의 밑줄(__))

     ```css
     .stick-man__head {...}
     .stick-man__arms {...}
     ```

   - **M(Modifier)** : 수정. **component(or element)를 수정한다는 뜻으로 사용** (2개의 하이픈(--))

     ```
     .stick-man--blue {...}
     .stick-man--red {...}
     ```

     ```
     .stick-man__head--small {...}
     .stick-man__head--big {...}
     ```

   <br>

3. **js에서 사용하는 selector일때**

   1) DOM element와의 관계를 나타내기 위해 `js-` 이름 사용.

   ```html
   <div class="site-navigation js-site-navigation"></div>
   ```

   2) **rel 속성 사용**

   : rel 속성(**링크된 문서 사이의 연관관계 명시**)은 링크된 자원이 참조하는 문서와의 관계를 정의한다

   ```js
   <div class="site-navigation" rel="js-site-navigation"></div>
   ```

   ```
   const nav = document.querySelector("[rel=`js-site-navigation`]")
   ```

   : **data- 속성은 이 목적으로 사용 자제** (data속성은 사용자 데이터 저장에 사용하기 때문)

   

   

