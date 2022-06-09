import React, { Component } from "react";
import { connect } from "react-redux";
import {deleteUserAction, editUserInfo, turnOffDisabled} from '../reduxStore/Actions/ManageUserActions';

class ManageUserList extends Component {
  handleEdit=(user)=>{
    this.props.dispatch(editUserInfo(user));
    this.props.dispatch(turnOffDisabled(false))
  };
  renderUserList = () => {
    let { userList } = this.props;
    return userList.map((user, index) => (
      <tr key={user.id}>
        <td className="align-middle">{index+1}</td>
        <td className="align-middle">{user.account}</td>
        <td className="align-middle">{user.name}</td>
        <td className="align-middle">{user.email}</td>
        <td className="align-middle"> {user.phone}</td>
        <td className="align-middle"> {user.type} </td>
        <td className="text-center">
          <button 
            onClick={()=> this.handleEdit(user)}
            className="btn btn-primary mr-2">Edit</button>
          <button 
            onClick={() =>this.props.dispatch(deleteUserAction(user.id))}
            className="btn btn-danger">Delete</button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="row px-5">
        <div className="col-12 text-light pb-5 px-5">
          <h3 className="mb-3">User List</h3>
          <table className="table-bordered table text-light ">
            <thead>
              <tr>
                <th>Number</th>
                <th>Account</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>User Types</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderUserList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.ManageUserReducer.userArr,
  };
};
export default connect(mapStateToProps)(ManageUserList);
