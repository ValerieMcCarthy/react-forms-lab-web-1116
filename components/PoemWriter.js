const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      textArea: '',
      valid: false
    };

    this.handleChange = this.handleChange.bind(this)
    this.validPoem = this.validPoem.bind(this)
     this.renderUserMessage = this.renderUserMessage.bind(this)

  }
 
   handleChange(event){
    this.setState({
      textArea: event.target.value
    })
     var truth = this.validPoem(event.target.value)
      this.setState({
      valid: truth
    })
  }

   validPoem(poem){
      var poemLineLength =  poem.split('\n').length
      if (poemLineLength >= 3){
      var firstLine = poem.split('\n')[0]
      var firstLineWords = firstLine.trim().split(' ').length
      var secondLine = poem.split('\n')[1]
      var secondLineWords = secondLine.trim().split(' ').length
      var thirdLine = poem.split('\n')[2]
       var thirdLineWords = thirdLine.trim().split(' ').length
    }

    return (poemLineLength === 3 && firstLineWords === 5 && secondLineWords === 3 && thirdLineWords === 5)
}

  renderUserMessage(){
     if (this.state.valid === false){
       return (
        <span>
        <div id="poem-validation-error" style={{color: 'red'}}>{this.renderUserMessage}</div>
        </span>
        )
    }
  }
  



  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.textArea} onChange={this.handleChange}/>
        {this.renderUserMessage()}
       
        }
      </div>
    );
  }
}




module.exports = PoemWriter;
