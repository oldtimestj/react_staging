import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink'
import { Route, Switch } from 'react-router-dom'
import News from './News';
import Message from './Message'

class index extends Component {
  render () {
    return (
      <div>
        <h3>我是Home内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/**注册路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default index;