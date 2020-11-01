import React, { Component } from "react";

class HistorySample extends Component {
  // 1. 뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 2. 홈으로 이동 (특정 라우트로 이동)
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    // 3. 설정하면 페이지에 변화가 생기려고 할때마다 아래 문구를 질문함
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  componentWillUnmount() {
    // 4. 컴포넌트가 언마운트되면 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <h1>왜안보여</h1>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
