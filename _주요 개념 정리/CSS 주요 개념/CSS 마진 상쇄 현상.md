# CSS 마진 상쇄

: [정리 블로그](https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4#%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84-%EA%B7%9C%EC%B9%99-%EC%98%88%EC%99%B8](https://velog.io/@raram2/CSS-마진-상쇄Margin-collapsing-원리-완벽-이해#마진-상쇄-규칙-예외))

#### [마진 겹침 현상]

---

```
블록의 top 및 bottom 마진은 때로는 (결합되는 마진 중 크기가) 
가장 큰 한 마진으로 결합(combine, 상쇄(collapsed))됩니다
-MDN
```

: **어떤 두 개 이상 블럭 요소의 상하 마진이 겹칠떄** 한쪽의 마진 값만 적용하는 브라우저의 렌더링 규칙

: 인접한 두 박스가 온전한 **block-level** 요소일때만 적용 (inline, inline-block 등일땐 발생 X)

: 좌우는 마진 겹쳐도 상쇄 X

: 박스가 **postion: absolute | float: left/right | display: flex | display: grid** 일땐 상쇄 X

<br>

#### [마진 상쇄 발생 상황 3가지]

---

1. **인접 형제 박스 간 상하 마진 겹칠 때**

   ![](https://media.vlpt.us/post-images/raram2/97e16a40-121f-11ea-aaba-65695302c179/01-margin-collapsing-sibling-case.png)

   : **더 큰 마진 값으로 상쇄, 동일값일시 중복 상쇄**

   <br>

2. **빈 요소의 상하 마진이 겹칠 때**

   ![](https://media.vlpt.us/post-images/raram2/ffac75c0-121f-11ea-aaba-65695302c179/02-margin-collapsing-emptybox-case.png)

   : '빈 요소'는 높이(height)가 0인 상태의 블록 (height등 지정 X, 내부 inline 컨텐츠 없는 경우)

   => **위 아래 가르는 경계가 없음** => **다중 상쇄 (여러번 발생)**

   : 우선 빈 요소기준 위아래에서 상쇄, 이후, 빈요소 위, 빈요소 아래끼리 상쇄.

   <br>

3. **부모 박스와 첫번째(마지막) 자식 박스의 상단(하단) 마진 겹칠 때**

   ![](https://media.vlpt.us/post-images/raram2/3bc26dc0-1221-11ea-aaba-65695302c179/03-margin-collapsing-firstchild-case1.png)

   ![](https://media.vlpt.us/post-images/raram2/59ea9cf0-1221-11ea-aaba-65695302c179/06-margin-collapsing-lastchild-case.png)

   : 이 경우에는

     1) 부모요소에서 margin이 아닌 padding이용해 중복 적용

     2) 자식 요소에서 border-top 이나 border-bottom 요소를 써 벽을 만들면 중복 적용

   ​	![](https://media.vlpt.us/post-images/raram2/62855f30-1221-11ea-aaba-65695302c179/07-margin-collapsing-recomm-case.png)

