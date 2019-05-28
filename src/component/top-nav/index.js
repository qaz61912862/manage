import React from 'react'
import { Link } from 'react-router-dom'


class TopNav extends React.Component{
  constructor(props) {
    super(props)
  }
  // 退出登录
  onlogout() {

  }
  render() {
    return (
      <div className="navbar navbar-default top-navbar">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" href="javascript:;">
                        <i className="fa fa-user fa-fw">
                        <span>欢迎，adminxxx</span>
                        </i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a onClick={this.onlogout}><i className="fa fa-sign-out fa-fw"></i>退出登录</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
  }
}

export default TopNav