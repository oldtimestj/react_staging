/**
 * 1.该文件是创建一个为count文件服务的reducer
 * 2.reducer函数会接收到两个参数，分别为之前的状态和动作
 */
import { INCREMENT, DECREMENT } from './constant';

function countReducer (preState = 0, action) {
  // 从action对象中获取：type data
  const { type, data } = action;
  //根据type决定如何处理数据
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}

export default countReducer;