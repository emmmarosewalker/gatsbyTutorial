import React from "react"

export default class Contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form className="contactForm" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
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
          <textarea
            name="comment"
            form="contact"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}