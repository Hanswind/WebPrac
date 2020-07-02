# JS 로딩 UI

: **데이터를 불러오는 중일 때, 현재 데이터를 불러오는 중임을 유저에게 알리는 UI를 추가**

<br>

#### [로딩 UI의 흐름]

---

1. 목록 요청 시작

   : 로딩 UI show (등장)

2. 요청중...

   : show...

3. 요청 끝

4. 요청 결과 상태에 배치, 대입 = update

5. 요청 결과 렌더링

   : 로딩 UI hide = 숨겨짐

<br>

#### [로딩 UI 실 구현]

---

1. **Loading.js 컴포넌트 생성**

   ```html
   // index.html
   ...
   <script src="src/Loading.js"></script>
   ...
   ```

2. **Loading.js 기본 구조 작성**

   ```js
   class Loading {
     constructor({ $target }) {
       const $loading = document.createElement("div");
       this.$loading = $loading; // 레퍼런스 연결
       $target.appendChild(this.$loading);
   
       this.render();
     }
   
     render() {  // 로딩 ui는 render가 필요하다
         this.$loading.innerHTML = `
           <div class="Loading">
   			<p>로딩</p>
   		</div>
         `
     }
   }
   ```

3. **app.js에 Loading 객체 생성**

   ```
   ...
   this.loading = new Loading({
         $target,
       });
   ...
   ```

   : 여기까지해서 화면에 '로딩'이라는 글자가 뜨면 성공 

4. **로딩 div css**

   ```css
   /* 로딩 */
   .Loading {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     background-color: rgba(0, 0, 0, 0.3);
     text-align: center;
   }
   ```

   : 기본적으로 로딩중에 다른 동작 하지 못하도록 막음

   : height를 vh들 두어서 웹 브라우저 창의 크기가 변해도 자동으로 높이 조절되게끔 (아니면 body에 맞춰짐)

   <br>

5. **로딩중 창 제어**

   : 클래스, 컴포넌트 상태 등.. 으로 제어 가능. (여기선 컴포넌트 상태를 이용해서 제어)

   ```js
   // Loadng.js
   class Loading {
     $loading = null;
     data = null;
   
     constructor({ $target }) {
       const $loading = document.createElement("div");
       this.$loading = $loading; // 레퍼런스 연결
       $target.appendChild(this.$loading);
   
       this.data = {
         show: false,
       };
   
       this.render();
     }
   
     render() {
       if (this.data.show) {
         this.$loading.innerHTML = `
           <div class="Loading">
               <p>로딩중</p>
           </div>
         `;
       } else {
         this.$loading.innerHTML = ``
       }
     }
   }
   ```

   : **show 변수가 true면 loading 창이 보여진다**

   <br>

6. **Input에 입력해서 로딩되는 동안 이 show 변수를 true로 변경**

   ```js
   // App.js
   ...
   this.searchInput = new SearchInput({
         $target,
         onSearch: (keyword) => {
           // 로딩 show
           api.fetchCats(keyword).then(({ data }) => {
             this.setState(data);
             // 로딩 hide
           });
         },
       });
   ...
   ```

   : 이와 같이 하면 구현 된다.

   <br>

   : **setState 방식을 이용해 Loading에 show 상태 변경해주는 함수 두개 생성해주기**

   ```
   // setState 기본 구조
   setState(nextData) {
   	this.data = nextData;
   	this.render();
   }
   ```

   ```js
   // Loading.js
    ...
    showLoading() {
       this.setState({ show: true });
     }
   
     hideLoading() {
       this.setState({ show: false });
     }
   
     setState(nextData) {
       this.data = nextData;
       this.render();
     }
     ...
   ```

   ```js
   // App.js
   	...
   	this.searchInput = new SearchInput({
         $target,
         onSearch: (keyword) => {
           // 로딩 show
           this.loading.showLoading();
           api.fetchCats(keyword).then(({ data }) => {
             this.setState(data);
             // 로딩 hide
             this.loading.hideLoading();
           });
         },
       });
       ...
   ```