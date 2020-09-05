import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import { store } from '../redux/store.js';
import { getToken } from '../redux/token/actions.js';
import { getCurrentUser } from '../redux/user/actions.js';
import { instance } from '../axios/axios.js'
import { connect } from 'react-redux'

// handle validation
function Login({ getToken, getCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await getToken({username, password})
    instance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().token.access}`
    await getCurrentUser()
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormControl
            autoFocus
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter email or username..."
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Type your password here..."
          />
        </FormGroup>
        <Button block disabled={!validateForm()} variant="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    getToken: (logInData) => dispatch(getToken(logInData)),
    getCurrentUser: () => dispatch(getCurrentUser()),
  }
}


export default connect(null, mapDispatchToProps)(Login)
