// 1. 액션 타입 정의
// 액션 타입은 대문자로 정의
// 문자열 내용은 '모듈 이름/액션 이름' 형태로 작성 권장 => 프로젝트 커져도 충돌 X
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 2. 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 3. counter 모듈의 초기 상태 설정
const initialState = {
  number: 0,
};

// 4. counter 모듈 리듀서 함수 생성
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

// 만들어준 리듀서 함수 내보내기
export default counter;

// default 붙인거 안붙인거 불러오는 방식이 다름. 붙인건 import counter from ... 식이고 안붙인건 import { increase } from ... 식.
// default 는 한개만 가능.
