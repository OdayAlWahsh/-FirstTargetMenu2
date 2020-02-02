import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar">

                    <section className="sidebar">

                     
                   
                        <ul className="sidebar-menu" data-widget="tree">

                          <li>
                                <a href="#">
                                   Home
                                </a>
                            </li>


                            <li className="treeview">
                                <a href="#">
                                   
                                    <span>Registration</span>
                                    <i className="fa fa-angle-left pull-right" />
                                       
                                  
                                </a>

                                <ul className="treeview-menu">

                                    <li className="treeview">
                                        <a href="#">
                                            
                                            <span>Users</span>
                                            
                                                <i className="fa fa-angle-left pull-right" />
                                            
                                        </a>
                                        <ul className="treeview-menu">
                                        <li className="treeview">
                                        <a href="#">
                                            <i className="fa fa-pie-chart" />
                                            <span>Sub Users 1</span>
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-left pull-right" />
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="#"><i className="fa fa-circle-o" /> Sub of Sub Users </a>

                                            </li>

                                            

                                        </ul>
                                    </li>

                                        </ul>
                                    </li>

                                    <li className="treeview">
                                        <a href="#">
                                            <i className="fa fa-pie-chart" />
                                            <span>Groups</span>
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-left pull-right" />
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="#"><i className="fa fa-circle-o" /> Group1</a>

                                            </li>

                                            <li><a href="#"><i className="fa fa-circle-o" /> Group2</a></li>

                                        </ul>
                                    </li>

                                </ul>
                            </li>
                           
                           
                           
                           
                           
                           
                           
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-laptop" />
                                    <span>Foundation</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="#"><i className="fa fa-circle-o" /> Users Foundation</a></li>
                                    <li><a href="#"><i className="fa fa-circle-o" /> Groups Foundation</a></li>

                                </ul>
                            </li>





                        </ul>
                    </section>

                </aside>

            </div>
        )
    }
}
