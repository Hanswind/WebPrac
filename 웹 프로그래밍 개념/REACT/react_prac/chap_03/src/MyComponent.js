import React from 'react';

const MyComponent = props => {
    return <div>나는 {props.name} 입니다.</div>;
};

MyComponent.defaultProps = {
    name : '리액트'
}

export default MyComponent;