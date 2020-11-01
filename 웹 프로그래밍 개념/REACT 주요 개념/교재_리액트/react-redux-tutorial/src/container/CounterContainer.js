import React, { useCallback } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
// 액션 생성 함수 import
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()));
  const onDecrease = useCallback(() => dispatch(decrease()));
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;

/*

// '리덕스 스토어 안의 state'를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// '액션 생성함수'를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

// 리덕스와 연결
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/
