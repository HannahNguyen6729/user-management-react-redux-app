import React, { Component } from "react";
import ManagerUserForm from "./ManagerUserForm";
import ManageUserList from "./ManageUserList";

export default class ManagerUserApp extends Component {
  render() {
    return (
    <div className='container-fluid' style={{background: 'linear-gradient(to bottom right, rgba(0, 255, 255, 1), rgba(128, 0, 255, 1))'}}>
        <ManagerUserForm/>
        <ManageUserList/>
    </div>
    );
  }
}
