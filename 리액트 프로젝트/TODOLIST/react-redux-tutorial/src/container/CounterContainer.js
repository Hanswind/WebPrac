import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
// 액션 생성 함수 import
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

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
