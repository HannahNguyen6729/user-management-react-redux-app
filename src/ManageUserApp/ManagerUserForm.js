import React, { Component } from "react";
import { connect } from "react-redux";
import {
  signUpAction,
  turnOnDisabled,
  updateUserInfo,
} from "../reduxStore/Actions/ManageUserActions";

class ManagerUserForm extends Component {
  state = {
    values: {
      account: "",
      password: "",
      email: "",
      name: "",
      phone: "",
      type: "customer",
    },
    errors: {
      account: "",
      password: "",
      email: "",
      name: "",
      phone: "",
      type: "",
    },
  };
  handleOnChange = (event) => {
    let { name, value } = event.target;
    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.errors };
    //validate whitespace
    if (value.trim() === "") {
      newError[name] = "This field is required";
    } else {
      newError[name] = "";
    }
    //validate Email
    if (name === "email") {
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(String(value).toLowerCase())) {
        newError[name] = "Invalid email!";
      }
    }
    //validate phone Number
    if (name === "phone") {
      const regex = /^[0-9]+$/;
      if (!regex.test(value)) {
        newError[name] = "Invalid phone number!";
      } else {
        newError[name] = "";
      }
    }
    //setState
    this.setState({
      values: newValue,
      errors: newError,
    });
  };
  handleSignUp = (event) => {
    event.preventDefault();
    let { values, errors } = this.state;
    let flag = true;
    //check empty inputs
    for (let key in values) {
      if (values[key].trim() === "") {
        flag = false;
      }
    }
    //check errors
    for (let key in errors) {
      if (errors[key] !== "") {
        flag = false;
      }
    }
    if (flag) {
      alert("success");
      let newUser = {
        ...this.state.values,
        id: Date.now(),
      };
     
      this.setState({
        values: {
          account: "",
          password: "",
          email: "",
          name: "",
          phone: "",
          type: "customer",
        }}, ()=>  this.props.dispatch(signUpAction(newUser)));
    } else {
      alert("Invalid data");
      return;
    }
  };
  handleUpdate=(e)=>{
    e.preventDefault();
    let updateUser = this.state.values;
    this.setState({
        values: {
          account: "",
          password: "",
          email: "",
          name: "",
          phone: "",
          type: "customer",
        }}, () => {
        this.props.dispatch(updateUserInfo(updateUser));
        this.props.dispatch(turnOnDisabled(true))
  });
  };

  render() {
    return (
      <div className="row justify-content-center align-items-center py-5 ">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card text-primary" style={{ borderRadius: 15 }}>
            <div className="card-body p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0">Registration Form</h3>
              <form>
                <div className="row font-italic">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline mb-4">
                      <label>Account</label>
                      <input
                        onChange={this.handleOnChange}
                        value={this.state.values.account}
                        type="text"
                        name="account"
                        className="form-control form-control-lg"
                      />
                      <span className="text-danger">
                        {this.state.errors.account}
                      </span>
                      <br></br>
                    </div>
                    <div className="form-outline mb-4">
                      <label>Password</label>
                      <input
                        onChange={this.handleOnChange}
                        value={this.state.values.password}
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                      />
                      <span className="text-danger">
                        {this.state.errors.password}
                      </span>
                      <br></br>
                    </div>
                    <div className="form-outline mb-4">
                      <label>Email</label>
                      <input
                        onChange={this.handleOnChange}
                        value={this.state.values.email}
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                      />
                      <span className="text-danger">
                        {this.state.errors.email}
                      </span>
                      <br></br>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline mb-4">
                      <label>Name</label>
                      <input
                        onChange={this.handleOnChange}
                        value={this.state.values.name}
                        type="name"
                        name="name"
                        className="form-control form-control-lg"
                      />
                      <span className="text-danger">
                        {this.state.errors.name}
                      </span>
                      <br></br>
                    </div>
                    <div className="form-outline mb-4">
                      <label>Phone number</label>
                      <input
                        onChange={this.handleOnChange}
                        value={this.state.values.phone}
                        type="tel"
                        name="phone"
                        className="form-control form-control-lg"
                      />
                      <span className="text-danger">
                        {this.state.errors.phone}
                      </span>
                      <br></br>
                    </div>
                    <div className="form-outline mb-4">
                      <label>User types</label>
                      <select
                        onChange={this.handleOnChange}
                        name="type"
                        value={this.state.values.type}
                        className="select form-control-lg d-block text-primary"
                        style={{ fontSize: 19 }}
                      >
                        <option value="0" disabled>
                          Choose option
                        </option>
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <button
                    onClick={(e) => {
                      this.handleSignUp(e);
                    }}
                    className="btn btn-success mr-3"
                  >
                    Sign up
                  </button>
                  {this.props.disabled? (<button onClick={(e) => {this.handleUpdate(e)}} disabled className="btn btn-primary"> Update </button>) :
                   (<button onClick={(e) => this.handleUpdate(e)} className="btn btn-primary">Update </button>)}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    let { editedInfo } = this.props;
    if (editedInfo.id !== prevProps.editedInfo.id) {
      this.setState({
        values: {
          id: editedInfo.id,
          account: editedInfo.account,
          password: editedInfo.password,
          email: editedInfo.email,
          name: editedInfo.name,
          phone: editedInfo.phone,
          type: editedInfo.type,
        },
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    editedInfo: state.ManageUserReducer.editedUserInfo,
    disabled: state.ManageUserReducer.disabled
  };
};
export default connect(mapStateToProps)(ManagerUserForm);
