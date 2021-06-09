//引入CountUI组件
import CountUI from '../components/Count.jsx';
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../redux/count_action'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
/**
 * 1.mapStateToProps函数返回的是一个对象
 * 2.返回对象的key就作为传递给UI组件props的key
 * 3.mapStateToProps用于传递状态
 */
function mapStateToProps (state) {
  return {
    count: state
  }
}
/**
 * 1.mapDispatchToProps函数返回的是一个对象
 * 2.返回对象的key就作为传递给UI组件props的key
 * 3.mapDispatchToProps用于传递操作状态的方法
 */
function mapDispatchToProps (dispatch) {
  return {
    add: (number) => { dispatch(createIncrementAction(number)) },
    sub: (number) => { dispatch(createDecrementAction(number)) },
    addAsync: (number, time) => { dispatch(createIncrementAsyncAction(number, time)) },
  }
}
//创建并暴露CountContainer组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)