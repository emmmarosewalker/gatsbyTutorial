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
      <form name="contact" className="contactForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <div>
            <input type="hidden" name="bot-field" />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
            <button type="submit">Submit</button>
        </div>
    </form>
    )
  }
}