# img 태그의 속성(srcset, size)

#### [img 태그 구조]

----

````html
<img
  srcset="경로 원본크기,
          경로 원본크기,
          경로 원본크기"
  sizes="(미디어조건) 최적화출력크기,
         (미디어조건) 최적화출력크기,
         기본출력크기"
  src="경로"
  alt="대체텍스트" />

<img
  srcset="images/heropy_small.png 400w,
          images/heropy_medium.png 700w,
          images/heropy_large.png 1000w"     
  sizes="(max-width: 500px) 444px,
         (max-width: 800px) 777px,
         1222px"
  src="images/heropy.png"
  alt="HEROPY" />
````

: src 속성은 srcset를 사용할수없는 환경에서 동작

<br>

#### [srcset]

---

**: 브라우저에서 조건에 따라 사용할 수 있는 이미지 소스를 여러개 지정하는 방법**

: 이미지의 크기로 `px`단위가 아닌 `w` 디스크립터 혹은 `x` 디스크립터를 입력

: **작은 크기 이미지부터 순서대로 입력**

<br>

1. **W descriptor**

   : 이미지의 원본 가로 너비를 의미 (400x300 이면 400w)

   ```html
   <img
     srcset="images/heropy_small.png 400w,
             images/heropy_medium.png 700w,
             images/heropy_large.png 1000w"
     src="images/heropy.png"
     alt="HEROPY" />
   ```

   ```css
   // 아래 css 미디어 조건과 비슷한 선언문
   .some-image {
     width: 400px;
     height: 400px;
     background-image: url("images/heropy_small.png");   
     background-repeat: no-repeat;
   }
   @media (min-width: 401px) {
     .some-image {
       width: 700px;
       height: 700px;
       background-image: url("images/heropy_medium.png");   
     }
   }
   @media (min-width: 701px) {
     .some-image {
       width: 1000px;
       height: 1000px;
       background-image: url("images/heropy_large.png");   
     }
   }
   ```

   <br>

2. **x descriptor**

   : 이미지의 비율 의도를 의미

   ```
   <img
     srcset="images/heropy_small.png 1x,
             images/heropy_medium.png 1.75x,
             images/heropy_large.png 2.5x"
     src="images/heropy.png"
     alt="HEROPY" />
   ```

   : [mydevice.io](https://www.mydevice.io/#tab1)에서 현재 화면의 측정 값을 확인가능

   : 일반적으로 정수(integer) 값으로 제공하는 것이 좋다.

   <br>

3. **size**

   ```html
   <img
     srcset="images/heropy_small.png 400w,
             images/heropy_medium.png 700w,
             images/heropy_large.png 1000w"
     sizes="(min-width: 1000px) 700px"
     src="images/heropy.png"
     alt="HEROPY" />
   ```

   뷰포트 너비가 400px 이하일 때 `heropy_small.png`(400px)가 사용
   뷰포트 너비가 401~700px 일 때 `heropy_medium.png`(700px)가 사용.
   뷰포트 너비가 701~999px 일 때 `heropy_large.png`(1000px)가 사용
   뷰포트 너비가 1000px 이상일 때 `heropy_medium.png`(700px)가 사용

   <br>

   ```html
   <img
     srcset="images/heropy_small.png 400w,
             images/heropy_medium.png 700w,
             images/heropy_large.png 1000w"
     sizes="500px"
     src="images/heropy.png"
     alt="HEROPY" />
   ```

   뷰포트 너비와 상관없이(‘헛 상관이 없다고?!’) `heropy_medium.png`만 사용

