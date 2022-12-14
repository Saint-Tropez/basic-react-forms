import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstName = (event) => {
    setValues({
      ...values,
      firstName: event.target.value,
    });
  };

  const handleLastName = (event) => {
    setValues({
      ...values,
      lastName: event.target.value,
    });
  };

  const handleEmail = (event) => {
    setValues({
      ...values,
      email: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="sucess-message">
            Sucess! Thank you for registering
          </div>
        ) : null}

        <input
          onChange={handleFirstName}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span> Please enter a first name</span>
        ) : null}

        <input
          onChange={handleLastName}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span> Please enter a last name</span>
        ) : null}

        <input
          onChange={handleEmail}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span> Please enter a email</span>
        ) : null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
