const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: '',
        password: ''
      }

      this.handleClick = this.handleClick.bind(this)
      this.handleUser = this.handleUser.bind(this)
      this.handlePassword = this.handlePassword.bind(this)  
    };

    handleClick(event){
      event.preventDefault()
      if(this.state.username.length > 0 && this.state.password.length >0){
        this.props.onSubmit()
      }
    }

    handleUser(event){
      this.setState({
        username: event.target.value
      })
    }

    handlePassword(event){
      this.setState({
        password: event.target.value
      })
    }

  

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;












