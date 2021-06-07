//引入CountUI组件
import CountUI from '../components/Count.jsx';

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux';

//创建并暴露CountContainer组件
export default connect()(CountUI)