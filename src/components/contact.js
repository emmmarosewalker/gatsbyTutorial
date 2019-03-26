import React from "react"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    message: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    console.log(event);
  }

  render() {
    return (
      <form name="contact" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Message
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}