import { Component } from "react";
import "./Apps.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      errors: [],
    };

    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
  }

  submitForm(event) {
    console.log("Submit the form now");
    console.log(event);
  }

  displayErrors() {
    return (
      <div className="errors">
        {this.state.errors.map((err, index) => (
          <p key={`err-${index}`}>{err}</p>
        ))}
      </div>
    );
  }

  validateNotEmpty(fieldName, value) {
    if (value.length <= 0) {
      return `${fieldName} must be filled out.`;
    }
  }

  validateUsernameOnBlur(event) {
    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username", username));
    this.setState({ username, errors });
  }

  validatePasswordOnBlur(event) {
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Password", password));
    this.setState({ password, errors });
  }

  validateEmailFormat(fieldName, value) {
    let [lhs, rhs] = value.split("@");
    lhs = lhs || "";
    rhs = rhs || "";
    if (lhs.length <= 0 || rhs.length <= 0) {
      return `${fieldName} must be in a standard email format`;
    }
  }

  validateEmailOnBlur(event) {
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateEmailFormat("Email", email));
    this.setState({ email, errors });
  }

  displayForm() {
    return (
      <div className="displayForm">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onBlur={this.validateUsernameOnBlur}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          onBlur={this.validatePasswordOnBlur}
        />
        <br />
        <label htmlFor="passwordConfirmation">Password Confirmation: </label>
        <input
          type="text"
          id="passwordConfirmation"
          name="passwordConfirmation"
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" />
        <br />
        <button type="submit" onClick={this.submitForm}>
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Create Account</h1>
        {this.displayErrors()}
        <hr />
        {this.displayForm()}
      </div>
    );
  }
}

export default App;
