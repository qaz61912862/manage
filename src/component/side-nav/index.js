import React, {Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'


class SideNav extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          name: '首页',
          path: '/',
          children: []
        },
        {
          name: '商品',
          path: '/product',
          children: [
            {
              name: '商品管理',
              path: '/product'
            },
            {
              name: '品类管理',
              path: '/product-category'
            }
          ]
        },
        {
          name: '订单',
          path: '/order',
          children: [
            {
              name: '订单管理',
              path: '/order'
            }
          ]
        },
        {
          name: '用户',
          path: '/user',
          children: [
            {
              name: '用户管理',
              path: '/user'
            }
          ]
        }
      ]
    }
  }
  test(data) {
    if (data.children.length) {
      return (<span className="fa arrow"></span>)
    } else {
      return null
    }
  }
  render() {
    return (
      <div className="navbar-default navbar-side">
            <div className="sidebar-collapse">
                <ul className="nav">
                    {
                      this.state.list.map((item, index) => {
                        return (
                          <li>
                            <NavLink exact to={item.path} activeClassName={item.children.length == 0 ? 'active-menu':''}>
                              <i className="fa fa-sitemap"></i>
                              <span>{item.name}</span> 
                              {
                                this.test(item)
                              }
                            </NavLink>
                            <ul className="nav nav-second-level collapse in">
                              {
                                item.children.map((item2, index2) => {
                                  return (
                                    <Fragment>
                                      <li>
                                          <NavLink to={item2.path} activeClassName="active-menu">{item2.name}</NavLink>
                                      </li>
                                    </Fragment>
                                  )
                                })
                              }
                            </ul>
                        </li>
                        )
                      })
                    }
                </ul>

            </div>

        </div>
    )
  }
}

export default SideNav