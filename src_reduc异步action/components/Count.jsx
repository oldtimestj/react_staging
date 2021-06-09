import React, { Component } from 'react';
//引入store，用于获取redux中保存状态
import store from '../redux/store';
//引入actionCreator，专门用于创建action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../redux/count_action.js';


export default class Count extends Component {
  state = { count: 0 };
  componentDidMount () {
    //检测redux中状态的变化，只要变化就调用render
    store.subscribe(() => {
      this.setState({});
    })
  }
  increment = () => {
    const { value } = this.selectNumber;
    // 通知redux加上value
    store.dispatch(createIncrementAction(value * 1));
  }
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  }
  incrementOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAsyncAction(value * 1, 500));
  }
  render () {
    console.log('22222', this.props);
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
