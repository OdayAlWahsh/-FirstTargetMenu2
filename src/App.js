import React, { Component } from 'react'
import Header from './Header'

import Menu from './Menu'

import axios from "axios";


const Tree = ({ data }) => (
  <>
   

        <ul className="sidebar-menu" data-widget="tree">
          {data && data.map(item => (
            <li className={item.children.length > 0 ? 'treeview' : ''}>
              <a>
              <i className="fa fa-circle-o" />
                <span> {item.title}</span>
                
                  <i className={item.children.length > 0 ? 'fa fa-angle-left pull-right' : ' '} />
               
              </a>
              <ul className="treeview-menu">
                <li  >{item.children && <Tree data={item.children} />}</li>
              </ul>

            </li>
          ))}
        </ul>
     
  </>
);
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios
      .get("http://demo9606913.mockable.io/menu")
      .then(data => {

        this.setState({ list: data.data });
      });
    console.log(this.state.list);
  }
  render() {
    return (
      <div>
        <Header />
     
        <div>
          <aside className="main-sidebar">

            <section className="sidebar">
                  <Tree data={this.state.list} />
             </section>

          </aside>

        </div> 
        
      </div>
    )
  }
}
