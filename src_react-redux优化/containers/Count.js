import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../redux/count_action'
import React, { Component } from 'react';
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
class Count extends Component {
  state = { count: 0 };

  increment = () => {
    const { value } = this.selectNumber;
    this.props.add(value * 1);
  }
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.sub(value * 1);
  }
  incrementOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1);
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.addAsync(value * 1, 500);
  }
  render () {
    return (
      <div>
        <h1>当前求和为: {this.props.count}</h1>
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

/**
 * 1.mapStateToProps函数返回的是一个对象
 * 2.返回对象的key就作为传递给UI组件props的key
 * 3.mapStateToProps用于传递状态
 */
// const mapStateToProps = state => ({ count: state })
/**
 * 1.mapDispatchToProps函数返回的是一个对象
 * 2.返回对象的key就作为传递给UI组件props的key
 * 3.mapDispatchToProps用于传递操作状态的方法
 */
// const mapDispatchToProps = dispatch => (
//   {
//     add: (number) => { dispatch(createIncrementAction(number)) },
//     sub: (number) => { dispatch(createDecrementAction(number)) },
//     addAsync: (number, time) => { dispatch(createIncrementAsyncAction(number, time)) },
//   }
// )
//创建并暴露CountContainer组件
export default connect(
  state => ({ count: state }),
  //mapDispatchToProps的一般写法
  // dispatch => ({
  //   add: (number) => { dispatch(createIncrementAction(number)) },
  //   sub: (number) => { dispatch(createDecrementAction(number)) },
  //   addAsync: (number, time) => { dispatch(createIncrementAsyncAction(number, time)) },
  // })
  //mapDispatchToProps的简写
  {
    add: createIncrementAction,
    sub: createDecrementAction,
    addAsync: createIncrementAsyncAction,
  }
)(Count)