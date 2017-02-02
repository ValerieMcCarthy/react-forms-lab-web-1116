const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this)
    this.charactersRemaining = this.charactersRemaining.bind(this)
  }

  handleChange(event){
    this.setState({
    value: event.target.value
    
    })
  }

  charactersRemaining(){
    return this.props.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong><p>{this.charactersRemaining()}</p>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

module.exports = TwitterMessage;
