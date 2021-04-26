import React, { useState } from "react";
import axios from "axios";

function Home(props) {
  const [client, setClinet] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleInputChange(event) {
    setClinet({ ...client, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5999/add/contact", client)
      .then((res) => {
        props.history.push('/user')
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container-fluid">
      <div classNmae="row">
        <div className="col-md-6 mx-auto mt-4">
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label for="firstName" className="form-label">
                firstName
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
                value={client.firstName}
                onChange={(event) => handleInputChange(event)}
                placeholder=" write your first Name"
              />
            </div>
            <div className="mb-3">
              <label for="lastName" className="form-label">
                lastName
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                value={client.lastName}
                onChange={(event) => handleInputChange(event)}
                placeholder=" write your last Name"
              />
            </div>
            <div className="mb-3">
              <label for="Email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="emailHelp"
                value={client.email}
                onChange={(event) => handleInputChange(event)}
                name="email"
                placeholder="write your email address"
              />
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">
                phone
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                value={client.phone}
                onChange={(event) => handleInputChange(event)}
                placeholder="  write your number phone"
              />
            </div>
            <div className="mb-3">
              <label for="Message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="Message"
                rows="3"
                name="message"
                value={client.massage}
                onChange={(event) => handleInputChange(event)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
