import React from 'react';

class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

  }

  handleSubmit(event){
   const name = this.state.name;
   const email = this.state.email;
   const message = this.state.message;

    // alert(
    //   'Name: ' +  + this.state.name +
    //   ' Email: ' + this.state.email +
    //   ' Message: ' + this.state.message
    // )
  }

  render(){
    return (
      <form>
        <label>
          Name:
          <input
            name="name"
            type="input"
            checked={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="input"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Message:
          <input
            name="message"
            type="textbox"
            value={this.state.message}
            onChange={this.handleInputChange} />
        </label>
        <input
          name="submit"
          type="submit"
          onClick={this.handleSubmit} />
      </form>
    )

  }
  
}

export default ContactForm;