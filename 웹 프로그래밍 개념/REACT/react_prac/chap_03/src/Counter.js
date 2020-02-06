import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        // state의 초기값 설정
        this.state = {
            number : 0
        };
    }

    render() {
        const { number } = this.state;  // state 조회시 this.state 사용
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick={() => {
                        // this.setState를 사용해 state에 새로운 값 삽입 가능.
                        this.setState({number: number + 1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;