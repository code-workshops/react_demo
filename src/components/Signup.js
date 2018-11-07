import React, { Component } from 'react';


class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    // Takes registration form and calls AuthService.signup(user)
    console.log("Signup handler: %s ", this.refs)
    let user = {
      username: this.refs.username.value,
      email: this.refs.email.value,
      zipcode: this.refs.location.value,
      avatar: this.refs.avatar.value,
      password: this.refs.password.value
    };
    this.props.register(user);
  }

  render() {
    return (
      <form className="form" onSubmit={ this.handleSignup }>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="username" className="sr">Username</label>
            <input ref="username" id="username" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="email" className="sr">Email</label>
            <input ref="email" id="email" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="location" className="sr">Location</label>
            <input ref="location" id="location" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="avatar" className="sr">Avatar</label>
            <input type="file" ref="avatar" id="avatar" className="form-control" />
              <p className="help-block">Upload your avatar!</p>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="password" className="sr">Password</label>
              <input type="password"
                    ref="password"
                    id="password"
                    className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-default">Signup!</button>
      </form>
    )
  }
}

export default Signup;