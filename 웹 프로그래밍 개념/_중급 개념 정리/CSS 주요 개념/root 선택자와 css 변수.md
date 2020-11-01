# :root 선택자

: **문서의 트리의 루트 요소를 선택**

: HTML의 루트 요소인 `html`와 동일

: 단, 명시도는 `html` 선택자보다 낮음

<br>

#### [css 변수]

---

: **재사용한 임의의 값을 담는다**

: 보통 `:root`에서 `전역 css 변수`를 선언해서 사용한다. (종속대상이기에 **부모로 부터 상속받기 때문**)

```js
// css변수 선언
:root {
	--main-bg-color : brown;
}
```

```js
// css 변수 사용
.one {
	background-color : var(--main-bg-color);
}
```

